const keybordKeys = document.querySelector(".letter");
let answer = document.getElementById("answer-section");

let word = "";
const words = ["elephant", "horse", "fish", "zebra", "monkey"];
let guessedLetters = [];
let letterToGuess;
let triesLeft = 5;
function startGame() {}
window.onload = getWordDetails();

function getWordDetails() {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  alert("hint: its always an animal");
  word = words[randomWordIndex];
  let a = "_";
  for (let i = 0; i < word.length; i++) {
    a += " _";
  }

  answer.textContent = a;
}


keybordKeys.addEventListener("click",()=>{
    enterTheLetter()
})

function letterShow() {}
function enterTheLetter(letter) {
    let indexes=[]
  for (let i = 0; i < word.length; i++) {
    if (letter===word[i]) {
        word.indexOf(letter);
        console.log(word.indexOf(letter))


    } else {
      triesLeft--;
    }
  }
}
