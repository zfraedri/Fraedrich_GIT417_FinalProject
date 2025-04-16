// GUESSING GAME
function playGame(event) {
    event.preventDefault();
    const userGuess = parseInt(document.getElementById('guess').value, 10);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const result = document.getElementById('game-result');

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        result.textContent = "Please enter a valid number between 1 and 10."
        return;
    }
    if (userGuess === randomNumber) {
      result.textContent = `You guessed right! The number was ${randomNumber}. Here's your coupon: COUPON10`; 
    } else {
      result.textContent = `Not quite! The number was ${randomNumber}. Try again!`;
    }
  }



// Dark mode toggle button:
const toggleButton = document.getElementById('theme-toggle');
  
    toggleButton.addEventListener('click', () => {
      const body = document.body;
  
      // Toggle manually between light and dark mode
      if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
      } else if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
      } else {
        // No class set yet, determine system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add(prefersDark ? 'light-mode' : 'dark-mode');
      }
    });

// Event listener
document.getElementById("game-form").addEventListener("submit", playGame);