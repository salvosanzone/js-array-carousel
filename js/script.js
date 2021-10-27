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
  items[contatore].classList.remove('active');
  contatore--;
  if(contatore < 0) contatore = items.length - 1;
  items[contatore].classList.add('active');
});

next.addEventListener('click',function(){
  items[contatore].classList.remove('active');
  contatore++;
  if(contatore > items.length - 1) contatore = 0;
  items[contatore].classList.add('active');
});


//costruiamo lo slider-left con js
//prima ho richiamato la classe item con le relative immagini adesso non ho piu nulla quindi definisco una array
const images = ['img src="img/01.jpg','img src="img/02.jpg','img src="img/03.jpg','img src="img/04.jpg','img src="img/05.jpg']


//aggancio e inizializzo la class dove andrò a costruire i miei item
const sliderLeft = document.querySelector('.slider-left')

//effetto un ciclo per costruire i 5 item
for(let = 0; let<images.length; i++){
  //costruisco un elemento div
  const item = document.createElement('div');
  //do una classe a questo div
  item.className = 'item'
  
  if(i === contatore){
    item.classList.add('active');
  }
  item.innerHTML = `<img src="${images[i]}" alt="">`;
  sliderLeft.append(item);
}