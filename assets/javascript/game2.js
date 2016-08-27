$(document).ready(function(){

var attack = 8;

var attackIncrease = 0;

var counterAttack = 25;

var choices = [];

var firstCharacter = document.getElementById("firstCharacter");

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


var choosing = function(){
	$(".characters").on('click', function(){
		$("#chosenCharacter").append(this);
		$(".characters").on('click', function(){
			$("#defender").append(this);
		});
		choices.push(this);
		console.log(choices);
	});
}
choosing();

$('button').on('click', theAttack);

function theAttack(){
		attackIncrease++;
		var newAttack = attack*attackIncrease;
		if(choices[0] === firstCharacter){
			$("#firstCharacterPoints").html(character1.points - counterAttack * attackIncrease);
			if(character1.points - counterAttack * attackIncrease <= 0){
				alert("You lose");
				window.location.reload();
			} else {
				if(choices[1] === secondCharacter){
					$("#secondCharacterPoints").html(character2.points - newAttack);
					character2.points -= newAttack;
					if(character2.points -= newAttack <= 0){
						alert("You win");
						$("#defender").detach(secondCharacter);
					} else{
						return;
					}
				}
				else if(choices[1] === thirdCharacter){
					$("#thirdCharacterPoints").html(character3.points - newAttack);
					character3.points -= newAttack;
					if(character3.points - newAttack <= 0){
						alert("You win");
						$(thirdCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				} 
				else if(choices[1] === fourthCharacter){
					$("#fourthCharacterPoints").html(character4.points - newAttack);
					character4.points -= newAttack;
					if(character4.points - newAttack <= 0){
						alert("You win");
						$(fourthCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				}
			}
		}
		else if(choices[0] === secondCharacter){
			$("#secondCharacterPoints").html(character2.points - counterAttack * attackIncrease);
			if(character2.points - counterAttack * attackIncrease <= 0){
				alert("You lose");
				window.location.reload();
			} else {
				if(choices[1] === firstCharacter){
					$("#firstCharacterPoints").html(character1.points - newAttack);
					character1.points -= newAttack;
					if(character1.points - newAttack <= 0){
						alert("You win");
						$(firstCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				}
				else if(choices[1] === thirdCharacter){
					$("#thirdCharacterPoints").html(character3.points - newAttack);
					character3.points -= newAttack;
					if(character3.points - newAttack <= 0){
						alert("You win");
						$(thirdCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				} 
				else if(choices[1] === fourthCharacter){
					$("#fourthCharacterPoints").html(character4.points - newAttack);
					character4.points -= newAttack;
					if(character4.points - newAttack <= 0){
						alert("You win");
						$(fourthCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				}
			}
		}
		else if(choices[0] === thirdCharacter){
			$("#thirdCharacterPoints").html(character3.points - counterAttack * attackIncrease);
			if(character3.points - counterAttack * attackIncrease <= 0){
				alert("You lose");
				window.location.reload();
			} else{
				if(choices[1] === firstCharacter){
					$("#firstCharacterPoints").html(character1.points - newAttack);
					character1.points -= newAttack;
					if(character1.points - newAttack <= 0){
						alert("You win");
						$(firstCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				}
				else if(choices[1] === secondCharacter){
					$("#secondCharacterPoints").html(character2.points - newAttack);
					character2.points -= newAttack;
					if(character2.points - newAttack <= 0){
						alert("You win");
						$(secondCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				} 
				else if(choices[1] === fourthCharacter){
					$("#fourthCharacterPoints").html(character4.points - newAttack);
					character4.points -= newAttack;
					if(character4.points - newAttack <= 0){
						alert("You win");
						$(fourthCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				}
			}
		} 
		else if(choices[0] === fourthCharacter){
			$("#fourthCharacterPoints").html(character4.points - counterAttack * attackIncrease);
			if(character4.points - counterAttack * attackIncrease <= 0){
				alert("You lose");
				window.location.reload();
			} else {
				if(choices[1] === firstCharacter){
					$("#firstCharacterPoints").html(character1.points - newAttack);
					character1.points -= newAttack;
					if(character1.points - newAttack <= 0){
						alert("You win");
						$(firstCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				}
				else if(choices[1] === secondCharacter){
					$("#secondCharacterPoints").html(character2.points - newAttack);
					character2.points -= newAttack;
					if(character2.points - newAttack <= 0){
						alert("You win");
						$(secondCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				} 
				else if(choices[1] === thirdCharacter){
					$("#thirdCharacterPoints").html(character3.points - newAttack);
					character3.points -= newAttack;
					if(character3.points - newAttack <= 0){
						alert("You win");
						$(thirdCharacter).remove();
						$(".characters").on('click', function(){
							$("#defender").append(this);
							return;
						});
					} else{
						return;
					}
				}
			}
		}
}
theAttack();



});//Ends jQuery document.ready()

