import JSConfetti from 'js-confetti';

import "./style.css";
import Gem from "./fate/gem.png";
import Intertwined from "./fate/intertwined-fate.png";

const jsConfetti = new JSConfetti()
const btnOne = document.getElementById("btn-one");
const btnTen = document.getElementById("btn-ten");
const quantityElement = document.getElementById("quantity");

const min = Math.ceil(50);
const max = Math.floor(90);
const jackpot = Math.floor(Math.random() * (max - min) + min);
console.log(`jackpot = ${jackpot}`);

function updateRoll(value) {
  const RollElement = document.getElementById("number-gacha");
  const currentValue = parseInt(RollElement.textContent);
  
  let newValue = currentValue + value;
  RollElement.textContent = newValue;

  if (newValue > jackpot) {
    jsConfetti.addConfetti();
  }
}

btnOne.addEventListener("click", function () {
    let iconElementHtml = `<img class="gem" src="${Gem}" />`;
    quantityElement.insertAdjacentHTML("beforeend",iconElementHtml);

    updateRoll(1);
});

btnTen.addEventListener("click", function () {
    let iconElementHtml = `<img class="fate" src="${Intertwined}" />`;
    quantityElement.insertAdjacentHTML("beforeend",iconElementHtml);

    updateRoll(10);
});