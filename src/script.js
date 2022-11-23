let celsius = document.getElementById("celsius-input");
let fahrenheit = document.getElementById("fahrenheit-input");

// Execute the function to convert Celsius to Fahrenheit by entering the value in the input
function celToFar() {
    let output = (parseFloat(celsius.value) * 9 / 5) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

// Run the Fahrenheit to Celsius conversion function by entering a value in the input
function farToCel() {
    let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
}