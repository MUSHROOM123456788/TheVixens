const fox = document.getElementById('fox-btn');

// ===================== FOX BUTTON MOVEMENT =====================
// Slow jumping every 3 seconds
function moveFoxRandomly() {
    const maxX = window.innerWidth - 60; // button width
    const maxY = window.innerHeight - 60; // button height
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    fox.style.left = x + 'px';
    fox.style.top = y + 'px';
}
setInterval(moveFoxRandomly, 3000); // slower jump

// ===================== FOX CLICK TO SECOND PAGE =====================
function goToSecondPage(event) {
    event.stopPropagation();
    window.location.href = 'second.html';
}
fox.addEventListener('click', goToSecondPage);
fox.addEventListener('touchend', goToSecondPage);

// ===================== MAIN PAGE EMOJIS =====================
const emojiContainer = document.querySelector('.emoji-container');
const emojis = ["💋","💄","😻","😹","😽","🧜‍♀️","🧚","👠","👑","🐥","🪼","🐈","🐫","🦃","🦦","🍄","🪸","🪷","🌕","🌖","🌗","🌘","🌑","🌒","🌔","🌓","🌙","⭐️","💫","🥂","🍹","🍻"];

// Create 40 emojis with spiral/criss-cross motion
for (let i = 0; i < 40; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Start at center
    span.style.left = window.innerWidth/2 + "px";
    span.style.top = window.innerHeight/2 + "px";

    // Random radius for spiral
    const radius = 50 + Math.random() * 400;
    span.style.setProperty('--radius', radius + 'px');

    // Random animation duration and delay for criss-cross effect
    const duration = 6 + Math.random() * 6; // 6–12s
    const delay = Math.random() * 5;
    span.style.animation = `spiral ${duration}s linear infinite`;
    span.style.animationDelay = `${delay}s`;

    emojiContainer.appendChild(span);
}
