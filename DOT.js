/* Written by Anja Sheppard
 * Dec. 2015
 * For Climate LEAP Action project
 */
 
$(document).ready(function () {
    
    var split = 0;
     // Declare the list of page anchors
  var anchors = ["Home", "About", "DoOneThing", "HowToPledge", "ThankYou"];
    var liArray = ["#litop", "#liabout", "#lidot", "#lipledge", "#lithankyou"];
    var colorArray = ["#3260A9", "#14499E", "#0C3678", "#507ABC", "#14499E"];
    
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
            
 //document.getElementsByClassName("active").style.backgroundColor = colorArray[nextIndex-1];
            
            /*if ($(this).attr("href") == "#Home") {
                document.getElementById("litop").style.color = colorArray[0];
                document.getElementById("liabout").style.color = colorArray[0];
                document.getElementById("lidot").style.color = colorArray[0];
                document.getElementById("lipledge").style.color = colorArray[0];
                document.getElementById("lithankyou").style.color = colorArray[0];
          }
            
            else if ($(this).attr("href") == "#About") {
                document.getElementById("litop").style.color = colorArray[1];
                document.getElementById("liabout").style.color = colorArray[1];
                document.getElementById("lidot").style.color = colorArray[1];
                document.getElementById("lipledge").style.color = colorArray[1];
                document.getElementById("lithankyou").style.color = colorArray[1];
          }
            
            else if ($(this).attr("href") == "#DoOneThing") {
                document.getElementById("litop").style.color = colorArray[2];
                document.getElementById("liabout").style.color = colorArray[2];
                document.getElementById("lidot").style.color = colorArray[2];
                document.getElementById("lipledge").style.color = colorArray[2];
                document.getElementById("lithankyou").style.color = colorArray[2];
          }
            
            else if ($(this).attr("href") == "#HowToPledge") {
                document.getElementById("litop").style.color = colorArray[3];
                document.getElementById("liabout").style.color = colorArray[3];
                document.getElementById("lidot").style.color = colorArray[3];
                document.getElementById("lipledge").style.color = colorArray[3];
                document.getElementById("lithankyou").style.color = colorArray[3];
          }
            
            else if ($(this).attr("href") == "#ThankYou") {
                document.getElementById("litop").style.backgroundColor = colorArray[4];
                document.getElementById("liabout").style.backgroundColor = colorArray[4];
                document.getElementById("lidot").style.backgroundColor = colorArray[4];
                document.getElementById("lipledge").style.backgroundColor = colorArray[4];
                document.getElementById("lithankyou").style.backgroundColor = colorArray[4];
          }*/
        });
      }

  });
    
    

    var assignIndex = function(){
        
        var index;
        
        split = window.location.hash.split('#')[1];

        if(split == "Home")
           index = 0;
        else if(split == "About")
            index = 1;
        else if(split == "DoOneThing")
            index = 2;
        else if(split == "HowToPledge")
            index = 3;
        else if(split == "ThankYou")
            index = 4;
            
        return index;
        
    }
    
    
    changeColor = function(i){
        
        var index = assignIndex();
        
        $(liArray[i]).css("background-color", colorArray[index]);
        
    }
    
    changeColorBack = function(j){
        
        $(liArray[j]).css("background-color", "#06977F");
        
    }
    
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
