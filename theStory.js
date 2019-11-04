let intro = {
        text: "What is your name?",
        button: "Submit Name",
        level: 2
    }


let playerClasses = { //The text for the class choices

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

let wandering = { //The text for the forest walk

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

let caveEnterance = { //The text for outside the cave

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

let personTalk = { //The text for the interaction of the strange old man
    partOne: {
        text: "\"So you have finally arrived, I was fortold of your arrival\" His voice is raspy and reminiscent of an old man near death. You are unsure what to do.",
        button: "What does he mean?",
        level: 22
    },

    partTwoQuestion: {
        text: "Will you: Wait, ask \"Who are you\" or attack?",
        button: "It's up to you.",
        level: 23
    },

    partThreeWait: {
        text: "You stay quiet and decide to let the mysterious being speak. The crooked old man shows his rotten teeth in an oddly toothy smile.",
        button: "Let's be causious",
        level: 29 
    },

    partThreeAsk: {
        text: "\"Identify yourself!\" You ready yourself for whatever the crooked old man want with you.",
        button: "Let's be firm with him!",
        level: 31
    },

    partFourWait: {
        text: "\"Speechless?\" The man laughs with a disturbing tone. \No worries, we are almost finished here\" \
        His tone shifts back into a more serious note. ",
        button: "...finished?",
        level: 32
    },

    partFourAsk: {
        text: "\"Going straight for the point, huh?\" The old man laughs, still with the toothy smile on his face. \
        \"I will answer your question in due time. \" \
        His tone is calm, but something seems off.",
        button: "Why not now?",
        level: 32
    },

    partFive: {
        text: "\"My name is Thernin, pleased to make your acquaintance\" He takes a bow. \" \
        I have long waited for someone to come to this place. But there is no time for questions! Now hurry, get inside! \"",
        button: "What's the rush?",
        level: 33
    },

    partSix: {
        text: "Before you have time to react, some kind of force grasps hold of your body and pulls you towards the cave. \
        And before you know it, you are inside of the dark and forboding cave.",
        button: "Oh crap!",
        level: 34
    },

    partSeven: {
        text: "As you turn around you are stumped to see that the enterance that you were forced through, was no more. \
        Now you know for certain that something magical was at work in this cave.",
        button: "Welp",
        level: 35
    },

    partEightWizard: {
        text: "You cast a small candlelight spell on your staff and light up the room",
        button: "Magic!",
        level: 36
    },

    partEightRouge: {
        text: "You quickly grab a torch from your backpack, and light it with a flint that you always carry with you, \
        illuminating your surroundings.",
        button: "Preparation!",
        level: 36
    },

    partEightWarrior: {
        text: "You lift your axe skywards and mumble a small incantaintion, and your axe starts to glow. \
        Your enchanted axe was a reward during a arm wrestling competition a few towns over, you knew that it would come in handy.",
        button: "Enchantments!",
        level: 36

    },

    partNine: {
        text: "With a small sound of a single sentance that sound more like a plea for help echoing through your mind, you start to walk deeper into the cave.",
        button: "What did it say?",
        level: 37
    },

    partTen: {
        text: "\"Please, Save us!\"",
        button: "How can we refuse?",
        level: 38
    }
}

const deathScene = { //Text for the death scene

    Warrior: {
        text: "You ready your axe and strike at your foe, however as your weapon should impact, it just passes right through your opponent. And then he is just gone.",
        button: "What the..?",
        level: 25
    },

    Rouge: {
        text: "You ready your knives and rush your opponent, but before your knives hit their mark, your target vanish without a trace.",
        button: "Were is he?",
        level: 25
    },

    Wizard: {
        text: "You ready your spells and throw a firebolt from your palm. But right when the blast would've hit it's mark, your opponent vanish without a trace.",
        button: "Scorch him!",
        level: 25
    },

    One: { 
        text: "You can feel something in the back of the throat, you start to cough to try to get it out. However the more you cough the worse the feeling gets. \
        As you are desperatly trying to cough whatever it is out, you finally manage to get something out.",
        button: "What is that!?",
        level: 26
    },

    Two: {
        text: "You stare in horror at what you see, it's something dark with a tar like substanse. As you look down you notice that your legs are missing, \
        and in it's place is a puddle of the same tar like liquid.",
        button: "That can't be good",
        level: 27
    },

    Three: {
        text: "You try to scream out in horror, however the only thing to come out is even more tar of what presumably used to be your tongue. \
        It doesn't take long until all that remains of our hero is a dark and muddy stain on the ground.",
        button: "F",
        level: 38
    }
}