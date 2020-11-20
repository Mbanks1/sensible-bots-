//async fetch to api ---> create async 'catchBot' function to fetch and add bot in img html div 
//within that function define a response variable with await - fetch - for the info
// add an event listener to the bot button that renders this entire function onclick

const generator = document.querySelector('#bot-btn');
const adviceTxt = document.querySelector('#advice');
const botImg = document.querySelector('#bot-img');
const drinkTxt = document.querySelector('#drinks');
const userInput = document.querySelector('#text')


generator.addEventListener('click', getBot);
generator.addEventListener('click', getAdvice);
generator.addEventListener('click', getDrink);



/*
async function getBot() {
    const botData = await fetch('https://robohash.org/.png', {
        headers: {
            'Accept': 'application/json'
        }
    });
    

};
*/








async function getAdvice() {
    const adviceData = await fetch('https://api.adviceslip.com/advice', {
    headers: {
        'Accept': 'application/json'
    }
    });
    console.log(adviceData);
    const adviceObj = await adviceData.json();
    adviceTxt.innerHTML = adviceObj.slip.advice 
}





async function getDrink() {
    const drinkData = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php', {
    headers: {
        'Accept': 'application/json'
    }
   });
    const drinkObj = await drinkData.json();
  
    drinkTxt.innerHTML = drinkObj.drinks[0].strInstructions
   

   }
 
 //   strGlass  strIngredient1 strInstructions strInstructionsDE strMeasure1