let music = document.getElementById("bgMusic");

let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let teddy = document.getElementById("teddy");

let yesSize = 20;

/* When NO is clicked */
noBtn.addEventListener("click", () => {
  yesSize += 8;
  yesBtn.style.fontSize = yesSize + "px";

  teddy.classList.add("shake");

  setTimeout(() => {
    teddy.classList.remove("shake");
  }, 400);
});

/* When YES is clicked */
yesBtn.addEventListener("click", () => {
  teddy.src = "images/teddy-happy.png";

  document.body.classList.add("transitioning");

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 800); // slightly shorter
});


