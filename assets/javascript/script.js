$(document).ready(function() {
    var random = [];
    for(var r = 20; r <= 120; r++) {
        random.push(r);
    }
    var powerup = [];
    for(var p = 1; p < 10; p++) {
        powerup.push(p);
    }

    var score = 0;
    var wins = 0;
    var losses = 0;


    var randNum;
    var powerNum = [];
    var p1;
    var p2;
    var p3;
    var p4;

   
    function generatePowerup(arr) {
        for (var j = 0; j < 4; j++) {
            var a = arr[Math.floor(Math.random() * arr.length)];
            powerNum.push(a);
        }
    }

    function generateRand(arr) {
        var i = arr[Math.floor(Math.random() * arr.length)];
        randNum = i;
        $("#randomNumber").html(randNum);
    }

    function powerupValue(arr) {
        for(var p = 0; p < arr.length; p++) {
            $("#button-" + (p+1)).attr("value", arr[p]);
        }
        p1 = arr[0];
        console.log("p1", p1);
        p2 = arr[1];
        console.log("p2", p2);
        p3 = arr[2];
        console.log("p3", p3);
        p4 = arr[3];
        console.log("p4", p4);
    }

    function reset(x) {
        powerNum = [];
        generateRand(random);
        generatePowerup(powerup);
        powerupValue(powerNum);
        score = 0;
        $("#totalNumber").html(score);

    }

    generateRand(random);
    generatePowerup(powerup);
    powerupValue(powerNum);

    $("#button-1").on("click", function() {
        score += p1;
        $("#totalNumber").html(score);
        if (score === random) {
			wins++;
			console.log("won");
			$("#totalNumber").html(score);
			$("#wins").html("Wins: " + wins);

			reset();
		} else if (score > random){
            losses++;
            console.log("loss");
			$("#totalNumber").html(score);
			$("#losses").html("Losses: " + losses);
			reset();
		}
    });
    $("#button-2").on("click", function() {
        score += p2;
        $("#totalNumber").html(score);
        if (score === random) {
			wins++;
			console.log("won");
			$("#totalNumber").html(score);
			$("#wins").html("Wins: " + wins);

			reset();
		} else if (score > random){
            losses++;
            console.log("loss");
			$("#totalNumber").html(score);
			$("#losses").html("Losses: " + losses);
			reset();
		}
    });
    $("#button-3").on("click", function() {
        score += p3;
        $("#totalNumber").html(score);
        if (score === random) {
			wins++;
			console.log("won");
			$("#totalNumber").html(score);
			$("#wins").html("Wins: " + wins);

			reset();
		} else if (score > random){
            losses++;
            console.log("loss");
			$("#totalNumber").html(score);
			$("#losses").html("Losses: " + losses);
			reset();
		}
    });
    $("#button-4").on("click", function() {

        score += p4;
        $("#totalNumber").html(score);
        if (score === random) {
			wins++;
			console.log("won");
			$("#totalNumber").html(score);
			$("#wins").html("Wins: " + wins);

			reset();
		} else if (score > random){
            losses++;
            console.log("loss");
			$("#totalNumber").html(score);
			$("#losses").html("Losses: " + losses);
			reset();
		}
    });

});