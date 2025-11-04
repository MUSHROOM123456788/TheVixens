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

// Fox button click -> go to second page
fox.addEventListener('click', () => {
    window.location.href = 'second.html';
});

// Generate dancing emojis
const emojiContainer = document.querySelector('.emoji-container');
const emojis = ["💋","💄","😻","😹","😽","🧜‍♀️","🧚","👠","👑","🐥","🪼","🐈","🐫","🦃","🦦","🍄","🪸","🪷","🌕","🌖","🌗","🌘","🌑","🌒","🌔","🌓","🌙","⭐️","💫","🥂","🍹","🍻"];

// Create 50 floating emojis
for (let i = 0; i < 50; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random starting position
    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = Math.random() * window.innerHeight + "px";
    
    // Random animation delay and duration
    span.style.animationDelay = (Math.random() * 5) + "s";
    span.style.animationDuration = (4 + Math.random() * 3) + "s";
    
    emojiContainer.appendChild(span);
}
