$(document).ready(function(){

var attack = 8;
console.log(attack);

var attackIncrease = 1;

var counterAttack = 25;

var firstCharacter = document.getElementById("firstCharacter");
console.log(firstCharacter);

var secondCharacter = document.getElementById("secondCharacter");

var thirdCharacter = document.getElementById("thirdCharacter");

var fourthCharacter = document.getElementById("fourthCharacter");

var character1 = {
	name: "Obi Wan Kenobi",
	points: 120
};

var character2 = {
	name: "Qui-Gon Jinn",
	points: 100 
};

var character3 = {
	name: "Kylo Ren",
	points: 150
};

var character4 = {
	name: "Darth Vader",
	points: 180
};

// var allCharacters = [firstCharacter, secondCharacter, thirdCharacter, fourthCharacter];


var setNamesAndPoints = function() {
	$("#firstCharacterName").html(character1.name);
	$("#firstCharacterPoints").html(character1.points);
	$("#secondCharacterName").html(character2.name);
	$("#secondCharacterPoints").html(character2.points);
	$("#thirdCharacterName").html(character3.name);
	$("#thirdCharacterPoints").html(character3.points);
	$("#fourthCharacterName").html(character4.name);
	$("#fourthCharacterPoints").html(character4.points);
}

setNamesAndPoints();

var chooseCharacter = function() {
	$("#firstCharacter").click(function(){
		$("#chosenCharacter").replaceWith(firstCharacter);
		$("#enemiesAvailable").replaceWith(secondCharacter, thirdCharacter, fourthCharacter);
	});
}

chooseCharacter();





});//Ends jQuery document.ready()



