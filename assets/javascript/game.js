$(document).ready(function(){

var attack = 8;
console.log(attack);

var attackIncrease = 1;

var counterAttack = 25;

// var firstCharacter = document.getElementById("firstCharacter");
// console.log(firstCharacter);

// var secondCharacter = document.getElementById("secondCharacter");

// var thirdCharacter = document.getElementById("thirdCharacter");

// var fourthCharacter = document.getElementById("fourthCharacter");

var firstCharacter = {
	name: "Obi Wan Kenobi",
	points: 120
};

var secondCharacter = {
	name: "Qui-Gon Jinn",
	points: 100 
};

var thirdCharacter = {
	name: "Kylo Ren",
	points: 150
};

var fourthCharacter = {
	name: "Darth Vader",
	points: 180
};

// var allCharacters = [firstCharacter, secondCharacter, thirdCharacter, fourthCharacter];


var setNamesAndPoints = function() {
	$("#firstCharacterName").html(firstCharacter.name);
	$("#firstCharacterPoints").html(firstCharacter.points);
	$("#secondCharacterName").html(secondCharacter.name);
	$("#secondCharacterPoints").html(secondCharacter.points);
	$("#thirdCharacterName").html(thirdCharacter.name);
	$("#thirdCharacterPoints").html(thirdCharacter.points);
	$("#fourthCharacterName").html(fourthCharacter.name);
	$("#fourthCharacterPoints").html(fourthCharacter.points);
}

setNamesAndPoints();







});



