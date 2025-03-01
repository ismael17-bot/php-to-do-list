$(document).ready(function() {
	$('.edit-button').on('click', function() {
		var $task = $(this).closest('.task');
		$task.find('.progress').addClass('hidden');
		$task.find('.task-drescription').addClass('hidden');
		$task.find('.task-actions').addClass('hidden');
		$task.find('.edit_task').removeClass('hidden');
	});


	$('.progress').on('click', function() {
		if($(this).is(':checked')) {
			$(this).addClass('done');
		} else {
			$(this).removeClass('done');
		}
	});

	$('.progress').on('change', function() {
			const id = $(this).data('task-id');
			const completed = $(this).is(':checked') ? 'true' : 'false';

			$.ajax({
				url: '../../actions/update-progress.php',
				method: 'POST',
				data: {id: id, completed: completed},
				dataType: 'json',
				success: function(response) {
					if (response.success) {} else {alert('Error')}
				}
			});
	});
});