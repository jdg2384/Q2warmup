var hw = document.getElementsByTagName('h1');
hw.addEventListener('click', function(event){
  event.target.style({'background-color': 'green', 'color': 'red'});
});
