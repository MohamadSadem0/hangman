const hang = document.getElementById("hang");

const head = () => {
  const head = `<img src="./assets/head.svg" alt="head" class="head" />`;

  hang.innerHTML += head;
};

const body = () => {
  const body = `<img src="./assets/body.svg" alt="body" class="body" />`;

  hang.innerHTML += body;
};

const leftHand = () => {
  const leftHand = `<img src="./assets/left-hand.svg" alt="left-hand" class="left-hand" />`;

  hang.innerHTML += leftHand;
};

const rightHand = () => {
  const rightHand = `<img src="./assets/right-hand.svg" alt="right-hand" class="right-hand" />`;

  hang.innerHTML += rightHand;
};

const leftLeg = () => {
  const leftLeg = `<img src="./assets/left-leg.svg" alt="left-leg" class="left-leg" />`;

  hang.innerHTML += leftLeg;
};

const rightLeg = () => {
  const rightLeg = `<img src="./assets/right-leg.svg" alt="right-leg" class="right-leg" />`;

  hang.innerHTML += rightLeg;
};
