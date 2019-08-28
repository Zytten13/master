let counter = 0;

var elem = document.getElementById('gatito');
if(elem){
  elem.addEventListener('click', false);
}
elem.addEventListener('click', function(){
  counter++;
  document.getElementById('clicks').innerHTML = counter;
}, false);
