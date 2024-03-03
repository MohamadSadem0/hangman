const keybordKeys = document.querySelector(".letter");
let answer = document.getElementById("answer-section");

let word = "";
const words = ["elephant", "horse", "fish", "zebra", "monkey"];
let guessedLetters = [];
let letterToGuess;
let triesLeft = 5;
let a=answer.textContent = getWordDetails();
function startGame() {}
window.onload = a;

function getWordDetails() {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  alert("hint: its always an animal");
  word = words[randomWordIndex];
  let a = "_";
  for (let i = 0; i < word.length; i++) {
    a += " _";
  }

  return a
}

keybordKeys.addEventListener("click", () => {
  console.log(keybordKeys.textContent);
});


function enterTheLetter(letter) {
  
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      a[i]=letter;
      console.log(word.indexOf(letter));
    } else {
      triesLeft--;
    }
  }
}
