// This function executes when the user changes the input value
function myfunction() {
    // Getting values from input
    var x = document.getElementById("left").value;
    var y = document.getElementById("right").value;
    var z = document.getElementById("angle").value;

    // Defining a combined string of the inputs
    var string = "linear-gradient(" + z + ", " + x + ", " + y + ")";

    // Setting the string as bg-image property
    document.body.style.backgroundImage = string;

    // Giving the code to P tag to show it to USER
    var p = document.getElementById("myText");
    p.innerText = "background-image: " + string + ";"; 

    // ^^ into Clipboard
    var btn = document.getElementById("clipboard");
    btn.onclick = function() {
        navigator.clipboard.writeText("background-image: " + string + ";");
        alert("The css color code for this gradient is copied in clipboard!");
    }
} 
