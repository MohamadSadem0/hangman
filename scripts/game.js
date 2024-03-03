const keybordKeys = document.querySelectorAll(".letter");
let answer = document.getElementById("answer-section");

let word = "";
const words = ["ELEPHANT", "HORSE", "FISH", "ZEBRA", "MONKEY"];
let letterArrays; //= words.map((word) => word.split(""));
let guessedLetters = [];
let letterToGuess;
let triesLeft = 5;
let a = (answer.textContent = getWordDetails());
window.onload = a;

function getWordDetails() {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  alert("hint: its always an animal");
  word = words[randomWordIndex];
  let a = "_";
  for (let i = 0; i < word.length - 1; i++) {
    a += " _";
  }

  letterArrays = word.split("");
  console.log(letterArrays);

  return a;
}

keybordKeys.forEach((key) => {
  key.addEventListener("click", () => {
    enterTheLetter(key.textContent);
    console.log(key.textContent);
  });
});

function enterTheLetter(letter) {
  if (word.includes(letter)) {
    console.log("yes");

    aArray = a.split(" ");
    for (let i = 0; i < aArray.length; i++) {
      if (letterArrays[i] === letter) {
        aArray[i] = letter;

        a = aArray.join(" ");
      }
    }
    answer.textContent = a;
  } else {
    triesLeft--;
  }
}
