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

var chosen = document.getElementById("chosenCharacter");

var defender = document.getElementById("defender");

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
			$("button").click(function(){
				$("#firstCharacterPoints").html(character1.points - counterAttack);
			});
		$("#enemiesAvailable").replaceWith(secondCharacter, thirdCharacter, fourthCharacter);
		$("#secondCharacter").click(function(){
			$("#defender").replaceWith(secondCharacter);
				$("button").click(function(){
					$("#secondCharacterPoints").html(character2.points - counterAttack);
				});
		});
		$("#thirdCharacter").click(function(){
			$("#defender").replaceWith(thirdCharacter);
				$("button").click(function(){
					$("#thirdCharacterPoints").html(character3.points - counterAttack);
				});
		});
		$("#fourthCharacter").click(function(){
			$("#defender").replaceWith(fourthCharacter);
				$("button").click(function(){
					$("#fourthCharacterPoints").html(character4.points - counterAttack);
				});
		});
	});
	$("#secondCharacter").click(function(){
		$("#chosenCharacter").replaceWith(secondCharacter);
			$("button").click(function(){
					$("#secondCharacterPoints").html(character2.points - counterAttack);
			});
		$("#enemiesAvailable").replaceWith(firstCharacter, thirdCharacter, fourthCharacter);
		$("#firstCharacter").click(function(){
			$("#defender").replaceWith(firstCharacter);
				$("button").click(function(){
					$("#firstCharacterPoints").html(character1.points - counterAttack);
				});
		});
		$("#thirdCharacter").click(function(){
			$("#defender").replaceWith(thirdCharacter);
				$("button").click(function(){
					$("#thirdCharacterPoints").html(character3.points - counterAttack);
				});
		});
		$("#fourthCharacter").click(function(){
			$("#defender").replaceWith(fourthCharacter);
				$("button").click(function(){
					$("#fourthCharacterPoints").html(character4.points - counterAttack);
				});
		});
	});
	$("#thirdCharacter").click(function(){
		$("#chosenCharacter").replaceWith(thirdCharacter);
			$("button").click(function(){
					$("#thirdCharacterPoints").html(character3.points - counterAttack);
			});
		$("#enemiesAvailable").replaceWith(firstCharacter, secondCharacter, fourthCharacter);
		$("#firstCharacter").click(function(){
			$("#defender").replaceWith(firstCharacter);
				$("button").click(function(){
					$("#firstCharacterPoints").html(character1.points - counterAttack);
				});

		});
		$("#secondCharacter").click(function(){
			$("#defender").replaceWith(secondCharacter);
				$("button").click(function(){
					$("#secondCharacterPoints").html(character2.points - counterAttack);
				});
		});
		$("#fourthCharacter").click(function(){
			$("#defender").replaceWith(fourthCharacter);
				$("button").click(function(){
					$("#fourthCharacterPoints").html(character4.points - counterAttack);
				});
		});
	});
	$("#fourthCharacter").click(function(){
		$("#chosenCharacter").replaceWith(fourthCharacter);
			$("button").click(function(){
					$("#fourthCharacterPoints").html(character4.points - counterAttack);
			});
		$("#enemiesAvailable").replaceWith(firstCharacter, secondCharacter, thirdCharacter);
		$("#firstCharacter").click(function(){
			$("#defender").replaceWith(firstCharacter);
				$("button").click(function(){
					$("#firstCharacterPoints").html(character1.points - counterAttack);
				});
		});
		$("#secondCharacter").click(function(){
			$("#defender").replaceWith(secondCharacter);
				$("button").click(function(){
					$("#secondCharacterPoints").html(character2.points - counterAttack);
				});
		});
		$("#thirdCharacter").click(function(){
			$("#defender").replaceWith(thirdCharacter);
				$("button").click(function(){
					$("#thirdCharacterPoints").html(character3.points - counterAttack);
				});
		});
	});
}

chooseCharacter();

// var startFight = function(){
// 	$("button").click(function(){
// 		$("#firstCharacterPoints").html(character1.points - counterAttack);
// 	});
// }

// startFight();

});//Ends jQuery document.ready()



