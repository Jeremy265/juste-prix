const WIN = 1, LOWER = 2, UPPER = 3;
let lowerBound, upperBound, time, timeLeft, timeInterval, numberToGuess;

const updateSettings = () => {
    lowerBound = $("#lower-bound").val();
    upperBound = $("#upper-bound").val();
    time = $("#time").val();
}

const enableSettings = () => {
    $("#form-settings input, #form-settings button").removeAttr("disabled");
}

const disabledSettings = () => {
    $("#form-settings input, #form-settings button").attr("disabled", "true");
}

$(document).ready(() => {

    $("#form-settings").on("submit", (e) => {
        e.preventDefault();
        start();
    });

});

