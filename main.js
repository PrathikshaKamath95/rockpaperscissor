var choices = ["paper", "rock", "scissors"];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
function score(){
	var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score,50);
function convert(word){
	if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}
function game(UserChoice){
	var box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	var userDiv = document.getElementById("Userob");
	userDiv.innerHTML = convert(UserChoice);
	var comDiv = document.getElementById("Comobt");
	comDiv.innerHTML = convert(ComChoice);
	if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
		win(UserChoice);
	}
	else if(UserChoice === ComChoice){
		draw(UserChoice);
	}
	else{
		lose(UserChoice);
	}
	function continuGame(){
		i = Math.floor(Math.random() * 3);
		ComChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuGame, 1200);
}
function win(bn){
	UserPoints++;
    document.getElementById("who").innerHTML = "You win! ";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}
function draw(bn){
	document.getElementById("who").innerHTML = "It is a Draw.";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1200);
}
function lose(bn){
	ComPoints++;
	document.getElementById("who").innerHTML = "Opppss..You lose..Try again!";
	var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout(() => {
    	bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);
}
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
