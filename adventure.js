let theText = document.getElementById("theText");
let buttonBox = document.getElementById("btn");
let singleButton = document.getElementsByTagName("button");
let buttons;
let playerClass;


/**
 * 
 * @param {number} buttons - How many buttons we want
 */
function changeButtons(buttons){
    for (let i = 0; i <= singleButton.length; i++) {
        document.getElementsByTagName("button")[i].remove();
    }
    for (let i = 0; i < buttons; i++) {
        var para = document.createElement("button");
        buttonBox.appendChild(para);
    }    
}

buttons = 3;
changeButtons(buttons);
theText.innerHTML = "What kind of player are you?" 
singleButton[0].innerHTML = "Fighter";
singleButton[1].innerHTML = "Rouge";
singleButton[2].innerHTML = "Wizard";

/*

theText.innerHTML = "You are an " + playerClass;
singleButton[0].innerHTML = "yay"

*/