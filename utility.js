
function hideElement(elementId){
const homeSection = document.getElementById(elementId)
homeSection.classList.add("hidden")
}

function showElement(elementId){
    const playGroundSection = document.getElementById(elementId);
    playGroundSection.classList.remove("hidden")
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
 
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
   
    const alphabet = alphabets[index]
    return alphabet
}