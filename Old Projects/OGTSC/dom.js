var p1disp = document.getElementById('ps1');
var pscore2 = document.getElementById('ps2');
var maxscore = document.getElementById('pmax');
var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
p1score = 0;

p1Button.addEventListener("click", function(){
	alert("hey")
	p1score++;
	p1score.textContent = p1disp;
} );