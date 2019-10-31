let theText = document.getElementById("text"); //The text
let singleButtons = document.getElementsByTagName("button"); //The button
let enteredText = ""; //We create an empty variable that will store the text the user enters
let playerClass; //The players class
let stage = 1; //The stage we are on

/**
 * The user presses the button
 */
function submit(){
    enteredText = document.getElementById("enterText").value;
    selectOption();
    
}


selectOption()

/**
 * What happens depinging on what "Stage" the user is on
 */
function selectOption(){

    /**
     * We store all the stages and what will happen next
     */
    switch(stage) {
        case 1:
            theText.innerHTML = "What is your name?";
            singleButtons.innerHTML = "Submit Name";
            stage = 2;
            break;
8
        case 2:
            const playerName = enteredText;
            theText.innerHTML = "Greetings " + playerName + "! Did you grow up as a rouge, a warrior, or a wizard?";
            singleButtons.innerHTML = "Submit Class";   
            stage = 3;         
            break;
            
        case 3:
                
            if (enteredText.toLowerCase == "warrior") {
                playerClass = "Warrior";
                stage = 4;
            }
            else if (enteredText.toLowerCase == "rouge") {
                playerClass = "Rouge";
                stage = 5;
            }
            else if (enteredText.toLowerCase == "wizard") {
                playerClass = "Wizard";
                stage = 6;
            }
            break;

        case 4:
            theText.innerHTML = "You are a Warrior";
            singleButtons.innerHTML = "Yeah!";
            break;

        case 5:
            theText.innerHTML = "You are a Rouge";
            singleButtons.innerHTML = "Yeah!";
            break;

        case 6:
            theText.innerHTML = "You are a Wizard";
            singleButtons.innerHTML = "Yeah!";
            break;

    }
}