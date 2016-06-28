console.log("Activate the JS Timer");

var init = function() {
    // set the date we're counting down to
    var target_date = new Date("December 25, 2016").getTime();

    // variables for time units
    var days, hours, minutes, seconds;

    // get tag element
    var countdown = document.getElementById("countdown");
    var clockspeed = document.getElementById("clockSpeed");

    // update the tag with id "countdown" every 1 second
    setInterval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var milliSecs = new Date().getMilliseconds();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        milliSecs = (milliSecs / 10);
        milliSecs = parseInt(milliSecs);

        if(days<=9){days="0"+days}
        if(minutes<=9){minutes="0"+minutes}
        if(seconds<=9){seconds="0"+seconds}
        if(milliSecs<=9){milliSecs="0"+milliSecs}

        // format countdown string + set tag value
        countdown.innerHTML = "There are " + days + " Days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds remaining." ;
        clockspeed.innerHTML =  days + " Days, " + hours + ":" + minutes + ":" + seconds + ":" + milliSecs + " Until it is Christmas time!.";

    }, 10);
}

window.addEventListener('DOMContentLoaded', init, false);
