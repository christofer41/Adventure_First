let theText = document.getElementById("text"); //The text
let singleButtons = document.getElementById("btn"); //The button
let enteredText = ""; //We create an empty variable that will store the text the user enters
let playerClass; //The players class
let stage = 1; //The stage we are on

/**
 * The user presses the button
 */
function submit(){
    enteredText = document.getElementById("enterText").value;
    document.getElementById("enterText").value = ""; //We remove the text from the box after the user presses the button
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
        case 0:
            theText.innerHTML = "I'm sorry, what was that?";
            singleButtons.innerHTML = "Stop messing around";
            stage = 1;
            break;

        case 1:
            theText.innerHTML = "What is your name?";
            singleButtons.innerHTML = "Submit Name";
            stage = 2;
            break;
8
        case 2:
            const playerName = enteredText;
            if (playerName == ""){
                stage = 0;
                selectOption();
                break;
            }
            theText.innerHTML = "Greetings " + playerName + "! Did you grow up as a rouge, a warrior, or a wizard?";
            singleButtons.innerHTML = "Submit Class";   
            stage = 3;         
            break;
            
        case 3:
                
            if (enteredText.toLowerCase() == "warrior") {
                playerClass = "Warrior";
                stage = 4;
            }
            else if (enteredText.toLowerCase() == "rouge") {
                playerClass = "Rouge";
                stage = 5;
            }
            else if (enteredText.toLowerCase() == "wizard") {
                playerClass = "Wizard";
                stage = 6;
            }
            else{
                theText.innerHTML = "Please enter a valid class! Choose between Warrior, Rouge, or Wizard!"
            }
            selectOption();
            break;

        case 4:
            theText.innerHTML = warrior;
            singleButtons.innerHTML = "Yeah!";
            stage = 7;
            break;

        case 5:
            theText.innerHTML = rouge;
            singleButtons.innerHTML = "Yeah!";
            stage = 7;
            break;

        case 6:
            theText.innerHTML = wizard;
            singleButtons.innerHTML = "Yeah!";
            stage = 7;
            break;

        case 7:
            theText.innerHTML = wanderingPartOne;
            singleButtons.innerHTML = "My feet hurt..";
            if(playerClass == "Rouge") {
                stage = 8;
            }
            else{
                stage = 9;
            }
            break;

        case 8:
            theText.innerHTML = wanderingPartTwoRouge;
            singleButtons.innerHTML = "A piece of cake";
            break;

        case 9:
            theText.innerHTML = wanderingPartTwo;
            singleButtons.innerHTML = "I should maintain my finances better"
            break;
    }
}