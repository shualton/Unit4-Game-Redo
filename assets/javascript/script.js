$(document).ready(function() {
    var random = [];
    for(var r = 20; r <= 120; r++) {
        random.push(r);
    }
    var powerup = [];
    for(var p = 1; p < 10; p++) {
        powerup.push(p);
    }

    var randNum;
    var powerNum = [];
    var p1;
    var p2;
    var p3;
    var p4;

    var score = 0;
    var wins = 0;
    var losses = 0;

    function generateRand(arr) {
        var i = arr[Math.floor(Math.random() * arr.length)];
        randNum = i;
        $("#randomNumber").html(randNum);
    }

    function generatePowerup(arr) {
        for (var j = 0; j < 4; y++) {
            var a = arr[Math.floor(Math.random() * arr.length)];
            powerNum.push(a);
        }
    }

});