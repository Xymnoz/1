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
   NAME VISUALIZER
=========================== */

function animateVisualizer(){

    requestAnimationFrame(animateVisualizer);

    if(!analyser) return;

    analyser.getByteFrequencyData(frequencyData);

    let bass = 0;
    let mids = 0;
    let highs = 0;

    // Graves
    for(let i=0;i<18;i++){

        bass += frequencyData[i];

    }

    bass /= 18;

    // Medios
    for(let i=18;i<60;i++){

        mids += frequencyData[i];

    }

    mids /= 42;

    // Agudos
    for(let i=60;i<frequencyData.length;i++){

        highs += frequencyData[i];

    }

    highs /= (frequencyData.length-60);

    const hue1 = (Date.now()/18)%360;
    const hue2 = (Date.now()/12 + 90)%360;
    const hue3 = (Date.now()/9 + 180)%360;

    g1.setAttribute(
        "stop-color",
        `hsl(${hue1},100%,${45+bass/6}%)`
    );

    g2.setAttribute(
        "stop-color",
        `hsl(${hue2},100%,${45+mids/6}%)`
    );

    g3.setAttribute(
        "stop-color",
        `hsl(${hue3},100%,${45+highs/6}%)`
    );

    const glow =
        (bass+mids+highs)/3;

    svgName.style.filter=
    `
    drop-shadow(0 0 ${glow/10}px hsl(${hue2},100%,70%))
    drop-shadow(0 0 ${glow/5}px hsl(${hue1},100%,60%))
    drop-shadow(0 0 ${glow/2.8}px hsl(${hue3},100%,55%))
    `;

    svgName.style.transform=
    `scale(${1+glow/1800})`;

}
