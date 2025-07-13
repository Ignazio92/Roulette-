
const actions =[ 
(Coppia) - Penetrazione da dietro sul divano con la testa sul cuscino e i glutei ben sollevati. [Durata max: 10 min],
(Coppia) - Sesso orale completo, fino all'orgasmo, senza mani. [Durata max: 10 min],
(Coppia) - Penetrazione vaginale con gamba alzata e appoggiata al muro. [Durata max: 7 min],
(Coppia) - Inserisci le mutandine del/della partner vagina o ano, poi stimola con le dita. [Durata max: 5 min],
(Coppia) - Fisting vaginale profondo, lubrificato, con baci e carezze. [Durata max: 10 min],
(Coppia) - Penetrazione anale lenta e continua sul lavandino del bagno. [Durata max: 8 min],
(Coppia) - Usa verdura pulita (zucchina/carota) per penetrazione vaginale o anale. [Durata max: 8 min],
(Coppia) - Cavalcata inversa con movimenti decisi, mani libere. [Durata max: 7 min],
(Coppia) - A 90° sopra il tavolo, vieni preso/a da dietro, mani ferme. [Durata max: 6 min],
(Coppia) - Penetrazione doccia, schiena al muro, ritmo profondo. [Durata max: 9 min],
(Coppia) - Massaggio erotico che termina con penetrazione anale o doppia stimolazione. [Durata max: 10 min],
(Coppia) - Penetrazione sul pavimento nudi, sfruttando la superficie fredda. [Durata max: 6 min],
(Coppia) - Due dita  vagina/ano mentre stimoli il clitoride con la lingua. [Durata max: 7 min],
(Coppia) - Penetrazione con partner seduto/a sul bordo di una sedia. [Durata max: 8 min],
(Coppia) - Posizione a ranocchia: sopra, gambe aperte, sguardo fisso. [Durata max: 6 min],
(Coppia) - Alterna 5 spinte vaginali, 5 anali, per 3 minuti consecutivi. [Durata max: 3 min],
(Coppia) - Ti siedi sul volto dell'altro e ricevi stimoli orali e manuali. [Durata max: 6 min],
(Coppia) - Posizione carriola: mani a terra, penetrazione da dietro. [Durata max: 4 min],
(Coppia) - Ghiaccio  bocca + sesso orale con gioco di temperatura. [Durata max: 6 min],
(Coppia) - Penetrazione guardandosi nello specchio. Solo sguardi. [Durata max: 8 min],
(In 3) - Uno penetra da dietro mentre l'altro/a stimola oralmente davanti. [Durata max: 10 min],
(In 3) - Penetrazione doppia alternata: vaginale e anale (reale o dildo). [Durata max: 8 min],
(In 3) - Uno si fa stimolare oralmente, l'altro bacia e tocca tutto il corpo. [Durata max: 6 min],
(In 3) - Penetrazione fila: uno entra, poi l'altro prende il posto. [Durata max: 8 min],
(In 3) - Gioco con verdure: uno penetra, l'altro osserva e poi si scambiano. [Durata max: 7 min],
(Coppia) - Cammina lentamente per 3 stanze con il pene inserito nella vagina. [Durata max: 4 min],
(Coppia) - Pissing erotico nella doccia, seguito da penetrazione. [Durata max: 6 min],
(Coppia) - Pissing  un bicchiere, l'altro lo beve o lo tocca con le labbra. [Durata max: 4 min],
(In 3) - Penetrazione mentre uno urina sugli altri due ( doccia). [Durata max: 7 min],
(In 3) - Uno penetra, l'altro tiene le gambe e guida con comandi vocali. [Durata max: 6 min],
  ]; 

const wheel = document.getElementById("wheel");
const result = document.getElementById("result");
const sound = document.getElementById("sound");

// Crea 30 segmenti
const total = actions.length;
for (let i = 0; i < total; i++) {
  const segment = document.createElement("div");
  segment.className = "segment";
  const angle = i * (360 / total);
  segment.style.transform = `rotate(${angle}deg) skewY(-60deg)`;
  segment.innerHTML = `<div style="transform: skewY(60deg) rotate(${360 / total / 2}deg);">${i+1}</div>`;
  wheel.appendChild(segment);
}

let spinning = false;
function spin() {
  if (spinning) return;
  spinning = true;
  const deg = 360 * 5 + Math.floor(Math.random() * 360);
  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;
  setTimeout(() => {
    const actualDeg = deg % 360;
    const index = Math.floor((360 - actualDeg) / (360 / total)) % total;
    result.innerText = actions[index];
    spinning = false;
  }, 4000);
}

function startTimer() {
  const text = result.innerText;
  const match = text.match(/(\d+) min/);
  let seconds = match ? parseInt(match[1]) * 60 : 60;

  result.innerText = `⏳ Timer: ${seconds} secondi...`;
  const countdown = setInterval(() => {
    seconds--;
    result.innerText = `⏳ Timer: ${seconds} secondi...`;
    if (seconds === 0) {
      clearInterval(countdown);
      result.innerText = "⏰ Tempo scaduto!";
      sound.play();
    }
  }, 1000);
}
