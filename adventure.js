let theText = document.getElementById("text"); //The text
let singleButtons = document.getElementById("btn"); //The button
let enteredText = ""; //We create an empty variable that will store the text the user enters
let playerClass; //The players class
let playerName; //The players name
let stage = 1; //The stage we are on
let textIndex = "";
let marking = true; //The marking is "on"


/**
 * The user presses the button
 */
function submit(){
    enteredText = document.getElementById("enterText").value;
    document.getElementById("enterText").value = ""; //We remove the text from the box after the user presses the button
    selectOption();
    
}

/**
 * 
 * @param {*} textIndex - We set the text, buttontext and stage depending on where and what the user does 
 */
function setText(textIndex){
    theText.innerHTML = textIndex.text;
    singleButtons.innerHTML = textIndex.button;
    stage = textIndex.level;
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
            playerName = enteredText;
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
            textIndex = playerClasses.warrior;
            setText(textIndex);
            break;

        case 5:
            textIndex = playerClasses.rouge;
            setText(textIndex);
            break;

        case 6:
            textIndex = playerClasses.wizard;
            setText(textIndex);
            break;

        case 7:
            textIndex = wandering.partOne;
            setText(textIndex);
            if(playerClass == "Rouge") {
                stage = 8;
            }
            else{
                stage = 9;
            }
            break;

        case 8:
            textIndex = wandering.partTwoRouge;
            setText(textIndex);
            break;

        case 9:
            textIndex = wandering.partTwo;
            setText(textIndex);
            break;

        case 10:
            textIndex = wandering.partThree;
            setText(textIndex);
            break;
            
        case 11:
            document.body.style.backgroundImage = "url('outsideCave.jpg')";
            textIndex = caveEnterance.partOne;
            setText(textIndex);
            break;

        case 12:
            textIndex = caveEnterance.partTwo;
            setText(textIndex);
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
            textIndex = caveEnterance.partThreeWizard;
            setText(textIndex);
            break;

        case 15:
            textIndex = caveEnterance.partThreeWizardQuestion;
            setText(textIndex);
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
            textIndex = caveEnterance.partThreeWizardTouch;
            setText(textIndex);
            marking = false;
            break;

        case 18:
            textIndex = caveEnterance.partThreeYes;
            setText(textIndex);
            marking = false;
            break;

        case 19:
            textIndex = caveEnterance.partThreeNo;
            setText(textIndex);
            break;

        case 20:
            textIndex = caveEnterance.partFour;
            setText(textIndex);
            break;

        case 21:
            textIndex = personTalk.partOne;
            setText(textIndex);
            break;

        case 22:
            textIndex = personTalk.partTwoQuestion;
            setText(textIndex);
            break;

        case 23:
            if (enteredText.toLowerCase() == "attack"){
                stage: 24;
            }
            else if (enteredText.toLowerCase() == "wait"){
                stage: 28;
            }
            else if (enteredText.toLowerCase() == "ask" || enteredText.toLowerCase() == "who are you?"){
                stage: 30;
            }
            else{
                theText.innerHTML = "Please select: attack, wait or ask";
                singleButtons.innerHTML = "Let's go"
                break;
            }
            selectOption();
            break;

        case 24:
            if (playerClass == "Warrior") {
                textIndex = deathScene.Warrior;
            }
            else if (playerClass = "Rouge") {
                textIndex = deathScene.Rouge;
            }
            else if (playerClass == "Wizard") {
                textIndex = deathScene.Wizard;
            }
            setText(textIndex);
            break;

        case 25:
            textIndex = deathScene.One;
            setText(textIndex);
            break;

        case 26:
            textIndex = deathScene.Two;
            setText(textIndex);
            break;

        case 27:
            textIndex = deathScene.Three;
            setText(textIndex);
            break;

        case 28:
            textIndex = personTalk.partThreeWait;
            setText(textIndex);
            break;

        case 29:
            textIndex = personTalk.partFourWait;
            setText(textIndex);
            break;

        case 30:
            textIndex = personTalk.partThreeAsk;
            setText(textIndex);
            break;

        case 31:
            textIndex = personTalk.partFourAsk;
            setText(textIndex);
            break;
    }
}