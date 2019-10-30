let theText = document.getElementById("theText");
let buttonBox = document.getElementById("btn");
let singleButton = document.getElementsByTagName("button");
let buttons;
let playerClass;
let stage = 1;

/**
 * 
 * @param {number} buttons - How many buttons we want
 * @param {number} i - How many
 */
function changeButtons(buttons){
    for (let i = 0; i <= singleButton.length; i++) {
        document.getElementsByTagName("button")[i].remove();
    }
    for (let i = 0; i < buttons; i++) {
        var para = document.createElement("button");
        buttonBox.appendChild(para);
    }    
    console.log(buttons);
}




selectOption();

for (let i = 0; i < singleButton.length; i++) {
    singleButton[i].addEventListener("click", () => selectOption());
    
}

function selectOption(){

    switch(stage) {
        case 1:
            buttons = 3;
            changeButtons(buttons);
            theText.innerHTML = "What kind of player are you?" 
            singleButton[0].innerHTML = "Fighter";
            singleButton[1].innerHTML = "Rouge";
            singleButton[2].innerHTML = "Wizard";
            stage = 2;
            break;

        case 2:
            buttons = 2;
            changeButtons(buttons);
            theText.innerHTML = "You are a fighter!"
            singleButton[0].innerHTML = "That's right!";
            singleButton[1].innerHTML = "Wait no!";
            break;

    }
}
