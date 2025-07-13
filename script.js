
const actions = [
  "(Coppia) - Penetrazione da dietro sul divano con la testa sul cuscino e i glutei ben sollevati. [Durata max: 10 min]",
  "(Coppia) - Sesso orale completo, fino all'orgasmo, senza mani. [Durata max: 10 min]",
  "(Coppia) - Penetrazione vaginale con gamba alzata e appoggiata al muro. [Durata max: 7 min]",
  "(Coppia) - Masturbazione reciproca guardandosi negli occhi. [Durata max: 5 min]",
  "(Coppia) - Sesso in piedi contro la parete, sussurrandosi fantasie proibite. [Durata max: 7 min]",
  "(Coppia) - Lei si masturba mentre lui guarda e guida con la voce. [Durata max: 5 min]",
  "(Coppia) - Penetrazione laterale con baci sul collo e orecchio. [Durata max: 8 min]",
  "(Coppia) - Stimolazione con sex toy scelto dal partner. [Durata max: 7 min]",
  "(Coppia) - Lui le bacia tutto il corpo, ma non le parti intime. [Durata max: 5 min]",
  "(Coppia) - Lei cavalca lui lentamente, guardandolo negli occhi. [Durata max: 10 min]",
  "(Coppia) - Sesso orale a 69. [Durata max: 7 min]",
  "(Coppia) - Penetrazione con entrambi bendati. [Durata max: 8 min]",
  "(Coppia) - Lui le lecca l’interno coscia fino a farla impazzire. [Durata max: 5 min]",
  "(Coppia) - Lei si fa legare mani e piedi. Lui decide il ritmo. [Durata max: 10 min]",
  "(Coppia) - Doccia insieme con massaggio erotico. [Durata max: 7 min]",
  "(Coppia) - Lei si inginocchia e guarda verso l’alto mentre lo prende in bocca. [Durata max: 5 min]",
  "(Coppia) - Massaggio con olio profumato e finale a sorpresa. [Durata max: 10 min]",
  "(Coppia) - Penetrazione sul tavolo con vestiti addosso. [Durata max: 7 min]",
  "(Coppia) - Lei si masturba sopra di lui senza farlo entrare. [Durata max: 5 min]",
  "(Coppia) - Lui la prende forte e veloce mentre le afferra i capelli. [Durata max: 5 min]",
  "(Coppia) - Lei succhia solo la punta, lentamente. [Durata max: 4 min]",
  "(Coppia) - Posizione missionario con parole dolci e sguardi intensi. [Durata max: 10 min]",
  "(Coppia) - Lei sopra ma con polsi legati. Lui guida i movimenti. [Durata max: 6 min]",
  "(Coppia) - Lui le sussurra oscenità mentre la penetra da dietro. [Durata max: 8 min]",
  "(Coppia) - Scambio di baci profondi e preliminari lenti. [Durata max: 6 min]",
  "(Coppia) - Lei si spoglia lentamente davanti a lui, toccandosi. [Durata max: 5 min]",
  "(Coppia) - Penetrazione da dietro con specchio davanti. [Durata max: 8 min]",
  "(Coppia) - Lei lo masturba usando solo i piedi. [Durata max: 4 min]",
  "(Coppia) - Lui la prende mentre lei sta su una sedia, gambe aperte. [Durata max: 6 min]",
  "(Coppia) - Entrambi nudi, si accarezzano solo con la punta delle dita. [Durata max: 5 min]"
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
