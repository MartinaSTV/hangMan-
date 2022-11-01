/**
 För att toggla SVG:en
 document.querySelector('figure').classList.add('scaffold')
 document.querySelector('figure').classList.add('head')
 document.querySelector('figure').classList.add('body')
 document.querySelector('figure').classList.add('arms')
 document.querySelector('figure').classList.add('legs')

 */

 let p = document.querySelector(`p`);
 p.innerHTML = `P`

 

 



 // random 
 
const gameWords = ['zombie', 'Vampire', 'candyman', 'frankenstein'];

const randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(randomWord);



var newCode;
var i;
newCode= "";

for (i = 0; i <randomWord.length; i++) {
	
	newCode += "<span>&nbsp;</span>";

    console.log(`&nbsp;`)
}

p.innerHTML = newCode;

p.getElementsByTagName(`span`)





addEventListener('keyup', (event) => {

 if(event.key === `a` , `b`) {


 console.log(`hejsan`)

 }




});




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




