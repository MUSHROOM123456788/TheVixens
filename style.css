/* ===================== GENERAL PAGE ===================== */
:root {
    --fox-size: 64px;
    --title-size: 76px;
}
html,body {
    height: 100%;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    background-color: #ff0000;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
}

/* ===================== TITLE ===================== */
.title {
    text-align: center;
    font-size: var(--title-size);
    font-weight: 900;
    color: black;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 10px #ff9fcf, 0 0 20px #ff6fae, 0 0 30px #ff69b4;
    border: 6px solid #ff69b4;
    display: inline-block;
    padding: 18px 28px;
    margin: 18px auto 6px auto;
    position: relative;
    z-index: 10002; /* above emojis */
}

/* ===================== FOX BUTTON ===================== */
#fox-btn {
    font-size: var(--fox-size);
    width: var(--fox-size);
    height: var(--fox-size);
    line-height: var(--fox-size);
    text-align: center;
    position: absolute;
    cursor: pointer;
    background: transparent;
    border: none;
    z-index: 10005;       /* Always on top of emojis */
    touch-action: manipulation; /* Mobile taps */
    pointer-events: auto; /* Ensure clickable */
    -webkit-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    text-shadow: 0 0 8px #ff8fcf, 0 0 16px #ff4f9f, 0 0 28px #ff69b4; /* Neon glow */
    transition: transform 0.14s ease;
    will-change: left, top;
    display: inline-block;
}

/* Hover (desktop) effect */
#fox-btn:hover {
    transform: scale(1.12);
}

/* Active/tap effect (mobile) */
#fox-btn:active {
    transform: scale(1.12);
}

/* Make sure button area registers pointer even over other content */
#fox-btn {
    pointer-events: auto;
}

/* ===================== EMOJI CONTAINER ===================== */
.emoji-container {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 10000; /* below fox (10005) but above background/title (10002 is title) */
    pointer-events: none; /* very important: emojis won't block pointer events */
}

.emoji-container span {
    position: absolute;
    left: 50%; /* start at center */
    top: 50%;
    transform-origin: 50% 50%;
    font-size: 34px;
    will-change: transform;
    pointer-events: none; /* ensure emojis never capture clicks/taps */
    user-select: none;
    -webkit-user-select: none;
}

/* Spiral animation keyframes for emojis (one full rotation) */
@keyframes spiral {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius)) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius)) rotate(-360deg);
        opacity: 1;
    }
}

/* Optional slight scale/pulse to make them feel alive (applied via JS by toggling a class) */
.emoji-pulse {
    animation-name: spiral, pulseScale;
    animation-duration: var(--duration), calc(var(--duration) / 4);
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-direction: normal, alternate;
}

@keyframes pulseScale {
    0% { transform: translate(-50%, -50%) scale(1); }
    100% { transform: translate(-50%, -50%) scale(1.12); }
}

/* ===================== SECOND PAGE HEARTS ===================== */
.hearts-page {
    background-color: black;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.heart-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.heart {
    position: absolute;
    font-size: 80px;
    top: 50%;
    left: 50%;
    transform-origin: 200px;
    animation: spinHearts 8s linear infinite;
}

.pink { animation-delay: 0s; }
.green { animation-delay: 1s; }
.blue { animation-delay: 2s; }
.yellow { animation-delay: 3s; }
.orange { animation-delay: 4s; }
.white { animation-delay: 5s; }
.black { animation-delay: 6s; }
.purple { animation-delay: 7s; }

@keyframes spinHearts {
    0% { transform: rotate(0deg) translateX(200px) rotate(0deg);}
    100% { transform: rotate(360deg) translateX(200px) rotate(-360deg);}
}

/* ===================== SMALL-SCREEN ADJUSTMENTS ===================== */
@media (max-width: 480px) {
    :root { --fox-size: 56px; --title-size: 46px; }
    .emoji-container span { font-size: 28px; }
    .title { padding: 12px 18px; border-width: 4px; }
}
