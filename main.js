var hw = document.getElementsByTagName('h1');
hw.addEventListener('click', function(event){
  event.target.css({'background-color': 'green', 'color': 'red'});
});
