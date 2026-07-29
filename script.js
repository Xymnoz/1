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

const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const g3 = document.getElementById("g3");

const svgName = document.getElementById("svgName");
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

url:"https://www.roblox.com/users/XXXXXXXX/profile",

color:"#ffffff"

},

{

title:"Discord",

subtitle:"@Xymnoz",

icon:"fa-brands fa-discord",

url:"https://discord.com/users/TU_ID",

color:"#5865F2"

},

{

title:"Discord Server",

subtitle:"Join our community",

icon:"fa-solid fa-users",

url:"https://discord.gg/TUINVITACION",

color:"#7289DA"

},

{

title:"Steam",

subtitle:"View my profile",

icon:"fa-brands fa-steam",

url:"https://steamcommunity.com/id/TUPERFIL",

color:"#66c0f4"

},

{

title:"Spotify",

subtitle:"Listen with me",

icon:"fa-brands fa-spotify",

url:"https://open.spotify.com/user/TUUSUARIO",

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

socialIcon.style.color = s.color;

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
   REAL LETTER VISUALIZER
=========================== */

const letters = document.querySelectorAll(".audioName span");

function animateVisualizer(){

    requestAnimationFrame(animateVisualizer);

    if(!analyser) return;

    analyser.getByteFrequencyData(frequencyData);

    const bandSize = Math.floor(frequencyData.length / letters.length);

    letters.forEach((letter,index)=>{

        let total = 0;

        for(let i=0;i<bandSize;i++){

            total += frequencyData[index*bandSize+i];

        }

        const level = total / bandSize;

        // Altura individual
        const move = level / 12;

        // Escala individual
        const scale = 1 + level / 650;

        // Color RGB desplazado
        const hue =
        (
            Date.now()/18 +
            index*45 +
            level
        ) % 360;

        // Brillo
        const glow = 8 + level/6;

        letter.style.transform =
        `translateY(${-move}px) scale(${scale})`;

        letter.style.color =
        `hsl(${hue},100%,70%)`;

        letter.style.textShadow = `
        0 0 ${glow}px hsla(${hue},100%,70%,0.95),
        0 0 ${glow*2}px hsla(${hue},100%,60%,0.55)
        `;

    });

}
