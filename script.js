const fox = document.getElementById('fox-btn');
const emojiContainer = document.getElementById('emoji-container');

// Emoji list
const emojis = ['💋','💄','😻','😹','😽','🧜‍♀️','🧚','👠','👑','🐥','🪼','🐈','🐫','🦃','🦦','🍄','🐚','🥀','🪸','🪷','🌕','🌖','🌗','🌘','🌑','🌒','🌔','🌓','🌙','⭐️','💫','🥂','🍹','🍻'];

// Create emojis and animate them
emojis.forEach(() => {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * window.innerWidth + 'px';
  emoji.style.top = Math.random() * window.innerHeight + 'px';
  emoji.style.animationDuration = (8 + Math.random() * 6) + 's';
  emojiContainer.appendChild(emoji);
});

// 🦊 Move fox randomly
function moveFox() {
  const maxX = window.innerWidth - 80;
  const maxY = window.innerHeight - 80;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  fox.style.left = x + 'px';
  fox.style.top = y + 'px';
}
setInterval(moveFox, 3000); // slower movement

// ✅ Click or tap to go to second page
function goToSecondPage(e) {
  e.preventDefault();
  window.location.href = 'second.html';
}

fox.addEventListener('click', goToSecondPage);
fox.addEventListener('touchend', goToSecondPage);
