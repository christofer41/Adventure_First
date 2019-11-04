let playerClasses = {

    warrior: {
        text: "You grew up as a mercenary, fighting for your life. You wielded your sword like your life depended on it. \
        You are strong and fearless, just like a true Warrior.",
        button: "Yeah!",
        level: 7
    },
    rouge: {
        text: "You grew up in the shadows, hiding and stealing what you needed to survive. \
        You know how to stalk your prey, and are not afraid to prove it.",
        button: "Yeah",
        level: 7
    },
    wizard: {
        text: "You grew up with your nose in the books, always studying for the next Wizard exam. \
        However you wish to prove your magical skills, and set out on a journey.",
        button: "Yeah",
        level: 7
    }
}

let wandering = {

    partOne: {
        text: "You have wandered for three days, with nothing but an old map as your guide.",
        button: "My feet hurt..",
        level: 0
    },

    partTwo: {
        text: "You have gotten the map from an old man living in a nearby village. \
        You should have probably understood by the crazy babbling that the old man was plain mad. \
        However you couldn't resist the opportunity of an adventure.. Even if it cost you your last gold.",
        button: "I should maintain my finances better",
        level: 10
    },

    partTwoRouge: {
        text: "You have gotten the map from an old man living in a nearby village. \
        You should have probably understood by the crazy babbling that the old man was plain mad. \
        His screaming and cackling made stealing the map a childs play",
        button: "Piece of cake",
        level: 10
    },

    partThree: {
        text: "After what feels like a week of wandering, traversing the forest and rocky mountains, you finally find what you are looking for.",
        button: "How peculiar",
        level: 11
    }
}

let caveEnterance = {

    partOne: {
        text: "You find yourself outside a peculiar looking cave. \
            The cave does look exacly like the one that is marked on your map, \
            with the same markings of a three winged raven that was described on the map.",
        button: "Hmm..",
        level: 12
    },

    partTwo: {
        text: "The three winged raven is marked on the stone in what seems to be a glowing blue color. Do you wish to examine it?",
        button: "Well?",
        level: 13

    },

    partThreeYes: {
        text: "You reach out and touch the symbol, and as your fingers connect with the blue liquid, \
            the glow starts to fade from it until the color is completely gone. \
            You wish that you knew what it was before touching it.",
            button: "Now what did that do?",
            level: 20

    },

    partThreeWizard: {
        text: "You carefully examine the symbol, careful not to touch it. \
            You recognise the liquid to be something called illumious and are used for some greater illusion spells. \
            It seems like this one has been made to active something when touching it.",
            button: "Interesting",
            level: 15

    },

    partThreeWizardQuestion: {
        text: "Do you wish to touch it?",
            button: "What to do..",
            level: 16

    },

    partThreeWizardTouch: {
        text: "You reach out and touch the symbol with the palm of your hand, \
            knowing fully well that somehting would activate. As your palm make contact with the symbol, the color fades and the marking becomes dark.\
            Something has activated, but you are not sure what.",
            button: "Now what did that activate?",
            level: 20

    },

    partThreeNo: {
        text: "You are shocked to see a hooded figure right next to enterance of the cave, you can swear that he wasn't there before. \
            Before you have time to ready yourself for whatever he is going to do, he speaks up.",
            button: "Let's look around",
            level: 20

    },

    partFour: {
        text: "You are shocked to see a hooded figure right next to enterance of the cave, you can swear that he wasn't there before. \
            Before you have time to ready yourself for whatever he is going to do, he speaks up.",
            button: "Wha..",
            level: 21

    }

}

const personTalk = {
    partOne: {
        text: "\"So you have finally arrived, I was fortold of your arrival\" His voice is raspy and reminiscent of an old man near death. You are unsure what to do.",
        button: "What does he mean?",
        level: 22
    },

    partTwoQuestion: {
        text: "Will you: Wait, ask \"Who are you\" or attack?",
        button: "It's up to you.",
        level: 0
    },

    partThreeWait: {
        text: "You stay quiet and decide to let the mysterious being speak. The crooked old man shows his rotten teeth in an oddly toothy smile.",
        button: "Let's be causious",
        level: 29 
    },

    partThreeAsk: {
        text: "\"Identify yourself!\" You ready yourself for whatever the crooked old man want with you.",
        button: "Let's be firm with him!",
        stage: 30
    },

    partFourWait: {
        text: "\"Speechless?\" The man laughs with a disturbing tone. \No worries, I'll do the talking\" His tone shifts back into a more serious note. "
    },

    partFourAsk: {
        text: "\"Going straight for the point, huh?\" The old man laughs, still with the toothy smile on his face. \"I will answer your question, " + playerName + " \" \
        You feel sligtly shocked over the fact that he knew your name, but at this point you were to confused to be worried" 
    }
}

const deathScene = {

    Warrior: {
        text: "You ready your axe",
        button: "Destroy him!",
        stage: 
    },

    Rouge: {
        text: "You ready your knives"
    },

    Wizard: {
        text: "You ready your spells"
    },

    One: { 
        text: "You can feel something in the back of the throat, you start to cough to try to get it out. However the more you cough the worse the feeling gets. \
        As you are desperatly trying to cough whatever it is out, you finally manage to get something out."
    },

    Two: {
        text: "You stare in horror at what you see, it's something dark with a tar like substanse. As you look down you notice that your legs are missing, \
        and in it's place is a puddle of the same tar like liquid."
    },

    Three: {
        text: "You try to scream out in horror, however the only thing to come out is even more tar of what presumably used to be your tongue. \
        It doesn't take long until all that remains of our hero is a dark and muddy stain on the ground."
    }
}