var url = 'http://api.icndb.com/jokes/random';
var button = document.querySelector('#get-joke');
var paragraph = document.querySelector('#joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

paragraph.innerHTML = getJoke();

button.addEventListener('click', function(){
  getJoke();
});



