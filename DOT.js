/* 
 * Designed and written by Anja Sheppard
 * 2016
 * fullPage created by Alvaro Trigo
 */

$(document).ready(function () {
    
    //initialization for the fullPage js scrolling
    
      // Declare the list of page anchors
  var anchors = ["Home", "About", "DoOneThing", "HowToPledge", "ThankYou"];
  // Initialize FullPage.js
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
              console.log("hi");
          }
          else {
            li.removeClass(activeClass);
          }
        });
      }
  });
    
    /*$("#fullpage").fullpage({
        anchors: ["Home", "About", "DoOneThing", "HowToPledge", "ThankYou"]//each page anchor
    });*/
    
    var split;//the page location (found by looking at end of URL)
    var liArray = ["#litop", "#liabout", "#lidot", "#lipledge", "#lithankyou"];//array with each navbar li id
    var colorArray = ["#3260A9", "#14499E", "#0C3678", "#507ABC", "#14499E"];
    var index;//which page you are on
    
    var dotArray = ["#DRIVELESS", "#UNPLUG", "#SPEAKUP", "#STOPWASTE", "#TURBOSHOWER", "#EAT4REAL", "#ROCKASWEATER", "#THRIFTSHOP"]; //array for each DOT option
    var arrayNum;//random number chosen for DOT array
    var dotnum; //random array space chosen and corresponding percent is chosen from leftArray
    var leftArray = [47, 47, 47, 47, 47, 47, 48, 47];//this array holds the margin percent values for each DOT
    var percentNum;//percent number chosen
    var percentSign = "%";//concatenates onto percentNum for css string
    
    var time;//time between new dots
    
    var WIN_WIDTH = window.innerWidth;//window width
    
    //function that finds which page a user is on, returns index
    var assignIndex = function(){
        
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
    
    //happens onmouseover of navbar, changes color depending on which page by getting the correct color from colorArray
    changeColor = function(i){
        
        var index = assignIndex();
        
        $(liArray[i]).css("background-color", colorArray[index]);
        $(liArray[i]).css("color", "#06977F");
        
    }
    
    //happens onmouseout of navbar, sets colors back
    changeColorBack = function(j){
        
        $(liArray[j]).css("background-color", "#06977F");
        $(liArray[j]).css("color", "#3260A9");
        
    }

    //newDot() gets a random number for the DOT, then gets the CSS percent margin, then displays the DOT
    var newDot = function(){

        arrayNum = Math.floor((8 * Math.random()));
        dotnum = dotArray[arrayNum];
        percentNum = leftArray[arrayNum];

        $("#h1").html(dotnum).fadeIn("2000");

        $("#h1").css("left", percentNum + percentSign);

    };
    
    
    //determines the size of the navbar, only happens once when page loads
    console.log(WIN_WIDTH);
    WIN_WIDTH /= 8.2;
    $("#navbar").css("width", WIN_WIDTH);
    
    
    
    //happens when PLEDGE! button is pressed, redirects to ACE page in new tab
    Submit = function(){
        
        var win = window.open("https://acespace.org/dot", '_blank');
        win.focus();
        
    }
    
    //this function runs when the FORM! button is pressed, and it makes the google form appear in a new tab
    SubmitForm = function(){
        
        var win = window.open("http://goo.gl/forms/nRZ3Pyz1gx", '_blank');
        win.focus();
                
    }
    
    //re-choose a new DOT every 5 seconds
    var everyTime = function(time){

        setTimeout(function() {

            newDot(); //call newDot to show a new DOT every 5 seconds

        }, time);

        setTimeout(function() {

            everyTime(5000);

        }, time);

    };

    //1 second after page loads, DOT appears
    everyTime(1000);

    //make arrow appear after 1.5 seconds
    setTimeout(function() {

        $("#firstarrowimg").fadeIn("slow").css("display", "block");

    }, 1500);

});