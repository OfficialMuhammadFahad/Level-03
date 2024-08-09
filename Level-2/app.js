
// Selection
var home = document.querySelector("#home");


// CSS Change
// home.style.color = "red";
// var section = document.querySelector("#main");
// section.style.backgroundColor = "pink";


// HTML Change
// section.innerHTML = "<section>ABCD</section>"
// home.innerHTML = "<section>ABCD</section>"


// Text Change
// home.textContent = "<section>ABCD</section>"
// home.textContent = "Home"


// Adding Listeners
home.addEventListener('mouseenter', function(){
    home.style.color = "red";
})

home.addEventListener('mouseleave', function(){
    home.style.color = "black";
})