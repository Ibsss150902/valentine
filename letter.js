window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.volume = 0.3; // soft romantic volume
  }
});

let loveStarted = false;
let finalShown = false;

/* Open envelope */
function openLetter() {
  document.querySelector(".envelope").classList.add("open");

  setTimeout(startLoveWords, 1200);
  watchScrollEnd();
}

/* Floating love words */
const words = [
  "you are my responsibility 💗",
  "kuchiii puchiii 🥰",
  "meri jaan ❤️",
  "my forever ♾️",
  "I am always with you 🤍",
  "my home 🏡",
];

function startLoveWords() {
  setInterval(createWord, 1600);
}

function createWord() {
  const word = document.createElement("div");
  word.className = "word";
  word.innerText = words[Math.floor(Math.random() * words.length)];

  word.style.left = Math.random() * 70 + 15 + "%";
  word.style.top = Math.random() * 60 + 20 + "%";

  document.getElementById("loveWords").appendChild(word);
  setTimeout(() => word.remove(), 4500);
}

/* Scroll detection (ROBUST) */
function watchScrollEnd() {
  const letter = document.querySelector(".letter");

  letter.addEventListener("scroll", () => {
    const percent =
      (letter.scrollTop + letter.clientHeight) / letter.scrollHeight;

    if (percent > 0.85 && !loveStarted) {
      loveStarted = true;
      startEndLove();
    }
  });
}

/* End love burst */
function startEndLove() {
  setInterval(createEndLove, 700);

  if (!finalShown) {
    finalShown = true;
    showFinalLove();
  }
}

function createEndLove() {
  const love = document.createElement("div");
  love.className = "end-word";
  love.innerText = "I love you 💗";

  love.style.left = Math.random() * 80 + 10 + "%";
  love.style.top = Math.random() * 60 + 20 + "%";

  document.getElementById("loveWords").appendChild(love);
  setTimeout(() => love.remove(), 3500);
}

/* Final message */
function showFinalLove() {
  const final = document.getElementById("finalLove");

  setTimeout(() => {
    document.body.classList.add("dim");
    final.style.opacity = "1";
    final.style.transform = "translate(-50%, -50%) scale(1)";
  }, 1200);

  setTimeout(() => {
    final.style.opacity = "0";
    document.body.classList.remove("dim");
  }, 4500);
}
