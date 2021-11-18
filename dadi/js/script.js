// Gioco dei dadi:


let userNum = Math.floor(Math.random() * 6) + 1;
alert('Ti viene generato un numero casuale da 1 a 6: ' + userNum);

let pcNum = Math.floor(Math.random() * 6) + 1;
alert('Viene generati anche per il computer: ' + pcNum);



if (userNum > pcNum) {
    alert('You win');
} else if (userNum < pcNum) {
    alert('You lose');
} else if (userNum === pcNum) {
    alert('Tie! try again');
}
