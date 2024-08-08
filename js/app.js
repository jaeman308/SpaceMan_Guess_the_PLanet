/*-------------------------------- Constants --------------------------------*/
const wordBank = [
    {    word: "Mecrury",
         hint: "This planet is closest to the Sun and has the shortest year in our solar system. It has extreme temperature variations between day and night!"
    },
    {    word: "Venus",
         hint: "Known as Earth's sister planet due to its similar size, it has a thick, toic atmosphere and is the hottest planet."
    },
    {   word: "Earth",
        hint:"Our home planet, it has a unique atmosphere that supports life and is the only known planet with liquid water on its surface."
    },
    {   word: "Mars",
        hint: "Often call the Red Planet because of its reddish appearance, it has the tallest volacno and the deepest canyon in the solar system."
    },
    {   word: "Jupiter",
        hint: "The largest planet in the solar system, it has a Great Red Spot that is a massive storm and is known for its many moons."
    },
    {   word: "Saturn",
        hint: "Famous for its stunning ring system, the gas gaint is the second-largest planet in our solar system."
    },
    {   word: "Uranus",
        hint: "This planet is unique for its extreme tilt, which causes it to roll on its side as it orbits the Sun."
    },
    {   word: "Neptune",
        hint: "Known for its deep blue color due to its methane atomsphere, it has strong winds and is the farthest planet from the Sun."
    },
    {   word: "Pluto",
        hint: "Once considered the ninth planet, it is now classified as a dwarf planet. It has a highly elliptical orbit and a surface with icy plains and mountains."

    }

]


/*---------------------------- Variables (state) ----------------------------*/
let currentWord = [];
let guessCount = 0;
let correctLetters = '';


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector(".message")
const diplayEL = document.querySelector("#playersWord")
const letterEl= document.querySelector("#alphabet")



// console.dir(messageEl)
// console.dir(playersWord)
// console.dir(letterEl)

/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



