/*let theText = document.getElementById("theText");
let buttonBox = document.getElementById("btnBox");
let singleButton = document.getElementsByTagName("button");
let buttons;
let playerClass;


/**
 * 
 * @param {number} buttons - How many buttons we want
 */
/*function changeButtons(buttons){
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

const textElement = document.getElementById("theText");
const optionButtonsElement = document.getElementById("btnBox");

//Vi håller koll på all information om spelet och spelaren.
let state = {};


/**
 * 
 * @param {} startGame() - Vi startar spelet och sätter "reset" allting:
 */
function startGame() {
    state = {}
    showTextNode(1);
}
/**
 * 
 * @param {*} textNodeIndex - Visar texten och knapparna som vi är på
 */
function showTextNode(textNodeIndex){
    const textNode = textBox.find(textNode => textNode.id === textNodeIndex) //Vi går igenom textBox för ett id som passar, och sedan sätter vi ihop texten från det id:et.
      textElement.innerText = textNode.text;
      
    while (optionButtonsElement.firstChild){ //Vi tar bort alla knappar som finns
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => { //Vi skapar en loop.
        if (showOption(option)){ //Om det finns tillräckligt många options
            const button = document.createElement("button") //Så skapar vi en knapp för varje option
            button.innerText = option.text //Vi ger varje knapp sin text
            button.classList.add("btm") //Vi sätter också en class för lättare hantering.
            button.addEventListener("click", () => selectOption(option)) //Vi "Lyssnar" när någon klickar på knappen och utför funktionen.
            optionButtonsElement.appendChild(button) //Sedan ger vi barnet till sin föräldrabox
        }
    })
    console.log(state);
}
/**
 * 
 * @param {} option  - Här går valet in.
 * @param {} showOption - Vi kollar om spelar har det som behövs för att utföra vissa saker.
 */
function showOption(option) {
    return option.requredState == null || option.requiredState(state); //Om requiredState stämmer eller inte finns så visas objektet.
}

/**
 * 
 * @param {} selectOption - Funktionen gör så att vi kan hoppa till nästa del av spelet 
 */
function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
  }


const textBox = [ /* Här är lådan som håller all text och alla val för spelet. */
    {
        id:1,
        text: "What class suits you best?",
        options: [
            {
                text: "Warrior",
                setState: {class: "Warrior" },
                nextText: 2
            },
            {
                text: "Rouge",
                setState: {class: "Rouge" },
                nextText: 3
            },
            {
                text: "Wizard",
                setState: {class: "Wizard" },
                nextText: 4
            },
        ]
    },
    {
        id: 2,
        text: "You are a fearsome warrior, strong as they come! Not the brightest, but your axe is the sharpest.",
        options: [
          {
            text: "Yes, that is right!",
            requiredState: (currentState) => currentState.class == "Warrior",
            nextText: 5
          },
          {
            text: "No, that's not me",
            nextText: 1
          }
        ]
      },
    {
        id: 3,
        text: "You grew up in the shadows, stalking your pray and striking from behind.",
        options: [
            {
              text: "Yes, that is right!",
              requiredState: (currentState) => currentState.class == "Rouge",
              nextText: 5
            },
            {
              text: "No, that's not me",
              nextText: 1
            }
          ]
    },
    {
        id: 4,
        text: "You grew up with your nose in the books. However you always wanted to prove your skills outside of the library.",
        options: [
            {
              text: "Yes, that is right!",
              requiredState: (currentState) => currentState.class == "Wizard",
              nextText: 5
            },
            {
              text: "No, that's not me",
              nextText: 1
            }
          ]
    }
]

startGame();