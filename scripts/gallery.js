$(document).ready(function() {
$('#small a').click(function(eventObject){
	if($('#big img').attr('src')!=$(this).attr('href')){
		$('#big img').hide().attr('src', $(this).attr('href'));
	$('#big img').fadeIn(2000);
	}
	eventObject.preventDefault();
});


$('#small img').click(function(){
	$('#small img').fadeTo(1000, 1);
	$(this).fadeTo(1000, 0.6);
});

$('#small2 a').click(function(eventObject){
	if($('#big2 video').attr('src')!=$(this).attr('href')){
		$('#big2 video').hide().attr('src', $(this).attr('href'));
	$('#big2 video').fadeIn(2000);
	}

	eventObject.preventDefault();
});


$('#small2 video').click(function(){
	$('#small2 video').fadeTo(1000, 1);
	$(this).fadeTo(1000, 0.6);
});
});		

