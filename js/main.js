$(document).ready(function(){
	$('#flashinfo .flash:gt(0)').hide();
		setInterval(
			function(){
				$('#flashinfo > :first-child').fadeOut(1000, function() {
					   $(this).next('.flash').fadeIn(1000).end().appendTo('#flashinfo')
				});
			}, 5000
	);

});