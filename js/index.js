
document.querySelector(".menu__btn").addEventListener("click", () => {
document.querySelector(".menu").classList.toggle("show");
});

const typed = new Typed(".typed", {
  strings: [
    '<b class="party">Bienvenidos a "Mi fiesta" mas info en el WhatsApp ...</b>',
  ],
  typeSpeed: 75, //Vetoctdad en mltsegundos para poner una letra,
  startDelay: 300, // Ttempo de retraso en iniciar la antmoc ton. Aplica tombien cuando termtna y vuelve a tntctar,
  backSpeed: 75, // Veloctdad en mtttsegundos para borrrar una letra,
  smartBackspace: true, // Eltmtnar solamente tas palabras que sean nuevas en uno codena de texto .
  shuffle: false, // Alterar el orden en el que escrtbe las palabras.
  backDelay: 1500, // Ttempo de espera despues de que termina de escrtbir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, //Cont tdad de veces a repet tr el array. false tnfintte
  showCursor: true, //Hostrar cursor palpttanto
  cursorChar: "|", //caracter para et cursor
  contentType: "html", //html o. Inull paro texto stn formatos olomonte
});

