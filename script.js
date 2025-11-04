// script.js — ensures fox clickable, creates spiraling/criss-crossing emojis
(function(){
  document.addEventListener('DOMContentLoaded', () => {
    const NAV_TARGET = 'second.html';
    const FOX_SIZE = 64;                // used for bounds
    const JUMP_MS = 3500;               // slower jump, keep jumping look
    const EMOJI_COUNT = 48;             // total emoji elements to create
    const EMOJI_POOL = ["💋","💄","😻","😹","😽","🧜‍♀️","🧚","👠","👑","🐥","🪼","🐈","🐫","🦃","🦦","🍄","🐚","🥀","🪸","🪷","🌕","🌖","🌗","🌘","🌑","🌒","🌔","🌓","🌙","⭐️","💫","🥂","🍹","🍻"];

    // find or create needed DOM
    let fox = document.getElementById('fox-btn');
    if (!fox) {
      fox = document.createElement('button');
      fox.id = 'fox-btn';
      fox.textContent = '🦊';
      document.body.appendChild(fox);
    }

    let emojiContainer = document.getElementById('emoji-container');
    if (!emojiContainer) {
      emojiContainer = document.createElement('div');
      emojiContainer.id = 'emoji-container';
      document.body.appendChild(emojiContainer);
    }

    // positioning helpers
    function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

    // place fox initially (visible)
    function placeFoxInitial(){
      const startX = Math.floor(window.innerWidth * 0.08);
      const startY = Math.floor(window.innerHeight * 0.12);
      fox.style.left = clamp(startX, 4, window.innerWidth - FOX_SIZE - 4) + 'px';
      fox.style.top  = clamp(startY, 4, window.innerHeight - FOX_SIZE - 4) + 'px';
    }
    placeFoxInitial();

    // jumping logic (random, keeps on screen)
    function moveFoxRandomly(){
      const maxX = Math.max(0, window.innerWidth - FOX_SIZE - 8);
      const maxY = Math.max(0, window.innerHeight - FOX_SIZE - 8);
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;
      fox.style.left = x + 'px';
      fox.style.top  = y + 'px';
    }
    const foxInterval = setInterval(moveFoxRandomly, JUMP_MS);

    // navigation guard
    let navigated = false;
    function goToSecond(e){
      if (navigated) return;
      navigated = true;
      // small delay to let mobile finish styles
      setTimeout(()=> { window.location.href = NAV_TARGET; }, 20);
    }

    // attach handlers: click + touchend (touchend more reliable for mobile taps)
    fox.addEventListener('click', (ev) => { ev.stopPropagation(); ev.preventDefault(); goToSecond(ev); });
    fox.addEventListener('touchend', (ev) => { ev.stopPropagation(); ev.preventDefault(); goToSecond(ev); }, { passive:false });

    // ensure fox remains visible after resize
    window.addEventListener('resize', () => {
      const left = parseFloat(getComputedStyle(fox).left) || 0;
      const top  = parseFloat(getComputedStyle(fox).top) || 0;
      const maxX = Math.max(0, window.innerWidth - FOX_SIZE - 8);
      const maxY = Math.max(0, window.innerHeight - FOX_SIZE - 8);
      if (left > maxX) fox.style.left = maxX + 'px';
      if (top  > maxY) fox.style.top  = maxY + 'px';
    });

    // create emoji elements with varying radii, directions, speeds
    function createEmoji(char, radius, duration, delay, reverse, pulse){
      const el = document.createElement('div');
      el.className = 'emoji';
      el.textContent = char;
      // base left/top are center; CSS animation will rotate around center
      el.style.setProperty('--radius', radius + 'px');
      el.style.animationName = 'spiral';
      el.style.animationDuration = (duration) + 's';
      el.style.animationDelay = (delay) + 's';
      el.style.animationIterationCount = 'infinite';
      el.style.animationTimingFunction = 'linear';
      el.style.animationDirection = reverse ? 'reverse' : 'normal';
      if (pulse) {
        // Add a small secondary pulse animation using JS-applied keyframes via inline style
        el.style.animation = `spiral ${duration}s linear ${delay}s infinite ${reverse ? 'reverse' : 'normal'}, pulse ${Math.max(1, duration/6)}s ease-in-out ${delay/3}s infinite alternate`;
      }
      // small random starting rotation so not all aligned
      const initialRot = Math.floor(Math.random()*360);
      el.style.transform = `translate(-50%,-50%) rotate(${initialRot}deg)`;
      emojiContainer.appendChild(el);
    }

    // populate screen with a mix of emojis
    const maxRadBase = Math.min(window.innerWidth, window.innerHeight) * 0.45;
    for (let i = 0; i < EMOJI_COUNT; i++){
      const ch = EMOJI_POOL[Math.floor(Math.random() * EMOJI_POOL.length)];
      const radius = 40 + Math.random() * (maxRadBase - 40);
      const duration = 5 + Math.random() * 10; // 5 - 15s
      const delay = Math.random() * 6;
      const reverse = Math.random() > 0.5;
      const pulse = Math.random() > 0.5;
      createEmoji(ch, Math.round(radius), Math.round(duration), Math.round(delay), reverse, pulse);
    }

    // make sure emoji container never intercepts pointer events (should already be set in CSS)
    emojiContainer.style.pointerEvents = 'none';
  });
})();
