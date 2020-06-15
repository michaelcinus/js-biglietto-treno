//

//RICHIESTA #1: Chiedere all'utente quanto sarà il lungo il suo viaggio
var km = parseInt(prompt ("Quanti km dovrai affrontare per il tuo viaggio?"));

//RICHIESTA #2: Chiedere all'utente quanti anni ha
var eta = parseInt(prompt("Quanti anni hai?"));

//Calcolare prezzo biglietto in base ai km del viaggio
var prezzoTicket = km * 0.21;
console.log(prezzoTicket);

//Calcolare sconto in base all'età dell'utente
if (eta < 18){
    var sconto = (prezzoTicket * 20) / 100;
} else if (eta > 65){
    var sconto = (prezzoTicket * 40)/ 100;
} else {
  var sconto = 0;
}
console.log(sconto);

// Sottrarre sconto al prezzo del biglietto
var prezzoScontato = prezzoTicket - sconto;
var prezzoFinale = (Math.round( prezzoScontato * 100 ) / 100).toFixed(2);
console.log(prezzoFinale)

//Visualizzare prezzo finale biglietto
if (eta < 18){
    document.getElementById("title").innerHTML = "Avresti dovuto pagare: " + prezzoTicket +" Ma grazie alla tua minore età, pagherai: " + prezzoFinale; 
} else if (eta > 65){
    document.getElementById("title").innerHTML = "Avresti dovuto pagare: " + prezzoTicket +" Ma grazie alla tua vecchiaia, pagherai: " + prezzoFinale; 
} else {
  document.getElementById("title").innerHTML = "Mi dispiace, ma la tua età non ti permette di avere nessuno sconto, dovrai pagare: " + prezzoTicket;
}
