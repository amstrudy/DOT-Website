/* Written by Anja Sheppard
 * Dec. 2015
 * For Climate LEAP Action project
 */
 
$(document).ready(function () {

     // Declare the list of page anchors
  var anchors = ["Home", "About", "DoOneThing", "HowToPledge", "ThankYou"];
    
    $("#fullpage").fullpage({
      // Pass in the list of page anchors
      anchors: anchors,
      // When the section starts to change, the function below is called.
      // We can use this to trigger styling of the active navbar item.
      onLeave: function (index, nextIndex, direction) {
        // Declare the name of the CSS class that defines the styling
        // for the active navbar item
        var activeClass = "active";
        // Loop over the <a>s in the navbar
        $("#navbar").find("a").each(function () {
          // Grab the <li> inside the <a>
          var li = $(this).find("li");
          // If the <a href="..."> matches the href of the section to which we
          // are transitioning, add the style for the active navbar item.
          // Otherwise, remove the style.
          if ($(this).attr("href") == "#" + anchors[nextIndex-1]) {
            li.addClass(activeClass);
          }
          else {
            li.removeClass(activeClass);
          }
        });
      }
  });
    /*
    $("#fullpage").fullpage({
        anchors: ["Home", "About", "DoOneThing", "HowToPledge", "ThankYou"]
    });
*/
    //array for each DOT option
    //random array space chosen and corresponding oercent is chosen from leftArray
    //leftArray gives the percent for margin-left in css
    //re-chosen every 3 seconds
    //all of this happens in newDot();

    var dotArray = ["#DRIVELESS", "#UNPLUG", "#SPEAKUP", "#STOPWASTE", "#TURBOSHOWER", "#EAT4REAL", "#ROCKASWEATER", "#THRIFTSHOP"];
    var arrayNum = Math.floor((8 * Math.random()));
    var dotnum = dotArray[arrayNum];

    var leftArray = [47, 47, 47, 47, 47, 47, 48, 47];
    var x;
    var y = "%";

    function newDot(){

        /*$("#h1").html(dotnum).fadeOut("2000");*/

        arrayNum = Math.floor((8 * Math.random()));
        dotnum = dotArray[arrayNum];
        x = leftArray[arrayNum];

        $("#h1").html(dotnum).fadeIn("2000");

        $("#h1").css("left", x + y);

    };
    
    Submit = function(){
        
        var win = window.open("https://acespace.org/dot", '_blank');
        win.focus();
        
    }
    
    SubmitForm = function(){
        
        var win = window.open("http://goo.gl/forms/nRZ3Pyz1gx", '_blank');
        win.focus();
                
    }
    
    
   /* 
   $("#litop").click(function() {
        $('html,body').animate({scrollTop: $("#secondpage").offset().top},'slow');
        console.log("worked");
    });
    
    $("#lidot").click(function() {
        $('html,body').animate({scrollTop: $("#thirdpage").offset().top},'slow');
        console.log("worked2");
    });
    
    $("#lipledge").click(function() {
        $('html,body').animate({scrollTop: $("#fourthpage").offset().top},'slow');
        console.log("worked2");
    });
    
    $("#libottom").click(function() {
        $('html,body').animate({scrollTop: $("#fifthpage").offset().top},'slow');
        console.log("worked2");
    });
*/

    /*$("#p").hide();

   // $("#p").delay().show(0);

    setTimeout(function() {

        $("#p").fadeIn("slow").show();

    }, 2000);
*/

    //re-choose a new DOT

    var a;

    function everyTime(a){

        setTimeout(function() {

            newDot();

        }, a);

        setTimeout(function() {

            everyTime(5000);

        }, a);


    };


    //1 second after page loads, DOT appears
    everyTime(1000);

    //make arrow appear after 3 seconds
    setTimeout(function() {

        $("#firstarrowimg").fadeIn("slow").css("display", "block");


    }, 2000);

    // Create a function for when the window changes size
  /*  $(window).resize(function() {
    // Set the pages to have the same height as the <html> element
      $('#firstpage, #secondpage, #thirdpage, #fourthpage').height($(window).outerHeight());
    });
    // Have the function fire once when the page loads
    $(window).resize();

    $("#firstarrowimg").click(function() {
        $('html,body').animate({scrollTop: $("#secondpage").offset().top},'slow');
        console.log("down1");
    });

    $("#secondarrowimg").click(function() {
        $('html,body').animate({scrollTop: $("#thirdpage").offset().top},'slow');
        console.log("down2");
    });

    $("#thirdarrowimg").click(function() {
        $('html,body').animate({scrollTop: $("#fourthpage").offset().top},'slow');
        console.log("down3");
    });

    $("#secondtoparrowimg").click(function() {
        $('html,body').animate({scrollTop: $("#firstpage").offset().top},'slow');
        console.log("up2");
    });

    $("#thirdtoparrowimg").click(function() {
        $('html,body').animate({scrollTop: $("#secondpage").offset().top},'slow');
        console.log("up3");
    });

    $("#fourthtoparrowimg").click(function() {
        $('html,body').animate({scrollTop: $("#thirdpage").offset().top},'slow');
        console.log("up4");
    });*/

});







/*$(document).ready(function () {

        // Create a function for when the window changes size
    $(window).ready(function() {

        // Set the pages to have the same height as the <html> element
        $('#firstpage, #secondpage').height($(window).outerHeight());

    });

    // Have the function fire once when the document loads
    $(window).ready();

    var dotArray = ["#DRIVELESS", "#UNPLUG", "#SPEAKUP", "#STOPWASTE", "#TURBOSHOWER", "#EAT4REAL", "#ROCKASWEATER", "#THRIFTSHOP"];
    var arrayNum = Math.floor((8 * Math.random()));
    var dotnum = dotArray[arrayNum];

    var leftArray = [35, 38, 37, 34, 31, 37, 31, 34.50];
    var x;
    var y = "%";

    function newDot(){

        arrayNum = Math.floor((8 * Math.random()));
        dotnum = dotArray[arrayNum];
        x = leftArray[arrayNum];

        $("#h1").html(dotnum).fadeIn("2000");;

        $("#h1").css("left", x + y);

    };

    $("#p").hide();

   // $("#p").delay().show(0);

    setTimeout(function() {

        $("#p").fadeIn("slow").show();

    }, 2000);
var a;


    function everyTime(a){

        setTimeout(function() {

            newDot();

        }, a);

        setTimeout(function() {

            everyTime(5000);

        }, a);


    };

    everyTime(1000);


    $("button").click(function() {
        $('html,body').animate({scrollTop: $("#firstpage").offset().top},'slow');
    });



});*/