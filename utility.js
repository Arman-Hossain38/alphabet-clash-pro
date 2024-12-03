
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
function removeBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText)
    return value
}
function setTextElementValueById(elementId,  value){
    const element = document.getElementById(elementId);
    element.innerText = value
   
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('')
 
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
   
    const alphabet = alphabets[index]
    return alphabet
}