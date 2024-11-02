// Shuffle function for emojis
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to show specific slide
function showSlide(slideIndex) {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.classList.toggle('active', index === slideIndex - 1);
    });
}

// Initialize Slide 1 - Emojis
const emojis = [
    "⭐", "🏆", "🎈", "🫧", "💖", "🍎", "🥭", "🪔", "🧨", "⚽",
    "💰", "💎", "👑", "📚", "🕉️", "🎶", "🚩", "✏️", "🪶", "❄️",
    "😎", "🤡", "🧊", "🔥", "🌼", "🎁", "☠️", "🐍", "🤫", "🤯"
];

function showSlide1() {
    shuffleArray(emojis);
    const emojiContainer = document.getElementById('emojiContainer');
    emojiContainer.innerHTML = emojis.join(' ');
    document.getElementById('nextButton1').addEventListener('click', () => showSlide(2));
}

// Initialize Slide 2 - Colors
const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Black", "Orange", "Pink", "Brown", "Gray"];

function showSlide2() {
    const colorContainer = document.getElementById('colorContainer');
    colorContainer.innerHTML = '';
    colors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.toLowerCase();
        colorContainer.appendChild(colorBox);
    });
    document.getElementById('nextButton2').addEventListener('click', () => showSlide(3));
}

// Initialize Slide 3 - Numbers
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

function showSlide3() {
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.innerHTML = '';
    numbers.forEach(number => {
        const numberBox = document.createElement('div');
        numberBox.className = 'number-box';
        numberBox.textContent = number;
        numberBox.addEventListener('click', () => {
            document.querySelectorAll('.number-box').forEach(box => box.classList.remove('selected'));
            numberBox.classList.add('selected');
        });
        numberContainer.appendChild(numberBox);
    });
    document.getElementById('nextButton3').addEventListener('click', () => showSlide(4));
}

// Initialize Slide 4 - Color Groups
const colorGroup1 = ["Red", "Green", "Blue", "Yellow", "Purple"];
const colorGroup2 = ["Black", "Orange", "Pink", "Brown", "Gray"];
let main_color = [];
let extra_color = [];

function showSlide4() {
    const colorGroupContainer = document.getElementById('colorGroupContainer');
    colorGroupContainer.innerHTML = '';
    colorGroup1.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color.toLowerCase();
        colorGroupContainer.appendChild(colorBox);
    });
    document.getElementById('coloryesbutton').addEventListener('click', () => handleColorGroupResponse(true));
    document.getElementById('colornobutton').addEventListener('click', () => handleColorGroupResponse(false));
}

function handleColorGroupResponse(isYes) {
    if (isYes) {
        main_color = colorGroup1;
        extra_color = colorGroup2;
    } else {
        main_color = colorGroup2;
        extra_color = colorGroup1;
    }
    showSlide(5);
}

// Initialize Slide 5 - Questions with Binary Values
const items = [
    "⭐", "🏆", "🎈", "🫧", "💖", "🍎", "🥭", "🪔", "🧨", "⚽",
    "💰", "💎", "👑", "📚", "🕉️", "🎶", "🚩", "✏️", "🪶", "❄️",
    "😎", "🤡", "🧊", "🔥", "🌼", "🎁", "☠️", "🐍", "🤫", "🤯"
];
const emoji_assigned_name = {};

// Assign emojis to numbers
for (let i = 0; i < items.length; i++) {
    emoji_assigned_name[i + 1] = items[i];
}

// Binary Logic to Assign Emojis to Questions
const slideItems = {
    question1: [],
    question2: [],
    question3: [],
    question4: [],
    question5: []
};

function distributeEmojis() {
    for (let [number, emoji] of Object.entries(emoji_assigned_name)) {
        const emojiNumber = parseInt(number);

        if (emojiNumber & 0b10000) slideItems.question1.push(emoji);
        if (emojiNumber & 0b01000) slideItems.question2.push(emoji);
        if (emojiNumber & 0b00100) slideItems.question3.push(emoji);
        if (emojiNumber & 0b00010) slideItems.question4.push(emoji);
        if (emojiNumber & 0b00001) slideItems.question5.push(emoji);
    }
}

// Display Slide 5 Questions
function showSlide5() {
    distributeEmojis();
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.innerHTML = `
        <p>Is your emoji present in Question 1 list? ${slideItems.question1.join(" ")}</p>
        <p>Is your emoji present in Question 2 list? ${slideItems.question2.join(" ")}</p>
        <p>Is your emoji present in Question 3 list? ${slideItems.question3.join(" ")}</p>
        <p>Is your emoji present in Question 4 list? ${slideItems.question4.join(" ")}</p>
        <p>Is your emoji present in Question 5 list? ${slideItems.question5.join(" ")}</p>
    `;
    document.getElementById('nextButton5').addEventListener('click', () => showSlide(6));
}

// Initialize Slides
showSlide1();
showSlide2();
showSlide3();
showSlide4();
showSlide5();