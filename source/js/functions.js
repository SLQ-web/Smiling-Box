var moonText = "..the moon chuckles.";

var init = function() {

    document.getElementById('moonBtn').addEventListener( 'click', function(){
        console.log("insert moon text");
        document.getElementById('moon').innerHTML = moonText;
    });

    document.getElementById('resetBtn').addEventListener( 'click', function(){
        console.log("remove moon text");
        document.getElementById('moon').innerHTML = "";
    });

}

window.addEventListener('DOMContentLoaded', init, false);
