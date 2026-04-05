
// // Generate a random number between 1 and 100
// const secretNumber = Math.floor(Math.random() * 100) + 1;

// // Function to check the user's guess
// function checkGuess() {
//     // Get the user's guess from the input field
//     const userGuess = parseInt(document.getElementById('userGuess').value);

//     // Get the message element to display feedback
//     const messageElement = document.getElementById('message');

//     // Check if the user's guess is correct
//     if (userGuess === secretNumber) {
//         messageElement.textContent = 'Congratulations! You guessed the correct number!';
//     } else if (userGuess < secretNumber) {
//         messageElement.textContent = 'Too low! Try again.';
//     } else {
//         messageElement.textContent = 'Too high! Try again.';
//     }
// }

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const message = document.getElementById("message");
  const attempts = document.getElementById("attempts");

  if (!userGuess) {
    message.textContent = "⚠️ Please enter a number!";
    return;
  }

  attemptCount++;

  if (userGuess === secretNumber) {
    message.textContent = "🎉 Correct! You guessed it!";
  } 
  else if (userGuess < secretNumber) {
    message.textContent = "📉 Too low!";
  } 
  else {
    message.textContent = "📈 Too high!";
  }

  attempts.textContent = "Attempts: " + attemptCount;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptCount = 0;

  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("userGuess").value = "";
}