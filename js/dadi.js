let utente = Math.floor(Math.random() * 6) + 1;
let com = Math.floor(Math.random() * 6) + 1
let numerouser = document.getElementById("numeroutente");
let numerocomputer = document.getElementById("numerocom");
let risultato = document.getElementById("risultato");
// console.log(utente);
// console.log(com);
if (utente > com) {
  numeroutente.innerHTML = `${utente}`;
  numerocom.innerHTML = `${com}`;
  risultato.innerHTML = `${"vince utente"}`;
} else if (utente < com) {
  numerocom.innerHTML = `${com}`;
  numeroutente.innerHTML = `${utente}`;
  risultato.innerHTML = `${"vince com"}`;
} else {
  risultato.innerHTML = `${"pareggio"}`;
}
