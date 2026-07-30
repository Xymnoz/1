/* ===========================
   Xymnoz v1.1
=========================== */

// ---------- INTRO ----------

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
/* ===========================
   AUDIO VISUALIZER
=========================== */

const cardTitle = document.getElementById("mainNickname");
const letters = cardTitle.querySelectorAll("span");

let audioContext;
let analyser;
let source;
let frequencyData;

enterBtn.onclick = async () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";
        main.style.display = "flex";

    },600);

    try{

        if(!audioContext){

            audioContext = new AudioContext();

            analyser = audioContext.createAnalyser();

            analyser.fftSize = 256;

            frequencyData = new Uint8Array(analyser.frequencyBinCount);

            source = audioContext.createMediaElementSource(music);

            source.connect(analyser);

            analyser.connect(audioContext.destination);

        }

        await audioContext.resume();

        await music.play();

        animateVisualizer();

    }
    catch(e){

        console.log(e);

    }

};

// ---------- SOCIAL SHOWCASE ----------

const socialCard = document.getElementById("socialCard");

const socialIcon = document.getElementById("socialIcon");

const socialTitle = document.getElementById("socialTitle");

const socialSubtitle = document.getElementById("socialSubtitle");

const progressBar = document.getElementById("progressBar");

const socials = [

{

title:"Roblox",

subtitle:"@Xymnoz",

icon:"fa-solid fa-cube",

url:"https://www.roblox.com/es/users/138785567/profile",

color:"#ffffff"

},

{

title:"Discord",

subtitle:"@Xymnoz",

icon:"fa-brands fa-discord",

url:"https://discord.com/users/1232462239168987178",

color:"#5865F2"

},

{

title:"Discord Server",

subtitle:"(Aun trabajando en esto)",

icon:"fa-solid fa-users",

url:"https://discord.gg/TUINVITACION",

color:"#7289DA"

},

{

title:"Steam",

subtitle:"¿Te pinta jugar algo?",

icon:"fa-brands fa-steam",

url:"https://steamcommunity.com/profiles/76561198760708210/",

color:"#66c0f4"

},

{

title:"Spotify",

subtitle:"Recomendame música, crack",

icon:"fa-brands fa-spotify",

url:"https://open.spotify.com/user/31sshiewxr3scz45lqhsdfrfg744?si=7kqtAedlT8STyoW5ZIqkIQ&utm_source=copy-link&nd=1&dlsi=9798527aded2481b",

color:"#1DB954"

}

];

let current = 0;

let progress = 100;

// ---------- CAMBIO ----------

function updateCard(){

const s = socials[current];

socialTitle.textContent = s.title;

socialSubtitle.textContent = s.subtitle;

socialCard.href = s.url;

socialIcon.className = s.icon;

progress = 100;

}

// ---------- ANIMACION ----------

setInterval(()=>{

progress -= 2;

progressBar.style.width = progress + "%";

if(progress <= 0){

socialCard.animate([

{

opacity:1,

transform:"translateX(0px)"

},

{

opacity:0,

transform:"translateX(-40px)"

}

],{

duration:220,

fill:"forwards"

});

setTimeout(()=>{

current++;

if(current >= socials.length){

current = 0;

}

updateCard();

socialCard.animate([

{

opacity:0,

transform:"translateX(40px)"

},

{

opacity:1,

transform:"translateX(0px)"

}

],{

duration:220,

fill:"forwards"

});

},220);

}

},100);

updateCard();
/* ======================================
   Typing Effect
====================================== */

const typingElement = document.getElementById("typingText");

const typingSentence = "Mi mayor atributo es mi lealtad";

let letter = 0;

let deleting = false;

function typingLoop(){

    if(!deleting){

        typingElement.textContent =
        typingSentence.substring(0,letter);

        letter++;

        if(letter > typingSentence.length){

            deleting = true;

            setTimeout(typingLoop,1800);

            return;

        }

    }

    else{

        typingElement.textContent =
        typingSentence.substring(0,letter);

        letter--;

        if(letter < 0){

            deleting = false;

            letter = 0;

        }

    }

    setTimeout(

        typingLoop,

        deleting ? 45 : 85

    );

}

typingLoop();
/* ======================================
   Argentina Clock
====================================== */

const clock = document.getElementById("clock");

function updateClock(){

    const now = new Date();

    const argentinaTime = now.toLocaleTimeString("es-AR",{

        timeZone:"America/Argentina/Buenos_Aires",

        hour:"2-digit",

        minute:"2-digit",

        second:"2-digit"

    });

    clock.textContent = argentinaTime;

}

updateClock();

setInterval(updateClock,1000);
/* ======================================
   Random Glitch
====================================== */

const nickname = document.getElementById("nickname");

function glitch(){

    nickname.classList.add("glitch");

    setTimeout(()=>{

        nickname.classList.remove("glitch");

    },180);

    const next = Math.random()*4500+3500;

    setTimeout(glitch,next);

}

setTimeout(glitch,2500)/* ======================================
   DIGITAL NOISE ENGINE
====================================== */

const binaryBackground = document.getElementById("binaryBackground");

const COLUMN_COUNT = 42;

function randomBinary(length){

    let html = "";

    for(let i=0;i<length;i++){

        if(Math.random() < 0.25){

            html += '<span class="binaryOne">1</span><br>';

        }else{

            html += '<span class="binaryZero">0</span><br>';

        }

    }

    return html;

}

for(let i=0;i<COLUMN_COUNT;i++){

    const column = document.createElement("div");

    column.className = "binaryColumn";

    column.style.left = (i*(100/COLUMN_COUNT))+"vw";

    column.style.animationDuration =
        (18 + Math.random()*12) + "s";

    column.style.animationDelay =
        (-Math.random()*30) + "s";

    column.innerHTML = randomBinary(140);

    binaryBackground.appendChild(column);

};
/* ===========================
   NAME VISUALIZER
=========================== */

function animateVisualizer(){

    requestAnimationFrame(animateVisualizer);

    if(!analyser) return;

    analyser.getByteFrequencyData(frequencyData);

    // Barras del ecualizador
    const bars = [
        document.getElementById("bar0"),
        document.getElementById("bar1"),
        document.getElementById("bar2"),
        document.getElementById("bar3"),
        document.getElementById("bar4"),
        document.getElementById("bar5")
    ];

    // Distintas bandas de frecuencia
    const bands = [2, 6, 12, 24, 48, 80];

    let total = 0;

    for(let i=0;i<bars.length;i++){

        const value = frequencyData[bands[i]] || 0;

        total += value;

        const height = 16 + value * 0.35;

        bars[i].style.height = height + "px";

        const hue = (value * 1.6 + Date.now() / 18) % 360;

        bars[i].style.background =
            `linear-gradient(to top,
            hsl(${hue},100%,55%),
            hsl(${(hue+40)%360},100%,60%),
            hsl(${(hue+80)%360},100%,65%)
            )`;

        bars[i].style.boxShadow =
            `0 0 ${value/8}px hsl(${hue},100%,60%)`;
    }

    // Color del nombre
    const volume = total / bars.length;

    const hue = (Date.now()/10) % 360;

    document.querySelectorAll(".audioName span").forEach((letter,index)=>{

        const offset = index * 18;

        letter.style.color =
            `hsl(${(hue+offset)%360},100%,72%)`;

        letter.style.textShadow =
            `
            0 0 ${6+volume/18}px hsl(${(hue+offset)%360},100%,65%),
            0 0 ${14+volume/10}px hsl(${(hue+offset+30)%360},100%,60%)
            `;

    });

}
/* ======================================
   BIO TYPING (Main Card)
====================================== */

const bioTyping = document.getElementById("bioTyping");

if (bioTyping) {

    const bioLines = [

        "Editor Audiovisual",

        "Desarrollador Web",

        "Artista Digital",

        "Autor Novelista",

        "Trilingüe: Esp / Ing / Por",

        "Orgullosamente Argentino"

    ];

    let bioIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function animateBio() {

        const current = bioLines[bioIndex];

        if (!deleting) {

            bioTyping.textContent =
                current.substring(0, charIndex);

            charIndex++;

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(animateBio, 2200);

                return;

            }

            setTimeout(animateBio, 75);

        } else {

            bioTyping.textContent =
                current.substring(0, charIndex);

            charIndex--;

            if (charIndex < 0) {

                deleting = false;

                bioIndex++;

                if (bioIndex >= bioLines.length) {

                    bioIndex = 0;

                }

                charIndex = 0;

                setTimeout(animateBio, 500);

                return;

            }

            setTimeout(animateBio, 110);

        }

    }

    animateBio();

}
