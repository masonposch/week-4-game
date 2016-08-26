$(document).ready(function(){

var attack = 8;

// var attackIncrease = 1;

var counterAttack = 25;

var firstCharacter = document.getElementById("firstCharacter");
console.log(firstCharacter);

var secondCharacter = document.getElementById("secondCharacter");

var thirdCharacter = document.getElementById("thirdCharacter");

var fourthCharacter = document.getElementById("fourthCharacter");

var chosen = document.getElementById("chosenCharacter");

var defender = document.getElementById("defender");

var firstCharacterPoints = document.getElementById("firstCharacterPoints");

var secondCharacterPoints = document.getElementById("secondCharacterPoints");

var thirdCharacterPoints = document.getElementById("thirdCharacterPoints");

var fourthCharacterPoints = document.getElementById("fourthCharacterPoints");

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

var attackNumber;

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




var firstScenario = function() {
	attackNumber = 1;
	$("#firstCharacter").click(function(){
		$("#chosenCharacter").replaceWith(firstCharacter);
		$("button").click(function(){
			$(firstCharacterPoints).html(character1.points - counterAttack);
		});
		$("#enemiesAvailable").replaceWith(secondCharacter, thirdCharacter, fourthCharacter);
		$("#secondCharacter").click(function(){
			$("#defender").replaceWith(secondCharacter);
			$("button").click(function(){
				$(secondCharacterPoints).html(character2.points - attack * attackNumber);
				attackNumber++;
			});
		});
		$("#thirdCharacter").click(function(){
			$("#defender").replaceWith(thirdCharacter);
			$("button").click(function(){
				$(thirdCharacterPoints).html(character3.points - (attack*attackIncrease));
			});
		});
		$("#fourthCharacter").click(function(){
			$("#defender").replaceWith(fourthCharacter);
			$("button").click(function(){
				$(fourthCharacterPoints).html(character4.points - (attack*attackIncrease));
			});
		});
	});
}



var secondScenario = function() {
var attackIncrease = 1;
	$("#secondCharacter").click(function(){
		$("#chosenCharacter").replaceWith(secondCharacter);
			$("button").click(function(){
					$(secondCharacterPoints).html(character2.points - counterAttack);
			});
		$("#enemiesAvailable").replaceWith(firstCharacter, thirdCharacter, fourthCharacter);
		$("#firstCharacter").click(function(){
			$("#defender").replaceWith(firstCharacter);
				$("button").click(function(){
					$(firstCharacterPoints).html(character1.points - (attack*attackIncrease));
				});
		});
		$("#thirdCharacter").click(function(){
			$("#defender").replaceWith(thirdCharacter);
				$("button").click(function(){
					$(thirdCharacterPoints).html(character3.points - (attack*attackIncrease));
				});
		});
		$("#fourthCharacter").click(function(){
			$("#defender").replaceWith(fourthCharacter);
				$("button").click(function(){
					$(fourthCharacterPoints).html(character4.points - (attack*attackIncrease));
				});
		});
	});
}



var thirdScenario = function() {
var attackIncrease = 1;
	$("#thirdCharacter").click(function(){
		$("#chosenCharacter").replaceWith(thirdCharacter);
			$("button").click(function(){
					$(thirdCharacterPoints).html(character3.points - counterAttack);
			});
		$("#enemiesAvailable").replaceWith(firstCharacter, secondCharacter, fourthCharacter);
		$("#firstCharacter").click(function(){
			$("#defender").replaceWith(firstCharacter);
				$("button").click(function(){
					$(firstCharacterPoints).html(character1.points - (attack*attackIncrease));
				});

		});
		$("#secondCharacter").click(function(){
			$("#defender").replaceWith(secondCharacter);
				$("button").click(function(){
					$(secondCharacterPoints).html(character2.points - (attack*attackIncrease));
				});
		});
		$("#fourthCharacter").click(function(){
			$("#defender").replaceWith(fourthCharacter);
				$("button").click(function(){
					$(fourthCharacterPoints).html(character4.points - (attack*attackIncrease));
				});
		});
	});
}



var fourthScenario = function() {
var attackIncrease = 1;
	$("#fourthCharacter").click(function(){
		$("#chosenCharacter").replaceWith(fourthCharacter);
			$("button").click(function(){
					$(fourthCharacterPoints).html(character4.points - counterAttack);
			});
		$("#enemiesAvailable").replaceWith(firstCharacter, secondCharacter, thirdCharacter);
		$("#firstCharacter").click(function(){
			$("#defender").replaceWith(firstCharacter);
				$("button").click(function(){
					$(firstCharacterPoints).html(character1.points - (attack*attackIncrease));
				});
		});
		$("#secondCharacter").click(function(){
			$("#defender").replaceWith(secondCharacter);
				$("button").click(function(){
					$(secondCharacterPoints).html(character2.points - (attack*attackIncrease));
				});
		});
		$("#thirdCharacter").click(function(){
			$("#defender").replaceWith(thirdCharacter);
				$("button").click(function(){
					$(thirdCharacterPoints).html(character3.points - (attack*attackIncrease));
				});
		});
	});
}

firstScenario();
secondScenario();
thirdScenario();
fourthScenario();



});//Ends jQuery document.ready()



// $(".characters").on("click", function(){
// 			$(this)
// 		})

