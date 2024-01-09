/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const copyButton = document.querySelector("[data-js=copy-button]");
const upercaseButton = document.querySelector("[data-js=uppercase-button]");
const switchButton = document.querySelector('[data-js="button-switch"]');

copyButton.addEventListener("click", () => {
  secondInput.value = firstInput.value;
  console.log("Copied that!");
});

upercaseButton.addEventListener("click", () => {
  secondInput.value = firstInput.value.toUpperCase();
  console.log("Prettier!");
});

switchButton.addEventListener("click", () => {
  const zwischenAblage1 = firstInput.value;
  const zwischenAblage2 = secondInput.value;
  firstInput.value = zwischenAblage2;
  secondInput.value = zwischenAblage1;
  console.log("Switched!");
});
