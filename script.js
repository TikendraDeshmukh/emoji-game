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

function showSlide1() {
    shuffleArray(emojis);
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = ''; // Clear previous emojis
    emojis.forEach(emoji => {
        const emojiBox = document.createElement('div'); // Create a new div for each emoji
        emojiBox.className = 'emoji-box'; // Assign the class for styling
        emojiBox.textContent = emoji; // Set the emoji as the content
        emojiContainer.appendChild(emojiBox); // Append the box to the container
    });

    // Button to move to the next slide
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

// initilize slide5..........*************************************************************************************
const slideItems={
    question1: [],
    question2: [],
    question3: [],
    question4: [],
    question5: [],
};
function distributeEmojis(){
    for (let [number, emoji] of Object.entries(emoji_assigned_name)){
        const emojiNumber = parseInt(number);
        if (emojiNumber === 0b00001) slideItems.question5.push(emoji);
        else if (emojiNumber === 0b00010) slideItems.question4.push(emoji);
        else if (emojiNumber === 0b00011){
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b00100) slideItems.question3.push(emoji);
        else if (emojiNumber === 0b00101){
            slideItems.question3.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b00110){
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
        }
        else if (emojiNumber === 0b00111){
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b01000) slideItems.question2.push(emoji);
        else if (emojiNumber === 0b01001){
            slideItems.question2.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b01010){
            slideItems.question2.push(emoji);
            slideItems.question4.push(emoji);
        }
        else if (emojiNumber === 0b01011){
            slideItems.question2.push(emoji);
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b01100){
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
        }
        else if (emojiNumber === 0b01101){
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b01110){
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
        }
        else if (emojiNumber === 0b01111){
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b10000) slideItems.question1.push(emoji);
        else if (emojiNumber === 0b10001){
            slideItems.question1.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b10010){
            slideItems.question1.push(emoji);
            slideItems.question4.push(emoji);
        }
        else if (emojiNumber === 0b10011){
            slideItems.question1.push(emoji);
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b10100){
            slideItems.question1.push(emoji);
            slideItems.question3.push(emoji);
        }
        else if (emojiNumber === 0b10101){
            slideItems.question1.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b10110){
            slideItems.question1.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
        }
        else if (emojiNumber === 0b10111){
            slideItems.question1.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b11000){
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
        }
        else if (emojiNumber === 0b11001){
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b11010){
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
            slideItems.question4.push(emoji);
        }
        else if (emojiNumber === 0b11011){
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b11100) {
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
        }
        else if (emojiNumber === 0b11101){
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question5.push(emoji);
        }
        else if (emojiNumber === 0b11110){
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
        }
        else if (emojiNumber === 0b11111){
            slideItems.question1.push(emoji);
            slideItems.question2.push(emoji);
            slideItems.question3.push(emoji);
            slideItems.question4.push(emoji);
            slideItems.question5.push(emoji);
        }
    }
    return slideItems;
    
}

function showSlide5() {
    distributeEmojis();
    const questionContainer = document.getElementById('questionContainer');
    const questions = [
        { text: `Is your emoji present in Question 1 list?`, answers: slideItems.question1 },
        { text: `Is your emoji present in Question 2 list?`, answers: slideItems.question2 },
        { text: `Is your emoji present in Question 3 list?`, answers: slideItems.question3 },
        { text: `Is your emoji present in Question 4 list?`, answers: slideItems.question4 },
        { text: `Is your emoji present in Question 5 list?`, answers: slideItems.question5 },
    ];

    let currentQuestionIndex = 0;

    function showNextQuestion() {
        if (currentQuestionIndex >= questions.length) {
            showSlide(6); // Move to the next slide when done
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        
        // Create HTML for the current question
        const emojiBoxes = currentQuestion.answers.map(emoji => 
            `<div class="emoji-box">${emoji}</div>`
        ).join('');

        questionContainer.innerHTML = `
            <p>${currentQuestion.text} ${emojiBoxes}</p>
            <br>
            <button id="yesButton">Yes</button>
            <button id="noButton">No</button>
        `;

        document.getElementById('yesButton').onclick = () => handleAnswer(true);
        document.getElementById('noButton').onclick = () => handleAnswer(false);
    }

    function handleAnswer(isYes) {
        // Log the answer for debugging
        console.log(`Question ${currentQuestionIndex + 1}: ${isYes ? 'Yes' : 'No'}`);
        
        // Move to the next question
        currentQuestionIndex++;
        showNextQuestion();
    }

    showNextQuestion(); // Start with the first question
}

const items = [
  "⭐", "🏆", "🎈", "🫧", "💖", "🍎", "🥭", "🪔", "🧨", "⚽",
  "💰", "💎", "👑", "📚", "🕉️", "🎶", "🚩", "✏️", "🪶", "❄️",
  "😎", "🤡", "🧊", "🔥", "🌼", "🎁", "☠️", "🐍", "🤫", "🤯"
]
const emoji_number =["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"];
shuffleArray(items);
//Asign emoji to numbers
const emoji_assigned_name ={};
for (let i = 0; i < emoji_number.length; i++){
    emoji_assigned_name[emoji_number[i]]=items[i];
}
// log the resulting pairs
console.log(emoji_assigned_name);

























//initializ the slides
showSlide1();
showSlide2();
showSlide3();
showSlide4();
showSlide5();
showSlide6();