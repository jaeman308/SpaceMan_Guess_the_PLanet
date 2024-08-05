#Spaceman: Guess the Planets!!


## **User Stories:**
- As a user I want to have a landing page that will show a space themed hangman game.
- As a user I want to see clear instructions on how to play the game.
- As a user I want to have input bubbles for the current guess of the word.
- As a user I want to have a timer to know how long i have to guess. 
- As a user I want to see how many guesses I have left. 
- As a user I want to have a message saying either guess again you, won, or you lost. 
- As a user I want a hint of what word I'm guessing. 
- As a user i want to have a keyboard to click my guess
- As a user I want a reset button to be able reset the game. 

## **Pseudocode**

### **Variables:**

- CurrentWord: empty array to hold the current word from the word bank. 
- Guess count: empty number to hold the count down of the guesses which will be 5 max
- Correct letters: empty  providing what the user has inputted. 
- Timer: empty number to show how much time left. A minute to guess the word.

### **Constants:**

- Word bank: holds the all the planets and hints.
- 9 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto.


### **Cached References:**
- Message element 
- Reset button element 
- Display of word element 
- Timer element 

### **Functions:**
- Init game: start of game  
- Checkgues:  to see if the  correct word was imputed 
- Random word: calling a random word from the word bank. 
- Timer function: to show how much time they player has. 
- Reset button: allowing the game to be back to init game. 
- Update message: to either tell the play guess again won or lost.


### **Event Listeners:**

- Click event listener to allow the player to input guess
- Click event listener for the reset button 
