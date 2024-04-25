function convert() {
    var celsiusInput = document.getElementById("c-to-f-input").value.trim();

    if (celsiusInput === "" || isNaN(celsiusInput)) {
        alert("Masukkan nilai suhu Celsius yang valid.");
        return;
    }

    var celsius = parseFloat(celsiusInput);
    var fahrenheit = (celsius * 9/5) + 32;
    document.querySelector(".section-fahrenheit textarea").value = fahrenheit.toFixed(2);
    document.querySelector(".section-result textarea").value = celsius + " °C x 9/5 + 32 = " + fahrenheit.toFixed(2) + " °F";
}

function reverse() {
    var fahrenheitInput = document.querySelector(".section-fahrenheit textarea").value.trim();
    if (fahrenheitInput === "" || isNaN(fahrenheitInput)) {
        alert("Masukkan nilai suhu Fahrenheit yang valid.");
        return;
    }

    var fahrenheit = parseFloat(fahrenheitInput);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("c-to-f-input").value = celsius.toFixed(2);
    document.querySelector(".section-result textarea").value = fahrenheit + " °F - 32 x 5/9 = " + celsius.toFixed(2) + " °C";
}
document.getElementById("button-reset").addEventListener("click", function() {
    document.getElementById("c-to-f-input").value = "";
    document.querySelector(".section-fahrenheit textarea").value = "";
    document.querySelector(".section-result textarea").value = "";
});

// let isReverse = true

// function reverse(){
//     let cToF = document.getElementById('c-to-f');
//     let fToC = document.getElementById('f-to-c');

//     if(isReverse) {
//         console.log(isReverse);
//         fToC.style.display = "block";
//         cToF.style.display = "none";
//         isReverse = false;
//     } else {
//         console.log(isReverse);
//         cToF.style.display = "block";
//         fToC.style.display - "none";
//         isReverse = true
//     }
// }
