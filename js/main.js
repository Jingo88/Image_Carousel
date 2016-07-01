$(document).ready(function(){	
	// $('body').css({height: $(window).innerHeight()})

	for (var i = 0; i<charNum; ++i){
		var card = $('<div class="card">');
		var large = $('<div class="large">');
		var content = $('<div class="content">');
		var heroName = $('<h2>'+marvel[characters[i]]["heroName"]+ '</h2>')
		var description = $('<p class="description">' + marvel[characters[i]]["description"]+'</p>');
		var img = $('<img class="'+characters[i]+'" >');
		card.attr('id', ''+i);
		img.attr('src', 'img/'+marvel[characters[i]]["pathname"]);
		img.appendTo(large);
		large.appendTo(card);
		heroName.appendTo(content);
		description.appendTo(content);
		content.appendTo(card);
		card.hide();
		card.appendTo(".gallery");
	}

	$('.card#' + counter).show();
});

var characters = Object.keys(marvel)
var charNum = characters.length-1
var counter = 0

$('.right').click(function(){
	if (counter < charNum){
		$('.card#'+counter).hide();
		counter++
		$('.card#' + counter).show();
	}
});

$('.left').click(function(){
	if (counter > 0 ){
		$('.card#'+counter).hide();
		counter--
		$('.card#' + counter).show();
	}
});