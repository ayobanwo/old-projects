var p1Button = document.querySelector("#p1")
var p1Display = document.querySelector("#p1Display")
var p2Button = document.querySelector("#p2")
var p2Display = document.querySelector("#p2Display")
var reset = document.querySelector("#reset")
var playLimit = document.querySelector("h2 span")
var numInput = document.querySelector("input")
p1Score = 0 ;
p2Score = 0 ;
gameOver = false
winScore = 5

p1Button.addEventListener("click", function(){
	if (!gameOver) {
		
    p1Score++;
    if (p1Score === winScore) {
    	p1Display.classList.add("winner")
    	gameOver=true
    }
    p1Display.textContent = p1Score

	}
});

p2Button.addEventListener("click", function(){
   if (!gameOver) {
		
    p2Score++;
    if (p2Score === winScore) {
    	p2Display.classList.add("winner")
    	gameOver=true
    }
    p2Display.textContent = p2Score

	}
});

function resetButton() {
	p1Score = 0
	p2Score = 0
	p1Display.textContent = 0 
	p2Display.textContent = 0
	p1Display.classList.remove("winner")
	p2Display.classList.remove("winner")
	gameOver = false 
}

reset.addEventListener("click", function(){
	resetButton();
})

numInput.addEventListener("change", function(){
   playLimit.textContent = this.value
   winScore = Number(this.value)
   resetButton();
});