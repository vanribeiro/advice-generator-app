import generateRandomID from './../modules/generateRandomID.js';
import quotesFallback from '../data/fallback.js';

const getRandomAdvice = async (adviceId, adviceQuote) => {
    const url = `https://api.adviceslip.com/advice/${generateRandomID(1, 224)}`;

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.slip !== undefined){
                const { id, advice } = data.slip;
                adviceId.textContent = id;
                adviceQuote.textContent = advice;
            } else{
                const quote = quotesFallback.slip[generateRandomID(0, 4)];
                const { id, advice } = quote;
                adviceId.textContent = id;
                adviceQuote.textContent = advice;
            }
        }).catch(error => {
            console.log(error);
        });
}

export default getRandomAdvice;
