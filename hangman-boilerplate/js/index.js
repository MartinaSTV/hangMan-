document.querySelector('figure').classList.add('scaffold')
document.querySelector('figure').classList.add('head')
document.querySelector('figure').classList.add('body')
document.querySelector('figure').classList.add('arms')
document.querySelector('figure').classList.add('legs')
const modal = document.getElementById("myModal");
const gameWords = ['zombie', 'vampyr', 'candyman', 'frankenstein','spöke','djävulen','häxa','trollkarl', 'mumie','fågelskrämma'];
let wrongGuesses = [];
let rightGuess = [];
let rightLetter = []; 
let playAgain = document.querySelector(`.reloadbutton`);
let playAgainModal = document.querySelector(`.modal`);
let LossInCounter = [];

const countdownEL = document.getElementById('countdown');
let timeSecond = 60;
let countDown;
function timer(){
  clearInterval(countDown);
  countdownEL.innerHTML = `${timeSecond} sekunder kvar!`;

  countDown = setInterval (()=>{
  timeSecond--;
  countdownEL.innerHTML = `${timeSecond} sekunder kvar!`;
  if(timeSecond<0 || timeSecond<1) {
    clearInterval(countDown);
    playAgain.style.visibility = `visible`;
    document.querySelector(`.result`).innerHTML = `Tiden tog slut! <br> Ordet var: <br> ${LossInCounter}`;
    console.log(`${LossInCounter}`);
    playAgainModal.style.display = "block";
  } 
 
},1000)
};

start = document.querySelector(`.startGame`)
  start.addEventListener(`click`, ()=>{

    onclick= timer();
    start.style.visibility = `hidden`;
    gameStart();

  });

 function gameStart(){
  
  let randomWord = gameWords[Math.floor(Math.random() * gameWords.length)]; 
  LossInCounter.push(randomWord);
  
  console.log(randomWord);
  let splitRandomWord = randomWord.split('');  
   
  for (i =0; i<splitRandomWord.length; i++){
      rightGuess.push('_');
      
  }
  
  document.getElementById('right-text').innerHTML = `${rightGuess.join(' ')}`
  
  addEventListener('keypress', (event) => {
  
    let keyPressed = event.key
    if (rightLetter.includes(keyPressed) || wrongGuesses.includes(keyPressed)) {
      
       } else  {
    let correctGuess = false;
    console.log(keyPressed);
      
    for(i =0; i <splitRandomWord.length; i++){
      console.log(splitRandomWord[i]);  
      
      if(splitRandomWord[i] === keyPressed){
          
          correctGuess = true;
          rightLetter.push(splitRandomWord[i]); 

          rightGuess[i] = keyPressed;
          document.getElementById('right-text').innerHTML = `${rightGuess.join(' ')}`
    }    
         if (rightLetter.length === randomWord.length){ 
          
          
          playAgainModal.style.display = "block";
          playAgain.style.visibility = `visible`;
          document.querySelector(`.result`).innerHTML = `Du vann! <br> Ordet var: <br> ${splitRandomWord.join('')}`;
          clearInterval(countDown);
        }
      
  } 
  
  if (correctGuess === false) {
    
    wrongGuesses.push(keyPressed);

    console.log(wrongGuesses);
    document.getElementById('wrong-text').innerHTML = `Fel bokstäver <br/> ${wrongGuesses.join(' ')}`

  }
  }
    if (wrongGuesses.length === 1) {
      document.getElementById('scaffold').style.opacity = '1';
    }
    if (wrongGuesses.length === 2) {
      document.getElementById('head').style.opacity = '1';
    }
    if (wrongGuesses.length === 3) {
      document.getElementById('body').style.opacity = '1';
    }
    if (wrongGuesses.length === 4) {
      document.getElementById('arms').style.opacity = '1';
    }
    if (wrongGuesses.length === 5) {
      document.getElementById('legs').style.opacity = '1';
    }
    if (wrongGuesses.length === 6) {
     
      playAgain.style.visibility = `visible`;
      playAgainModal.style.display = "block";

      document.querySelector(`.result`).innerHTML = `Du förlorade <br> Ordet var: <br> ${splitRandomWord.join('')}`
      clearInterval(countDown);
      }
    
<<<<<<< HEAD
   });
=======
  });

>>>>>>> 2cb82bf8e23314c9be9bec9db74d2a683fc6a5f2
}

 let close = document.getElementsByClassName("close")[0];
 close.onclick = function() {
  modal.style.display = "none";
}
playAgain.addEventListener(`click`, ()=>{
    location.reload();
})

