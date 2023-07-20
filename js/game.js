const start = () => {
    updateSettings();
    disabledSettings();
    chooseNumberToGuess();
    enableGame();
    startChrono();
	$("#guess").focus();
}

const end = () => {
    disableGame();
    enableSettings();
    clearInterval(timeInterval);
}

const disableGame = () => {
    $("#form-game input").attr("disabled", "true");
}

const enableGame = () => {
    $("#form-game input").removeAttr("disabled");
}

const chooseNumberToGuess = () => {
    numberToGuess = Math.round((Math.random() * upperBound) + lowerBound);
}

const looseGame = () => {
    $("#tip").html("Perdu");
}

const winGame = () => {
    $("#tip").html("Gagné");
}

const startChrono = () => {
    timeLeft = time;
    $("#time-left").html(timeLeft);
    timeInterval = setInterval(updateTimeLeft,1000);
}

const lower = () => {
    $("#tip").html("Moins !");
}

const upper = () => {
    $("#tip").html("Plus !");
}

const updateTimeLeft = () => {
    timeLeft--;
    $("#time-left").html(timeLeft);
    checkTimeLeft();
}


const checkTimeLeft = () => {
    if (timeLeft > 0) {
        return;
    }
    end();
    looseGame();
}

const checkGuess = (guess) => {
    if (guess > numberToGuess) {
        lower();
        return;
    }
    if (guess < numberToGuess) {
        upper();
        return;
    }
    end();
    winGame("a");
}

$(document).ready(() => {

    $("#form-game").on("submit", (e) => {
        e.preventDefault();
        checkGuess($("#guess").val());
		$("#guess").val("");
    });

    $("#retry").on("click", (e) => {
        e.preventDefault();
        end();
    });

});
