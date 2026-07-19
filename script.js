const intro = document.getElementById("intro");
const main = document.getElementById("main");
const button = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");

button.onclick = () => {

    intro.style.display = "none";

    main.style.display = "flex";

    music.play();

};
