// ============================
// BOTÓN INICIO
// ============================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document
    .getElementById("heartSection")
    .scrollIntoView({
        behavior:"smooth"
    });

});


// ============================
// CONTADOR DE AMOR
// ============================

const startDate = new Date("2025-03-02T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days =
    Math.floor(diff / (1000*60*60*24));

    const hours =
    Math.floor(
        (diff/(1000*60*60)) % 24
    );

    const minutes =
    Math.floor(
        (diff/(1000*60)) % 60
    );

    const seconds =
    Math.floor(
        (diff/1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

setInterval(updateCounter,1000);
updateCounter();


// ============================
// CAMBIO DE FOTOS CORAZÓN
// ============================

const photos = [

    "img/heart1.jpg",
    "img/heart2.jpg",
    "img/heart3.jpg",
    "img/heart4.jpg",
    "img/heart5.jpg"

];

let currentPhoto = 0;

setInterval(()=>{

    currentPhoto++;

    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }

    document.getElementById("heartPhoto").src =
    photos[currentPhoto];

},4000);


// ============================
// CARTA ROMÁNTICA
// ============================

const openLetter =
document.getElementById("openLetter");

const letterContainer =
document.getElementById("letterContainer");

openLetter.addEventListener("click",()=>{

    if(letterContainer.style.display === "block"){

        letterContainer.style.display = "none";
        return;

    }

    letterContainer.style.display = "block";

    letterContainer.innerHTML = `

    <h2 style="text-align:center;">
    Para Mi Amor Brithany 💜
    </h2>

    <br>

    <p>

    Hoy celebras tus 20 años y quiero aprovechar este momento para decirte cuánto significas para mí.

    <br><br>

    Desde el 02/03/2025 mi vida cambió para mejor.

    No solo encontré una novia, encontré a mi mejor amiga, mi compañera, mi lugar seguro y la persona con la que quiero compartir mis días.

    <br><br>

    Gracias por cada sonrisa.

    Gracias por cada abrazo.

    Gracias por cada llamada.

    Gracias por cada momento que hemos vivido juntos.

    <br><br>

    Amo tu sonrisa.

    Amo tu mirada.

    Amo tu forma de ser.

    Amo tu corazón.

    Amo tus ocurrencias.

    Amo la tranquilidad que siento cuando estoy contigo.

    <br><br>

    Si alguien me preguntara cuál es mi lugar favorito en el mundo, respondería sin dudarlo:

    <br><br>

    Tú.

    <br><br>

    Porque donde estés tú, ahí está mi felicidad.

    <br><br>

    Feliz cumpleaños amor.

    Espero seguir celebrando muchísimos cumpleaños a tu lado.

    <br><br>

    Te amo infinitamente.

    <br><br>

    ❤️ Rodrigo ❤️

    </p>

    `;

});


// ============================
// LLUVIA DE CORAZONES
// ============================

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "💜";

    heart.style.position = "fixed";
    heart.style.top = "-50px";
    heart.style.left =
    Math.random()*window.innerWidth+"px";

    heart.style.fontSize =
    (Math.random()*20+20)+"px";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = -50;

    const interval = setInterval(()=>{

        pos += 4;

        heart.style.top = pos + "px";

        if(pos > window.innerHeight){

            clearInterval(interval);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,700);


// ============================
// MENSAJE FINAL
// ============================

const surpriseBtn =
document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click",()=>{

    const overlay =
    document.createElement("div");

    overlay.id = "overlayFinal";

    overlay.innerHTML = `

    <div class="finalContent">

        <h1>
        TE AMO BRITHANY 💜
        </h1>

        <p>

        Gracias por existir.

        <br><br>

        Gracias por cada sonrisa.

        <br><br>

        Gracias por cada abrazo.

        <br><br>

        Gracias por cada momento.

        <br><br>

        Eres mi persona favorita.

        <br><br>

        Feliz Cumpleaños Amor ❤️

        </p>

        <button id="closeOverlay">
        Cerrar
        </button>

    </div>

    `;

    document.body.appendChild(overlay);

    const style =
    document.createElement("style");

    style.innerHTML = `

    #overlayFinal{

        position:fixed;
        inset:0;

        background:
        rgba(0,0,0,.95);

        display:flex;
        justify-content:center;
        align-items:center;

        z-index:99999;

        padding:20px;
    }

    .finalContent{

        text-align:center;
        max-width:700px;
    }

    .finalContent h1{

        color:#ffb8ff;

        font-size:4rem;

        margin-bottom:30px;
    }

    .finalContent p{

        line-height:2;

        font-size:1.2rem;
    }

    #closeOverlay{

        margin-top:30px;

        padding:15px 30px;

        border:none;

        border-radius:50px;

        background:#ff00ff;

        color:white;

        cursor:pointer;
    }

    `;

    document.head.appendChild(style);

    document
    .getElementById("closeOverlay")
    .addEventListener("click",()=>{

        overlay.remove();

    });

});
/* ===================================
   PREMIUM BRITHANY 20
=================================== */

/* CARTA */

const openLetterBtn =
document.getElementById("openLetter");

const letterContainerPremium =
document.getElementById("letterContainer");

if(openLetterBtn){

openLetterBtn.addEventListener("click",()=>{

letterContainerPremium.style.display="block";

letterContainerPremium.scrollIntoView({
behavior:"smooth"
});

});

}

/* MENSAJE SECRETO */

const secretBtn =
document.getElementById("secretBtn");

const secretMessage =
document.getElementById("secretMessage");

if(secretBtn){

secretBtn.addEventListener("click",()=>{

secretMessage.style.display="block";

createHeartExplosion(
window.innerWidth/2,
window.innerHeight/2
);

});

}

/* FINAL ÉPICO */

const finalBtnPremium =
document.getElementById("finalBtn");

const finalMessagePremium =
document.getElementById("finalMessage");

if(finalBtnPremium){

finalBtnPremium.addEventListener("click",()=>{

finalMessagePremium.style.display="block";

massiveLoveRain();

for(let i=0;i<10;i++){

setTimeout(()=>{

createHeartExplosion(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight

);

},i*300);

}

finalMessagePremium.scrollIntoView({
behavior:"smooth"
});

});

}

/* ===================================
   KUROMIS FLOTANDO
=================================== */

const kuromiImages=[

"img/kuromi1.png",
"img/kuromi2.png"

];

function createFloatingKuromi(){

const img=document.createElement("img");

img.src=

kuromiImages[
Math.floor(
Math.random()*kuromiImages.length
)
];

img.style.position="fixed";

img.style.left=
Math.random()*100+"vw";

img.style.bottom="-150px";

img.style.width=
(40+Math.random()*50)+"px";

img.style.opacity=".9";

img.style.pointerEvents="none";

img.style.zIndex="4";

document.body.appendChild(img);

img.animate([

{
transform:
"translateY(0px) rotate(0deg)"
},

{
transform:
"translateY(-130vh) rotate(360deg)"
}

],{

duration:
12000+
Math.random()*6000

});

setTimeout(()=>{

img.remove();

},18000);

}

setInterval(
createFloatingKuromi,
2200
);

/* ===================================
   CORAZONES PNG
=================================== */

const heartImages=[

"img/heart1.jpg",
"img/heart2.jpg",
"img/heart3.jpg",
"img/heart4.jpg",
"img/heart5.jpg"

];

function createHeartPNG(){

const img=document.createElement("img");

img.src=

heartImages[
Math.floor(
Math.random()*heartImages.length
)
];

img.style.position="fixed";

img.style.left=
Math.random()*100+"vw";

img.style.bottom="-120px";

img.style.width=
(25+Math.random()*40)+"px";

img.style.pointerEvents="none";

img.style.zIndex="3";

document.body.appendChild(img);

img.animate([

{
transform:"translateY(0px)"
},

{
transform:"translateY(-120vh)"
}

],{

duration:
10000+
Math.random()*5000

});

setTimeout(()=>{

img.remove();

},15000);

}

setInterval(
createHeartPNG,
1200
);

/* ===================================
   MENSAJES EXTRA
=================================== */

const extraLovePhrases=[

"💜 Mi Paletita",
"💜 Mi Amor",
"💜 Mi Persona Favorita",
"💜 Mi Lugar Seguro",
"💜 Feliz Cumpleaños",
"💜 Te Amo Muchísimo",
"💜 Gracias Por Existir",
"💜 Siempre Tú",
"💜 Rodrigo ❤️ Brithany",
"💜 Mi Futuro Favorito"

];

function floatingLoveText(){

const text=document.createElement("div");

text.innerHTML=

extraLovePhrases[
Math.floor(
Math.random()*extraLovePhrases.length
)
];

text.style.position="fixed";

text.style.left=
Math.random()*100+"vw";

text.style.top=
Math.random()*100+"vh";

text.style.color="#f4c6ff";

text.style.fontWeight="bold";

text.style.fontSize=
(15+Math.random()*15)+"px";

text.style.pointerEvents="none";

text.style.zIndex="6";

document.body.appendChild(text);

text.animate([

{
opacity:0,
transform:"scale(.5)"
},

{
opacity:1,
transform:"scale(1.2)"
},

{
opacity:0,
transform:"scale(.5)"
}

],{

duration:3500

});

setTimeout(()=>{

text.remove();

},3500);

}

setInterval(
floatingLoveText,
2500
);

/* ===================================
   LLUVIA FINAL GIGANTE
=================================== */

function massiveLoveRain(){

const messages=[

"💜",
"❤️",
"💕",
"TE AMO",
"BRITHANY",
"MI AMOR",
"FELIZ CUMPLEAÑOS"

];

for(let i=0;i<200;i++){

setTimeout(()=>{

const item=
document.createElement("div");

item.innerHTML=

messages[
Math.floor(
Math.random()*messages.length
)
];

item.style.position="fixed";

item.style.left=
Math.random()*100+"vw";

item.style.top="-50px";

item.style.fontSize=
(20+Math.random()*30)+"px";

item.style.color="#f4b6ff";

item.style.pointerEvents="none";

item.style.zIndex="99999";

document.body.appendChild(item);

item.animate([

{
transform:"translateY(0)"
},

{
transform:"translateY(120vh)"
}

],{

duration:
5000+
Math.random()*4000

});

setTimeout(()=>{

item.remove();

},9000);

},i*40);

}

}