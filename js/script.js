// Scrivo un programma che stampi 100 numeri
// Per i numeri che sono sia multipli di 3 che di 5 stampo FizzBuzz
// Per i multipli di 3 stampo Fizz al posto del numero
// Per i multipli di 5 stampo Buzz al posto del numero

alert('FizzBuzzquiz');

for(var i=0; i<=100; i++){
  var contenuto = document.getElementById('listaNumeri').innerHTML;
  var testo = '<li>'+ i+ '</li>';

  if(i % 5 == 0 && i % 3 == 0){
  testo = '<li>FizzBuzz</li>';
  console.log(i, 'FizzBuzz');
  }

  else if(i % 3 == 0){
  testo = '<li>Fizz</li>';
  console.log(i, 'Fizz');
  }

  else if (i % 5 == 0){
  testo = '<li>Buzz</li>';
  console.log(i, 'Buzz');
  }

  document.getElementById('listaNumeri').innerHTML = contenuto + testo;
}