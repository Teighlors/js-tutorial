var button = document.getElementById("my-button");

button.addEventListener("click", function() {
    alert("Button was clicked");
});


function mouseOver() {
    document.getElementById("my-button").style.borderColor = "green";
    document.getElementById("my-button").style.color = "green";
    document.getElementById("my-button").style.boxShadow = "5px 5px 5px 5px green";

}

function mouseOut() {
    document.getElementById("my-button").style.borderColor = "white";
    document.getElementById("my-button").style.color = "white";
    document.getElementById("my-button").style.boxShadow = "none";

}

var element = document.getElementById("my-element");


element.addEventListener("click", function() {
    document.getElementById("red").style.backgroundColor = getRandomColor("blue");
    document.getElementById("blue").style.backgroundColor = getRandomColor();
});

