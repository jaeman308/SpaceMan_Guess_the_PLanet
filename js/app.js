/*-------------------------------- Constants --------------------------------*/
const wordBank = [
    {    word: "MERCURY",
         hint: "This planet is closest to the Sun and has the shortest year in our solar system. It has extreme temperature variations between day and night!"
    },
    {    word: "VENUS",
         hint: "Known as Earth's sister planet due to its similar size, it has a thick, toxic atmosphere and is the hottest planet."
    },
    {   word: "EARTH",
        hint:"Our home planet, it has a unique atmosphere that supports life and is the onlyknown planet with liquid water on its surface."
    },
    {   word: "MARS",
        hint: "Often call the Red Planet because of its reddish appearance, it has the tallest volcano and the deepest canyon in the solar system."
    },
    {   word: "JUPITER",
        hint: "The largest planet in the solar system,  it has a Great Red Spot that is a massive storm  and is known for its many moons."
    },
    {   word: "SATURN",
        hint: "Famous for its stunning ring system, the gas giant is the second-largest planet in our solar system."
    },
    {   word: "URANUS",
        hint: "This planet is unique for its extreme tilt, which causes it to roll on its side as it orbits the Sun."
    },
    {   word: "NEPTUNE",
        hint: "Known for its deep blue color due to its methane atomsphere, it has strong winds and is the farthest planet from the Sun."
    },
    {   word: "PLUTO",
        hint: "Once considered the ninth planet, it is now classified as a dwarf planet. It has a highly elliptical orbit and a surface with icy plains and mountains."

    }

];
const maxGuesses = 10;


/*---------------------------- Variables (state) ----------------------------*/
let currentWord = '';
let livesLeft = maxGuesses;
let guessedLetters = [];
let message = '';
let gameActive = false;


/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector(".message");
const playAgainBtn= document.querySelector("#resetBtn");
const displayWordEl = document.querySelector(".displayWord");
const livesLeftEl = document.querySelector(".guessCount");
const startBtn = document.querySelector("#startBtn");


// console.dir(messageEl)
// console.dir(playersWord)
// console.dir(letterEl)
// console.dir(livesLeftEl)
// console.dir(playAgainBtn)
//console.dir(startBtn)
/*-------------------------------- Functions --------------------------------*/

function init() {
    guessedLetters = [];
    livesLeft = 10;  
    gameActive = true;
    render();

}


function updateDisplayWord () {
        displayWordEl.innerHTML = '';
        
        currentWord.split('').forEach(letter => {
            const listItem = document.createElement('li');
            listItem.textContent = guessedLetters.includes(letter) ? letter : '_';
            displayWordEl.appendChild(listItem);
        });
        // console.log("Current Word:", currentWord);
        // console.log("Guessed Letters:", guessedLetters);
        // console.log("Display Word Content:", displayWordEl.textContent);
        
    }


    
    function handleButtonClick (event) {
        if (!gameActive) return;
        
        const clickedLetter = event.target.textContent;
        
        if(!guessedLetters.includes(clickedLetter)) {
            guessedLetters.push(clickedLetter);
            if (currentWord.includes(clickedLetter)) {
            } else {
                livesLeft--;
                livesLeftEl.textContent = `Lives left: ${livesLeft}`;
            }
            render();
        } 
        console.log(clickedLetter)
    }
    
    
    function render () {
        updateDisplayWord();
        updateMessage();
    }

function startGame () {
    const {word, hint} = wordBank [Math.floor (Math.random() * wordBank.length)];
    currentWord = word;
    document.querySelector('.hint_text').innerText= hint;
    init();
}

function updateMessage() {
    const wordDisplay = Array.from(displayWordEl.children).map(li => li.textContent).join('');
    if (currentWord === wordDisplay) {
        message = 'Congratulations You won the mission!';
        gameActive = false;
    } else if (livesLeft <= 0) { 
        message = 'Mission has ended! You failed try again';
        gameActive = false;
    } else {
        message = 'You got this!! Keep guessing!';
    }
    messageEl.textContent = message;
}


/*----------------------------- Event Listeners -----------------------------*/
playAgainBtn.addEventListener('click', startGame);
startBtn.addEventListener('click', startGame)
document.querySelectorAll('.alphabetBtn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

