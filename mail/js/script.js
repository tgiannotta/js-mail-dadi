/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

//Creo l'array che farà da Database delle email
const dbEmail = ["ironman@marvel.com", "hulk@marvel.com", "thor@marvel.com", "blackwidow@marvel.com", "spiderman@marvel.com", "drstrange@marvel.com", "thanos@marvel.com"];
console.log(dbEmail);
//Chiedo all'utente di inserire la sua mail
const userEmail = prompt('Inserisci la tua mail');
console.log(userEmail);
//Check per vedere se è presente nel database
let mailCheck = false;

for (let i = 0; i < dbEmail.length - 1; i++) {
    let mailAttuale = dbEmail[i];

   if (mailAttuale === userEmail) {
        mailCheck = true;
    }
}
//Messaggio di conferma
if (mailCheck) {
    alert('La tua email è presente nel nostro Database');

} else {
    alert('La tua mail non esiste');
}console.log(mailCheck);