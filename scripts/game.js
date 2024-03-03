const keybordKeys = document.querySelectorAll(".letter");
let answer = document.getElementById("answer-section");

let word = "";
const words = ["ELEPHANT", "HORSE", "FISH", "ZEBRA", "MONKEY"];
let letterArrays;
let nbOfLetterGuessed = 0;
let triesLeft = 6;
let dashes_generated = (answer.textContent = getWordDetails());
window.onload = dashes_generated;
let step = 0;

function getWordDetails() {
  let randomWordIndex = Math.floor(Math.random() * words.length);
  alert("hint: its always an animal");
  word = words[randomWordIndex];
  let dashes_generated = "_";
  for (let i = 0; i < word.length - 1; i++) {
    dashes_generated += " _";
  }

  letterArrays = word.split("");

  return dashes_generated;
}

keybordKeys.forEach((key) => {
  key.addEventListener("click", () => {
    enterTheLetter(key.textContent);
    console.log(key.textContent);
  });
});

function enterTheLetter(letter) {
  if (word.includes(letter) && !dashes_generated.includes(letter)) {
    console.log("yes");

    dashesSplited = dashes_generated.split(" ");
    for (let i = 0; i < dashesSplited.length; i++) {
      if (letterArrays[i] === letter) {
        dashesSplited[i] = letter;
        nbOfLetterGuessed++;

        dashes_generated = dashesSplited.join(" ");
      }
    }
    answer.textContent = dashes_generated;
    if (nbOfLetterGuessed === word.length) {
      alert("u won");
    }
  } else if (dashes_generated.includes(letter)) {
  } else {
    if (triesLeft > 0) {
      triesLeft--;
      manDraw();
    } else {
      alert("u lost");
    }
  }
}

function manDraw() {
  switch (step) {
    case 0:
      head();
      break;
    case 1:
      body();
      break;
    case 2:
      leftHand();
      break;
    case 3:
      rightHand();
      break;
    case 4:
      leftLeg();
      break;
    case 5:
      rightLeg();
      alert("u lost");
      break;
    default:
      console.error("Invalid step value");
  }
  step++;
}
