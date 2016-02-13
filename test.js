$(document).ready(function () {

    var dotArray = ["#DRIVELESS", "#UNPLUG", "#SPEAKUP", "#STOPWASTE", "#TURBOSHOWER", "#EAT4REAL", "#ROCKASWEATER", "#THRIFTSHOP"];
    var arrayNum = Math.floor((8 * Math.random()));
    var dot = dotArray[arrayNum];

        $("p").hide();

    $("p").delay().show();
console.log("hi");
    
    $("h1").fadeIn("2000");
    
    $("h1").html(dot);
        

});