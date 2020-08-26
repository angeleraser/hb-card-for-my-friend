const headind = document.getElementById("header");
const button = document.getElementById("button");
const to = document.getElementById("to");
const piolin = document.querySelector(".piolin-jpg");
const openButton = document.querySelector(".open");
const content = document.querySelector(".content");
const cardContent = document.querySelector(".card-content");
const messages = [
  "Hola",
  "Soy Angel",
  "y vengo a dejarte este mensaje:",
  "Hoy es un dia especial",
  "es el dia en que naciste",
  "el dia en que cumples un año más de vida",
  "o uno menos...",
  "aja",
  "bien sabes que el término tiempo es relativo",
  "como decia mi querido colega Alberto Afganistan",
  "a lo mejor todo lo que vemos es una ilusión",
  "y yo no existo tampoco",
  "y el ayer no es ayer sino un hoy más retrasado",
  "bueno, no importa",
  "que me enredo",
  "xD",
  "lo importante es que la pases bien",
  "y seas felíz",
  "así que...",
  "te deseo",
  "un",
  "un x2",
  "un x3",
  "un x4",
  "un x5",
  "dale click una vez más...",
  "jeje",
  "ahora si",
  "¡Feliz Cumpleaños!",
  "No va a faltar el piolin.jpg sacado de google imagenes jajaja",
];
let indx = 0;
const showMessages = () => {
  if (indx <= messages.length - 1) {
    headind.innerText = messages[indx];
  }
  if (indx === messages.length - 1) {
    button.classList.add("display-none");
    piolin.classList.remove("display-none");
  }
  indx += 1;
};
const displayContent = () => {
  cardContent.classList.remove("display-none");
  to.classList.add("display-none");
  openButton.classList.add("display-none");
  content.classList.add("hidden");
};
openButton.addEventListener("click", displayContent);
button.addEventListener("click", showMessages);
