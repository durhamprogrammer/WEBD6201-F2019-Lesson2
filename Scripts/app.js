/** 
 * Author: Tom Tsiliopoulos
 * Description: WEBD 6201 - Lesson 2 - Event Handlers
*/

//enable strict mode
"use strict";

// IIFE - Immediately Invoked Function Expression
(function()
{
    function Start() 
    {
        console.log("App Initialized...");
            var welcomeLabel = document.getElementById("welcome");
            var displayEvent = document.getElementById("displayEvent");
        
            welcomeLabel.addEventListener("click", function(){
                console.log("Event: click");
                displayEvent.textContent = "Event: click";
                });

            welcomeLabel.addEventListener("mouseover", function(){
                console.log("Event: mouseover");
                displayEvent.textContent = "Event: mouseover";
                });

            welcomeLabel.addEventListener("mouseout", function(){
                console.log("Event: mouseout");
                displayEvent.textContent = "Event: mouseout";
                });
    }

    window.addEventListener("load", Start);

})();