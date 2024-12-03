// console.clear()
// function play(){
//     const homeSection = document.getElementById("home-section");
//     homeSection.classList.add("hidden");

//     const playGroundSection = document.getElementById("playground-section");
//     playGroundSection.classList.remove("hidden")
// }
 
function handleKeyboardPress(event) {
  const playerPressed = event.key;
	if(playerPressed === 'Escape'){
    gameOver();
  }

  //get the expected to press
  const currentAlphabetElement = document.getElementById('current-alphabet')
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet)
 
  //check right or wrong keypress
  if(playerPressed === expectedAlphabet){
    console.log("you are win");


    //1. set the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText  = currentScoreElement.innerText;
    console.log("your current score", currentScoreText)
    const currentScore = parseInt(currentScoreText)
    console.log(currentScore)

    //2.increage the score by 1
    const newScore = currentScore + 1;

    //3. show the update sore
    currentScoreElement.innerText = newScore
    //start a new round
    removeBackgroundById(expectedAlphabet)
    continueGame();
   
  }
  else{
    console.log("you are missed")

    //step1: get the current Life number
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentlife = parseInt(currentLifeText)
    //step2: reduce the life count
    const newLife = currentlife - 1;
    //step3: display the updated life count
    currentLifeElement.innerText = newLife;


    if(newLife === 0){
      gameOver();
    }
  }
}
//capture keyboard keyprees
document.addEventListener('keyup', handleKeyboardPress);

function continueGame(){
   const alphabet =  getARandomAlphabet()
//    console.log("your random alphabet:", alphabet);

   const currentAlphabet = document.getElementById("current-alphabet")
   currentAlphabet.innerHTML = alphabet;

   addBackgroundColorById(alphabet)
}


function play(){
  //hide everything show only the playground
    hideElement("home-section");
    hideElement('final-score')
    showElement("playground-section")
    continueGame();

    //reset score and life
    setTextElementValueById("current-life", 5)
    setTextElementValueById("current-score", 0)

}
function gameOver(){
  hideElement("playground-section");
  showElement("final-score");

  //get the final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore)


  const currentAlphabet = getElementTextById('current-alphabet')
  // console.log(currentAlphabet)
  removeBackgroundById(currentAlphabet)
}