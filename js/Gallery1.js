$(document).ready(function(){

//runs the function to bring in the big image when small
//is hovered over

	slidingIn();

	thumbscroll();

});

function slidingIn(){
	$('.small').hover(function(){
		$(this).next('.big').addClass('hover');
	},
		function(){
			$(this).next('.big').removeClass('hover');
		});
};

function thumbscroll(){
	var control = 0;
	$('#rightcontrol').click(function(){
		if(control < -671){
			return;
		} else {
			control = control - 168;
		}
		$('.thumbnails').css('margin-left',control + 'px');
	});
	$('#leftcontrol').click(function(){
		if(control > -1){
			return;
		} else {
			control = control + 168;
		}
		$('.thumbnails').css('margin-left', control +"px");
	});
};