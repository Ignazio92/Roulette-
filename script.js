
const actions = [
  "Spoglia lentamente il partner (2 min)",
  "Bacia ogni parte del corpo (3 min)",
  "Usa solo le mani per dare piacere (4 min)",
  "Legare mani o piedi e stimolare (5 min)",
  "Sussurra fantasie all'orecchio (2 min)",
  "Cammina con pene dentro la vagina (2 min)",
  "Leccare lentamente il corpo intero (4 min)",
  "Fisting con lubrificante (max 5 min)",
  "Usare verdure nel gioco (3 min)",
  "Indossare mutande in vagina/ano (3 min)",
  "Tre in contemporanea su una persona (5 min)",
  "Lecchini alternati da 2 persone (4 min)",
  "Fare l'amore davanti allo specchio (3 min)",
  "Penetrazione in piedi contro muro (4 min)",
  "Lato anale sul tavolo della cucina (3 min)",
  "Pissing in doccia (2 min)",
  "Bere urina da bicchiere (1 min)",
  "Guardarsi a lungo senza toccarsi (2 min)",
  "Rapporto orale in ginocchio (3 min)",
  "Accarezzare con ghiaccio (2 min)",
  "Sesso in bagno con porta aperta (4 min)",
  "Penetrazione su sedia (3 min)",
  "Giro lingua e penetrazione (3 min)",
  "Cambio ruolo: dominante/sottomesso (2 min)",
  "Parlare sporco durante l'atto (3 min)",
  "Stimolare con sex toy (4 min)",
  "Leccare piedi e poi penetrare (3 min)",
  "Penetrazione doppia (massimo 5 min)",
  "Masturbazione incrociata (3 min)",
  "Gioco di ruolo 'estranei' (5 min)"
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
