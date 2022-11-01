

 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 bodyEl = document.querySelector(`body`);
 const gameWords = ['zombie', 'Vampire', 'candyman', 'frankenstein'];
 let WrongGuess = []

 
let randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(randomWord);
let chosenWord = randomWord.split(''); 

bodyEl.addEventListener('keyup', (event) => {
  let keyPressed = event.key
  console.log(keyPressed)
  let correctGuess = false

  for(let i =0; i <chosenWord.length; i++){
    console.log(chosenWord[i]) // skriver ut varje bokstav i ordet 
    
    if(chosenWord[i] === keyPressed){
        console.log(`rätt`)
        document.querySelector('#right-text').innerHTML = `${keyPressed}`
        correctGuess: true;
    }
  }
  if(correctGuess === false){
        
         WrongGuess.push(keyPressed)
         console.log(WrongGuess)
         document.querySelector('#wrong-text').innerHTML = `${WrongGuess} är fel bokstav försök igen!`


      }
    

 });




/* var emptyBox;
var i;
newCode= "";

for (i = 0; i <randomWord.length; i++) {
	
	emptyBox += "<span>&nbsp;</span>";

    console.log(`&nbsp;`)
}

p.innerHTML = newCode;

p.getElementsByTagName(`span`)

 */
// knapp lyssnare
 

/**
 * 1. Splitta ordet till en array med bokstäver
 * 2. Loopa igenom arrayen och jämför med keyPressed
 * 
 * 3. Om bokstav stämmer, visa
 * 4. OM bokstav inte finns, visa fel
 */

 // Array med ord
 
 // random

 //visa tomt ord i webbläsaren i p tagg, 


 // spelarens knapp gissning

 // knapp lyssnare
 //addEventListener. 
 //let playerKey = 
 // spara valet och jämföra

 // Visa om dom passar finns boksatven i ordet?
 // Om den finns, gissa igen och skriv ut bokstav 
 // om den inte finns visa bild 1 osv. 
 // om du gissa rätt ord visa ny sida och spela igen
 // om du blir hängd visa ny sida reload game.  
// hej hej 



