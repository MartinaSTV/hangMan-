

 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 let keyPressed = ``;
 
 
 const gameWords = ['zombie', 'Vampire', 'candyman', 'frankenstein'];

 addEventListener('keyup', (event) => {

    console.log(event.key);
    let keyPressed = event.key;

    for(i =0; i <chosenWord.length; i++){
        console.log(chosenWord[i])
    
        if(chosenWord[i] === keyPressed){
            let p = document.querySelector(`p`); p.innerHTML = `${keyPressed}`
        }else{
            
        }
    }
    

   });

let randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(randomWord);
let chosenWord = randomWord.split('');
console.log(chosenWord)



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

