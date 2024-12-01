// console.clear()
// function play(){
//     const homeSection = document.getElementById("home-section");
//     homeSection.classList.add("hidden");

//     const playGroundSection = document.getElementById("playground-section");
//     playGroundSection.classList.remove("hidden")
// }
function continueGame(){
   const alphabet =  getARandomAlphabet()
   console.log("your random alphabet:", alphabet);

   const currentAlphabet = document.getElementById("current-alphabet")
   currentAlphabet.innerHTML = alphabet;

   addBackgroundColorById(alphabet)
}


function play(){
    hideElement("home-section");
    showElement("playground-section")
    continueGame();
}