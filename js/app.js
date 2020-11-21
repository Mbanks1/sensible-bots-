//async fetch to api ---> create async 'catchBot' function to fetch and add bot in img html div 
//within that function define a response variable with await - fetch - for the data
// add an event listener to the bot button that renders this entire function onclick

const generator = document.querySelector('#bot-btn');
const adviceTxt = document.querySelector('#advice');
const botImg = document.querySelector('#changeBot');
const userInput = document.querySelector('#text')



//----------drinks-------------
const drinkTxt1 = document.querySelector('#drinks1');
const drinkTxt2 = document.querySelector('#drinks2');
const drinkTxt3 = document.querySelector('#drinks3');
const drinkTxt4 = document.querySelector('#drinks4');
const drinkTxt5 = document.querySelector('#drinks5');
const drinkTxt6 = document.querySelector('#drinks6');
const drinkTxt7 = document.querySelector('#drinks7');
const drinkTxt8 = document.querySelector('#drinks8');
//---------drinks--------------



//generator.addEventListener('click', getBot);
generator.addEventListener('click', getAdvice);
generator.addEventListener('click', getDrink);



function getBot() {


}










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
  
    drinkTxt1.innerHTML = drinkObj.drinks[0].strDrink;
    drinkTxt2.innerHTML = drinkObj.drinks[0].strGlass;
    drinkTxt3.innerHTML = drinkObj.drinks[0].strIngredient1;
    drinkTxt4.innerHTML = drinkObj.drinks[0].strIngredient2;
    drinkTxt5.innerHTML = drinkObj.drinks[0].strIngredient3;
    drinkTxt6.innerHTML = drinkObj.drinks[0].strIngredient4;
    drinkTxt7.innerHTML = drinkObj.drinks[0].strIngredient5;
    drinkTxt8.innerHTML = drinkObj.drinks[0].strInstructions;
}
   
 












