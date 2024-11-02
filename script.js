
// function for shuffle emoji
function shuffleArray(array){
    for (let i= array.length -1;i>0;i--){
        const j =Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }       
}
// function to show specific slide
function showSlide(slideIndex){
    document.querySelectorAll('.slide').forEach((Slide,index)=>{
        Slide.classList.toggle('active', index === slideIndex-1);
    });
} 


// initialize slide1..........***********************************************************************************
// array of 30 emojis
const emojis = [
  "⭐", "🏆", "🎈", "🫧", "💖", "🍎", "🥭", "🪔", "🧨", "⚽",
  "💰", "💎", "👑", "📚", "🕉️", "🎶", "🚩", "✏️", "🪶", "❄️",
  "😎", "🤡", "🧊", "🔥", "🌼", "🎁", "☠️", "🐍", "🤫", "🤯"
];
function showSlide1(){
    shuffleArray(emojis);
    const emojiContainer=document.getElementById('emojiContainer');
    emojiContainer.innerHTML = emojis.join(' ');
    //button1
    document.getElementById('nextButton1').addEventListener('click', () => showSlide(2));
}

// initialize slide2..........************************************************************************************
// array of colors
const colors = ["Red","Green","Blue","Yellow","Purple","Black","Orange","Pink","Brown","Gray"];

function showSlide2(){
    const colorContainer=document.getElementById('colorContainer');
    colorContainer.innerHTML = '';
    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className='color-box';
        colorBox.style.backgroundColor=color.toLowerCase();
        colorContainer.appendChild(colorBox);
    });
    document.getElementById('nextButton2').addEventListener('click',() => showSlide(3));
}

// initialize slide3..........******************************************************************************************
const numbers = Array.from({length:10},(_, i) => i + 1);

function showSlide3(){
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.innerHTML = '';
    numbers.forEach(number => {
        const numberBox = document.createElement('div');
        numberBox.className = 'number-box';
        numberBox.textContent = number;
        //Add click event to select thenumber
        numberBox.addEventListener('click',() =>{
            document.querySelectorAll('.number-box').forEach(box => box.classList.remove('selected'));
            numberBox.classList.add('selected');
        });
        numberContainer.appendChild(numberBox);
    });
    document.getElementById('nextButton3').addEventListener('click', () => showSlide(4));
}

//initialize slide4..........********************************************************************************************
// array of color Groups 
const colorGroup1 = ["Red","Green","Blue","Yellow","Purple"];
const colorGroup2 = ["Black","Orange","Pink","Brown","Gray"];
// Variables for main and extra color groups
let main_color = [];
let extra_color = [];

function showSlide4(){
    const colorGroupContainer =document.getElementById('colorGroupContainer');
    colorGroupContainer.innerHTML = '';
    colorGroup1.forEach(color=>{
        const colorBox=document.createElement('div');
        colorBox.className='color-box';
        colorBox.style.backgroundColor = color.toLocaleLowerCase();
        colorGroupContainer.appendChild(colorBox);
    });
    //Set up Yes and No buttons
    document.getElementById('coloryesbutton').addEventListener('click',() => handleColorGroupResponse(true));
    document.getElementById('colornobutton').addEventListener('click',() => handleColorGroupResponse(false));
}

function handleColorGroupResponse(isYes){
    if(isYes){
        main_color=colorGroup1;
        extra_color=colorGroup2;
    } else{
        main_color=colorGroup2;
        extra_color=colorGroup1;
    }
    showSlide(5);
}

// Initialize slide5..........*****************************
function showSlide5() {
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = ' ';

    document.getElementById('nextButton5').addEventListener('click', () => showSlide(6));
}
const items = [
  "⭐", "🏆", "🎈", "🫧", "💖", "🍎", "🥭", "🪔", "🧨", "⚽",
  "💰", "💎", "👑", "📚", "🕉️", "🎶", "🚩", "✏️", "🪶", "❄️",
  "😎", "🤡", "🧊", "🔥", "🌼", "🎁", "☠️", "🐍", "🤫", "🤯"
];
const emoji_number = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
];
// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the items array
shuffleArray(items);

// Assign emojis to numbers
for (let i = 0; i < emoji_number.length; i++) {
    emoji_assigned_name[emoji_number[i]] = items[i];
}
// Log the resulting pairs
console.log(emoji_assigned_name);














//initializ the slides
showSlide1();
showSlide2();
showSlide3();
showSlide4();
showSlide5();