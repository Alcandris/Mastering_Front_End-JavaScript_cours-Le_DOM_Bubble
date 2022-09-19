let counterDisplay = document.querySelector("h3");
let counter = 0;

const arrow = document.querySelector(".arrow");
const nav = document.querySelector("nav");

let checkbox = document.querySelectorAll("input");
let selectedBox;

checkbox.forEach((box) => {
  box.addEventListener("change", (e) => {
    selectedBox = e.target.id; //renvoi l'id du radio selectionné
  });
});

const sound = () => {
  const audio = new Audio();
  audio.src = "./sound/" + selectedBox + ".mp3"; //selection de l'audio en fonction du radio selectionné
  audio.play();
};

//creation d'un bulle
const bubbleMaker = () => {
  const bubble = document.createElement("span"); //création d'un span
  bubble.classList.add("bubble"); //ajout de la class

  document.body.appendChild(bubble); // ajout de bubble en tant qu'enfant de body
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
    counter++; //ajout de 1 au coompteur
    counterDisplay.textContent = counter; // affichage du compteur
    sound(); // jouer le son
    bubble.remove(); // supprimer bubble
  });

  //au bout de 8s, la bulle est supprimée si non touchée
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};
//création d'un bulle toute les 1 secondes
setInterval(bubbleMaker, 1000);

arrow.addEventListener("click", () => {
  nav.classList.toggle("navHidden");
  arrow.classList.toggle("arrowRotate");
});
