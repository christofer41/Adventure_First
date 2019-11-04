let theText = document.getElementById("text"); //The text
let singleButtons = document.getElementById("btn"); //The button
let enteredText = ""; //We create an empty variable that will store the text the user enters
let playerClass; //The players class
let stage = 1; //The stage we are on
let marking = true; //The marking is "on"

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
            theText.innerHTML = "What is your name?";  //Changes the text
            singleButtons.innerHTML = "Submit Name";   //Changes the button text
            stage = 2;
            break;
8
        case 2:
            const playerName = enteredText;
            if (playerName == ""){
                theText.innerHTML = "I'm sorry, what was that?";
                singleButtons.innerHTML = "Stop messing around";
                break;
            }
            else{
                theText.innerHTML = "Greetings " + playerName + "! Did you grow up as a rouge, a warrior, or a wizard?";
                singleButtons.innerHTML = "Submit Class";   
                stage = 3;
            }         
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
                break;
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
            stage = 10;
            break;

        case 9:
            theText.innerHTML = wanderingPartTwo;
            singleButtons.innerHTML = "I should maintain my finances better"
            stage = 10;
            break;

        case 10:
            theText.innerHTML = wanderingPartThree;
            singleButtons.innerHTML = "Finally";
            stage = 11;
            break;
            
        case 11:
            theText.innerHTML = caveEnteranceOne;
            singleButtons.innerHTML = "How peculiar";
            stage = 12;
            document.body.style.backgroundImage = "url('outsideCave.jpg')";
            break;

        case 12:
            theText.innerHTML = caveEnteranceTwo;
            singleButtons.innerHTML = "Hmm..";
            stage = 13;
            break;

        case 13:
            if (enteredText.toLowerCase() == "yes" && playerClass == "Wizard")
            {
                stage = 14;
            }
            else if (enteredText.toLowerCase() == "yes" && playerClass != "Wizard")
            {
                stage = 18;
            }
            else if (enteredText.toLowerCase() == "no")
            {
                stage = 19;
            }
            else
            {
                theText.innerHTML = "Please enter yes or no";
                singleButtons.innerHTML = "Come on, dude..";
                break;
            }
            selectOption();
            break;

        case 14:
            theText.innerHTML = caveEnteranceThreeYesWizard;
            singleButtons.innerHTML = "Interesting"
            stage = 15;
            break;

        case 15:
            theText.innerHTML = caveEnteranceThreeYesWizardQuestion;
            singleButtons.innerHTML = "What to do.."
            stage = 16;
            break;

        case 16:
            if (enteredText.toLowerCase() == "yes") {
                stage = 17;
            }
            else if (enteredText.toLowerCase() == "no") {
                stage = 20;
            }
            else {
                theText.innerHTML = "Please enter Yes or No";
                singleButtons.innerHTML = "Make a decision"
                break;
            }
            selectOption();
            break;

        case 17:
            theText.innerHTML = caveEnteranceThreeWizardTouch;
            singleButtons.innerHTML = "Now what did that activate?"
            stage = 20;
            marking = false;
            break;

        case 18:
            theText.innerHTML = caveEnteranceThreeYes;
            singleButtons.innerHTML = "What did that do?"
            stage = 20;
            marking = false;
            break;

        case 19:
            theText.innerHTML = caveEnteranceThreeNo;
            singleButtons.innerHTML = "Let's look around"
            stage = 20;
            break;

        case 20:
            theText.innerHTML = caveEnteranceFour;
            singleButtons.innerHTML = "Coming soon"
            break;
    }
}