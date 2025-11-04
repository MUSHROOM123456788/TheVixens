// Fox button random movement
const fox = document.getElementById('fox-btn');

function moveFoxRandomly() {
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    fox.style.left = x + 'px';
    fox.style.top = y + 'px';
}

// Move fox every 1 second
setInterval(moveFoxRandomly, 1000);

// Click fox to go to second page
fox.addEventListener('click', () => {
    window.location.href = 'second.html';
});

// Main emojis
const emojiContainer = document.querySelector('.emoji-container');
const emojis = ["💋","💄","😻","😹","😽","🧜‍♀️","🧚","👠","👑","🐥","🪼","🐈","🐫","🦃","🦦","🍄","🪸","🪷","🌕","🌖","🌗","🌘","🌑","🌒","🌔","🌓","🌙","⭐️","💫","🥂","🍹","🍻"];

// Generate 40 emojis with spiral/criss-cross motion
for (let i = 0; i < 40; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random start position
    span.style.left = window.innerWidth/2 + "px";
    span.style.top = window.innerHeight/2 + "px";

    // Random spiral radius
    const radius = 50 + Math.random() * 400;
    span.style.setProperty('--radius', radius + 'px');

    // Random animation duration for criss-cross effect
    span.style.animation = `spiral ${4 + Math.random() * 6}s linear infinite`;

    // Random animation delay
    span.style.animationDelay = (Math.random() * 5) + "s";

    emojiContainer.appendChild(span);
}
