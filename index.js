// Créer un événément au scroll

// Cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.top = "-70px";
  } else {
    nav.style.top = "3px";
  }
});
