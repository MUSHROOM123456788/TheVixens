// Add emoji spans dynamically to all holders
const holders = document.querySelectorAll('.emoji-orbit');
const emojis = ["💋","💄","😻","😹","😽","🧜‍♀️","🧚","👠","👑","🐥","🪼","🐈","🐫","🦃","🦦","🍄","🪸","🪷","🌕","🌖","🌗","🌘","🌑","🌒","🌔","🌓","🌙","⭐️","💫","🥂","🍹","🍻"];

holders.forEach(holder => {
    holder.innerHTML = ''; // clear any previous content
    emojis.forEach((emoji, i) => {
        const span = document.createElement('span');
        span.textContent = emoji;
        span.style.setProperty('--angle', (i * (360 / emojis.length)) + 'deg');
        holder.appendChild(span);
    });
});
const emojiContainer = document.querySelector('.emoji-container');
const emojis = ["💋","💄","😻","😹","😽","🧜‍♀️","🧚","👠","👑","🐥","🪼","🐈","🐫","🦃","🦦","🍄","🪸","🪷","🌕","🌖","🌗","🌘","🌑","🌒","🌔","🌓","🌙","⭐️","💫","🥂","🍹","🍻"];

// Create 50 floating emojis
for (let i = 0; i < 50; i++) {
    const span = document.createElement('span');
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random starting position
    span.style.left = Math.random() * window.innerWidth + "px";
    span.style.top = Math.random() * window.innerHeight + "px";
    
    // Random animation delay and duration for natural effect
    span.style.animationDelay = (Math.random() * 5) + "s";
    span.style.animationDuration = (4 + Math.random() * 3) + "s";
    
    emojiContainer.appendChild(span);
}
