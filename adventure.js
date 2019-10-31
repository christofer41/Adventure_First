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
            theText.innerHTML = "You grew up as a mercenary, fighting for your life. You wielded your sword like your life depended on it. You are strong and fearless, just like a true Warrior.";
            singleButtons.innerHTML = "Yeah!";
            stage = 7;
            break;

        case 5:
            theText.innerHTML = "You grew up in the shadows, hiding and stealing what you needed to survive. You know how to stalk your prey, and are not afraid to prove it.";
            singleButtons.innerHTML = "Yeah!";
            stage = 7;
            break;

        case 6:
            theText.innerHTML = "You grew up with your nose in the books, always studying for the next Wizard exam. However you wish to prove your magical skills, and set out on a journey.";
            singleButtons.innerHTML = "Yeah!";
            stage = 7;
            break;

        case 7:
            theText.innerHTML = "You have wandered for three days, with nothing but an old map as your guide."
            singleButtons.innerHTML = "My feet hurt.."
            stage = 8;
            break;

        case 8:
            theText.innerHTML = "You have gotten the map from an old man living in a nearby village. You should have probably understood by the crazy babbling that the old man was plain mad. However you couldn't resist the opportunity of an adventure.. Even if it cost you your last gold."
            singleButtons.innerHTML = "I should maintain my finances better"
            break;
    }
}