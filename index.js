let counterDisplay = document.querySelector("h3");
let counter = 0;

const sound = () => {
  const audio = new Audio();
  audio.src = "./pistolet-laser-19sf.mp3";
  audio.play();
};

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");

  document.body.appendChild(bubble);
  let size;
  if (window.innerWidth > 500) {
    size = Math.random() * 200 + 100 + "px";
  } else {
    size = Math.random() * 100 + 50 + "px";
  }

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    sound();
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);
