const startBtn = document.getElementById("startBtn");
const heartSection = document.getElementById("heartSection");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

function playMusic() {
  if (!bgMusic) return;

  bgMusic.volume = 0.35;
  bgMusic.play().then(() => {
    if (musicToggle) {
      musicToggle.classList.add("is-playing");
      musicToggle.innerHTML = "&#10074;&#10074;";
      musicToggle.setAttribute("aria-label", "Pausar musica");
    }
  }).catch(() => {});
}

function pauseMusic() {
  if (!bgMusic) return;

  bgMusic.pause();

  if (musicToggle) {
    musicToggle.classList.remove("is-playing");
    musicToggle.innerHTML = "&#127925;";
    musicToggle.setAttribute("aria-label", "Activar musica");
  }
}

if (musicToggle) {
  musicToggle.addEventListener("click", () => {
    if (bgMusic && bgMusic.paused) {
      playMusic();
      return;
    }

    pauseMusic();
  });
}

if (startBtn && heartSection) {
  startBtn.addEventListener("click", () => {
    playMusic();
    createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);

    heartSection.scrollIntoView({
      behavior: "smooth"
    });
  });
}

const startDate = new Date("2025-03-02T00:00:00");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (daysEl) daysEl.textContent = days;
  if (hoursEl) hoursEl.textContent = hours;
  if (minutesEl) minutesEl.textContent = minutes;
  if (secondsEl) secondsEl.textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

const heartPhoto = document.getElementById("heartPhoto");
const photos = [
  "img/heart1.jpg",
  "img/heart2.jpg",
  "img/heart3.jpg",
  "img/heart4.jpg",
  "img/heart5.jpg"
];

let currentPhoto = 0;

function showHeartPhoto(index) {
  if (!heartPhoto) return;

  currentPhoto = (index + photos.length) % photos.length;
  heartPhoto.src = photos[currentPhoto];
}
heartPhoto.animate([

{opacity:.4,transform:"scale(.92)"},

{opacity:1,transform:"scale(1)"}

],{

duration:700,

easing:"ease"

});

if (heartPhoto) {
  setInterval(() => {
    showHeartPhoto(currentPhoto + 1);
  }, 4000);
}

const galleryTrack = document.getElementById("galleryTrack");
const photoCards = Array.from(document.querySelectorAll(".photo-card"));
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const carouselDots = document.getElementById("carouselDots");
let activeSlide = 0;

function updateCarousel(index) {
  if (!photoCards.length) return;

  activeSlide = (index + photoCards.length) % photoCards.length;

  photoCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === activeSlide);
  });

  const dots = Array.from(document.querySelectorAll(".carousel-dots button"));
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeSlide);
  });

  photoCards[activeSlide].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });

  showHeartPhoto(activeSlide);
}

if (carouselDots && photoCards.length) {
  photoCards.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ir al recuerdo ${index + 1}`);
    dot.addEventListener("click", () => updateCarousel(index));
    carouselDots.appendChild(dot);
  });

  updateCarousel(0);
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => updateCarousel(activeSlide - 1));
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => updateCarousel(activeSlide + 1));
}

if (galleryTrack && photoCards.length) {
  setInterval(() => {
    updateCarousel(activeSlide + 1);
  }, 5200);
}

const openLetter = document.getElementById("openLetter");
const letterContainer = document.getElementById("letterContainer");

if (openLetter && letterContainer) {
  openLetter.addEventListener("click", () => {
    const isOpen = letterContainer.style.display === "block";

    if (isOpen) {
      letterContainer.style.display = "none";
      openLetter.textContent = "Abrir Mi Carta \uD83D\uDC9C";
      return;
    }

    letterContainer.innerHTML = `
      <div class="letter">
        <h3>Para Mi Amor Brithany \uD83D\uDC9C</h3>

        <p>
          Hoy celebras tus 20 a&ntilde;os y quiero aprovechar este momento para decirte cu&aacute;nto significas para m&iacute;.
        </p>

        <p>
          Desde el 02/03/2025 mi vida cambi&oacute; para mejor. No solo encontr&eacute; una novia, encontr&eacute; a mi mejor amiga,
          mi compa&ntilde;era, mi lugar seguro y la persona con la que quiero compartir mis d&iacute;as.
        </p>

        <p>
          Gracias por cada sonrisa, cada abrazo, cada llamada y cada momento que hemos vivido juntos.
        </p>

        <p>
          Amo tu sonrisa, tu mirada, tu forma de ser, tu coraz&oacute;n y la tranquilidad que siento cuando estoy contigo.
        </p>

        <p>
          Si alguien me preguntara cu&aacute;l es mi lugar favorito en el mundo, responder&iacute;a sin dudarlo: t&uacute;.
        </p>

        <p>
          Feliz cumplea&ntilde;os amor. Espero seguir celebrando much&iacute;simos cumplea&ntilde;os a tu lado.
        </p>

        <h4>Con todo mi amor,<br>Rodrigo \uD83D\uDC9C</h4>
      </div>
    `;

    letterContainer.style.display = "block";
    openLetter.textContent = "Cerrar Mi Carta \uD83D\uDC9C";
    createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);
    letterContainer.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function createFloatingHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.35 ? "\uD83D\uDC9C" : "\uD83D\uDC95";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${Math.random() * 20 + 18}px`;
  heart.style.animationDuration = `${Math.random() * 3 + 4}s`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7600);
}

setInterval(createFloatingHeart, 850);

function createHeartExplosion(x, y) {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 140;

    heart.className = "explosion-heart";
    heart.textContent = Math.random() > 0.5 ? "\uD83D\uDC9C" : "\u2764\uFE0F";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1300);
  }
}

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

if (secretBtn && secretMessage) {
  secretBtn.addEventListener("click", () => {
    secretMessage.style.display = "block";
    createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);
  });
}

const finalBtn = document.getElementById("finalBtn");
const finalMessage = document.getElementById("finalMessage");

if (finalBtn && finalMessage) {
  finalBtn.addEventListener("click", () => {
    finalMessage.style.display = "block";
    playMusic();
    massiveLoveRain();
    finalMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {
  surpriseBtn.addEventListener("click", () => {
    playMusic();

    const overlay = document.createElement("div");

    overlay.id = "overlayFinal";
    overlay.innerHTML = `
      <div class="finalContent">
        <h1>TE AMO BRITHANY \uD83D\uDC9C</h1>
        <p>
          Gracias por existir.<br><br>
          Gracias por cada sonrisa.<br><br>
          Gracias por cada abrazo.<br><br>
          Gracias por cada momento.<br><br>
          Eres mi persona favorita.<br><br>
          Feliz Cumplea&ntilde;os Amor \u2764\uFE0F
        </p>
        <button id="closeOverlay" type="button">Cerrar</button>
      </div>
    `;

    document.body.appendChild(overlay);
    massiveLoveRain();
    createHeartExplosion(window.innerWidth / 2, window.innerHeight / 2);

    document.getElementById("closeOverlay").addEventListener("click", () => {
      overlay.remove();
    });
  });
}

const kuromiImages = [
  "img/kuromi1.png",
  "img/kuromi2.png"
];

function createFloatingKuromi() {
  const img = document.createElement("img");

  img.src = kuromiImages[Math.floor(Math.random() * kuromiImages.length)];
  img.className = "floating-kuromi";
  img.style.left = `${Math.random() * 100}vw`;
  img.style.width = `${40 + Math.random() * 50}px`;
  img.style.animationDuration = `${12 + Math.random() * 6}s`;

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 19000);
}

setInterval(createFloatingKuromi, 2400);

const extraLovePhrases = [
  "\uD83D\uDC9C Mi Paletita",
  "\uD83D\uDC9C Mi Amor",
  "\uD83D\uDC9C Mi Persona Favorita",
  "\uD83D\uDC9C Mi Lugar Seguro",
  "\uD83D\uDC9C Feliz Cumplea&ntilde;os",
  "\uD83D\uDC9C Te Amo Much&iacute;simo",
  "\uD83D\uDC9C Gracias Por Existir",
  "\uD83D\uDC9C Siempre T&uacute;",
  "\uD83D\uDC9C Rodrigo \u2764\uFE0F Brithany",
  "\uD83D\uDC9C Mi Futuro Favorito"
];

function floatingLoveText() {
  const text = document.createElement("div");

  text.className = "floating-text";
  text.innerHTML = extraLovePhrases[Math.floor(Math.random() * extraLovePhrases.length)];
  text.style.left = `${Math.random() * 85}vw`;
  text.style.top = `${Math.random() * 90}vh`;
  text.style.fontSize = `${15 + Math.random() * 10}px`;

  document.body.appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 3600);
}

setInterval(floatingLoveText, 3000);

function massiveLoveRain() {
    for(let i=0;i<6;i++){

setTimeout(()=>{

createHeartExplosion(

window.innerWidth*Math.random(),

window.innerHeight*Math.random()

);

},i*500);

}
  const messages = [
    "\uD83D\uDC9C",
    "\u2764\uFE0F",
    "\uD83D\uDC95",
    "TE AMO",
    "BRITHANY",
    "MI AMOR",
    "FELIZ CUMPLEA\u00D1OS"
  ];

for (let i = 0; i < 220; i++) {
    setTimeout(() => {
      const item = document.createElement("div");

      item.className = "love-rain";
      item.textContent = messages[Math.floor(Math.random() * messages.length)];
      item.style.left = `${Math.random() * 100}vw`;
      item.style.fontSize = `${18 + Math.random() * 28}px`;
      item.style.animationDuration = `${5 + Math.random() * 4}s`;

      document.body.appendChild(item);

      setTimeout(() => {
        item.remove();
      }, 9600);
    }, i * 40);
  }
}

let lastSparkle = 0;

window.addEventListener("pointermove", (event) => {
  const now = Date.now();

  if (now - lastSparkle < 70) return;

  lastSparkle = now;

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 850);
});
/*====================================
 ANIMACIÓN AL HACER SCROLL
====================================*/

const revealElements = document.querySelectorAll(
".section, .heart-section"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.18
});

revealElements.forEach(section=>{

section.classList.add("reveal");

observer.observe(section);

});
/*==================================
 ESTRELLAS DEL FONDO
==================================*/

for(let i=0;i<80;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    document.body.appendChild(star);

}
setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML=Math.random()>.5?"🌸":"💜";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>petal.remove(),12000);

},900);
const cursor=document.createElement("div");

cursor.className="cursorGlow";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});
setTimeout(()=>{

const note=document.createElement("div");

note.className="floating-text";

note.innerHTML="💜 Gracias por llegar a mi vida 💜";

document.body.appendChild(note);

setTimeout(()=>note.remove(),5000);

},15000);