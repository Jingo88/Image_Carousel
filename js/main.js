$(document).ready(function(){	
	$('body').css({height: $(window).innerHeight()})
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

	$('img').on('click', function(){
		console.log(this.src)
		$('#modal>div>img').attr("src", this.src)
		$('#modal').toggle();
	});

	setImageNum(counter+1, charNum);

});

var characters = Object.keys(marvel)
var charNum = characters.length
var counter = 0

$('.right').click(function(){
	moveRight();
});

$('.left').click(function(){
	moveLeft();
});

$('.first').click(function(){
	endImage(0);
});

$('.last').click(function(){
	endImage(charNum-1);
})

$('body').keydown(function(e){
	if (e.keyCode === 39 || e.keyCode === 68){
		moveRight()
	} else if (e.keyCode === 37 || e.keyCode === 65){
		moveLeft()
	}
})

var setImageNum = function(curr, max){
	$('.photoNum').html(curr + " of " + max);
};

var moveRight = function(){
	if (counter < charNum-1){
		$('.card#'+counter).hide();
		counter++
		$('.card#' + counter).show();
	}
	setImageNum(counter+1, charNum);
};

var moveLeft = function(){
	if (counter > 0 ){
		$('.card#'+counter).hide();
		counter--
		$('.card#' + counter).show();
	}
	setImageNum(counter+1, charNum);
};

var endImage = function(endNum){
		$('.card#'+counter).hide();
		counter = endNum
		$('.card#' + counter).show();
	setImageNum(counter+1, charNum);
};