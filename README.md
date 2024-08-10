# Spaceman: Guess the Planets!!

  
![gamelogo](https://i.postimg.cc/yNp6ZJsf/SPACE-MAN-Guess-the-PLanet.png)


## **User Stories:**
- As a user I want to have a landing page that will show a space themed hangman game.
- As a user I want to see clear instructions on how to play the game.
- As a user I want to have btns that will allow the input of the guess. 
- As a user I want to see how many guesses I have left. 
- As a user I want to have a message saying either guess again you, won, or you lost. 
- As a user I want a hint of what word I'm guessing. 
- As a user I want a reset button to be able reset the game. 

## **Pseudocode**

### **Variables:**

- CurrentWord: empty array to hold the current word from the word bank. 
- Guess count: empty number to hold the count down of the guesses which will be 5 max
- Correct letters: empty string  providing what the user has inputted. 


### **Constants:**

- Word bank: holds the all the planets and hints.
- 9 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto.


### **Cached References:**
- Message element 
- Reset button element 
- Display of word element 
- Guesses left element
- Letter button element

### **Functions:**
- Init game: start of game  
- Checkgues:  to see if the  correct word was imputed 
- Random word: calling a random word from the word bank. 
- Reset button: allowing the game to be back to init game. 
- Update message: to either tell the play guess again won or lost.
- letter butttons of the aphlabet to input the user guess. 


### **Event Listeners:**

- Click event listener to allow the player to input guess that are connect to the alpahbet letters. 
- Click event listener for the reset button 
- click event lister to start the game

### **Reference**
- [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JSCONFETTI](https://www.npmjs.com/package/js-confetti)
- Tic Tac Toe referrance as an example.
