import getRandomAdvice from "./service/api.js";

const adviceId =  document.querySelector('.card-advice__number');
const adviceQuote =  document.querySelector('.card-advice__quote');
const diceButton = document.querySelector('.card-advice__dice');

window.addEventListener('load', () => getRandomAdvice(adviceId, adviceQuote));
diceButton.addEventListener('click', () => getRandomAdvice(adviceId, adviceQuote));