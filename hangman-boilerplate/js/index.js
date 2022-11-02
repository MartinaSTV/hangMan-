document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')
 const gameWords = ['zombie', 'vampire', 'candyman', 'frankenstein','ghost','devil','whitch','sorcerer', 'mumie','scarecrow'];
 let wrongGuesses = []; // Här ska vi lägga i fel-gissade bokstäver
 let rightGuess = [];

 let playAgain = document.querySelector(`.reloadbutton`)
 let rightLetter = []; // NY
 
 console.log(alfabet);


 
 let  playAgainModal = document.querySelector(`.modal`)
 




 
let randomWord = gameWords[Math.floor(Math.random() * gameWords.length)]; 
console.log(randomWord);
let chosenWord = randomWord.split(''); // Splittar 
for (i =0; i<chosenWord.length; i++){
    rightGuess.push('_');
    console.log(rightGuess.join(''));
}


     







document.getElementById('right-text').innerHTML = `${rightGuess.join(' ')}`
addEventListener('keyup', (event) => {
  

  let keyPressed = event.key
  let correctGuess = false;
  console.log(keyPressed)

  
  for(i =0; i <chosenWord.length; i++){
    console.log(chosenWord[i]) // skriver ut varje bokstav i ordet 

    if(chosenWord[i] === keyPressed){
        console.log(`rätt`)
        correctGuess = true;
        rightLetter.push(chosenWord[i]); // NY
        rightGuess[i] = keyPressed;
        console.log(rightGuess);

        document.getElementById('right-text').innerHTML = `${rightGuess.join(' ')}`

        
       }    
       if (rightLetter.length === randomWord.length){ 
        document.getElementById('right-text').innerHTML = `Du vann!`
        playAgain.style.visibility = `visible`
      }

} 

if (correctGuess === false) {
  console.log('Fel gissning');
  wrongGuesses.push(keyPressed);
  console.log(wrongGuesses)



  document.getElementById('wrong-text').innerHTML = `${wrongGuesses.join(' ')} är fel bokstav, gissa igen!`
}


  
  if (wrongGuesses.length === 1) {
    document.getElementById('scaffold').style.opacity = '1'
  }
  if (wrongGuesses.length === 2) {
    document.getElementById('head').style.opacity = '1'
  }
  if (wrongGuesses.length === 3) {
    document.getElementById('body').style.opacity = '1'
  }
  if (wrongGuesses.length === 4) {
    document.getElementById('arms').style.opacity = '1'
  }
  if (wrongGuesses.length === 5) {
    document.getElementById('legs').style.opacity = '1'
   
  }
  if (wrongGuesses.length === 6) {
   
    playAgain.style.visibility = `visible`

    playAgainModal.style.display = "block";
    document.getElementById('right-word').innerHTML = `Ordet var: ${chosenWord.join('')}`
   // document.getElementById('right-text').innerHTML = `Ordet var: ${chosenWord.join('')}`


  } 
  
 });

playAgain.addEventListener(`click`, ()=>{
    location.reload();
})




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



