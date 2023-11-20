// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = parseInt(document.getElementById('userGuess').value);

    // Get the message element to display feedback
    const messageElement = document.getElementById('message');

    // Check if the user's guess is correct
    if (userGuess === secretNumber) {
        messageElement.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < secretNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else {
        messageElement.textContent = 'Too high! Try again.';
    }
}
