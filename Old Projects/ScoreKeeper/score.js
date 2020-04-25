var p1Button = document.querySelector("#p1")
var p1Display = document.querySelector("#p1Display")
p1Score = 0 ;

p1Button.addEventListener("click", function(){
    p1Score++;
    p1Display.textContent = p1Score
});