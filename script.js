// Add emoji spans dynamically to all holders
const holders = document.querySelectorAll('.emoji-orbit');
const emojis = ["💋","💄","😻","😹","😽","🧜‍♀️","🧚","👠","👑","🐥","🪼","🐈","🐫","🦃","🦦","🍄","🪸","🪷","🌕","🌖","🌗","🌘","🌑","🌒","🌔","🌓","🌙","⭐️","💫","🥂","🍹","🍻"];
holders.forEach(holder => {
    holder.innerHTML = ''; // clear previous content
    emojis.forEach((emoji, i) => {
        const span = document.createElement('span');
        span.textContent = emoji;
        span.style.setProperty('--angle', (i * (360 / emojis.length)) + 'deg');
        holder.appendChild(span);
    });
});
// Fox button click -> go to second page
document.getElementById('fox-btn').addEventListener('click', () => {
    window.location.href = 'second.html';
});
