/* ===========================
   Xymnoz v1.1
=========================== */

// ---------- INTRO ----------

const intro = document.getElementById("intro");
const main = document.getElementById("main");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

enterBtn.onclick = () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        main.style.display = "flex";

    }, 600);

    music.play().catch(() => {});

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
