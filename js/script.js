/**
 Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi
 - titolo e
 - testo.
 */
//inizializzo la item e le aggancio tutte
const items = document.getElementsByClassName('item');

//contatore
let contatore = 0 //lo zero si riferisce al primo item

//inizializzo le classi next e prev
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log('items', items); 
console.log('contatore', contatore);
console.log('item in base al contatore', items[contatore]);

//uso l'evento click con la function
prev.addEventListener('click',function(){
  contatore--
  if(contatore < 0) contatore = items.length -1;
})

next.addEventListener('click', function(){
  contatore++
  if(contatore > items.length) contatore = 0;
})


