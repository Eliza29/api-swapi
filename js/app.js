window.onload = () => {
debugger;
  function getData(event) {
    event.preventDefault();
    let idImg = event.target.id;
    let url = `https://swapi.co/api/people/${idImg}`;
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = addDataCharacters;
    req.onerror = handleError;
    req.send();
  }

  function handleError() {
    console.log('se ha producido un error');
  }

  function addDataCharacters() {
    const data = JSON.parse(this.responseText);
    
  }

  var images = $('#people-container figure img');

  images = [...images];
  images.forEach(img => {
    img.addEventListener('click', getData);
  });

  // images.addEventListener("click", function () {
  //   document.getElementById("exampleModalLongTitle").innerHTML = data.name;
  //   document.getElementById("gender").innerHTML = data.gender;
  //   document.getElementById("home-world").innerHTML = data.gender;
  //   document.getElementById("birth-year").innerHTML = data.homeworld;
  //   document.getElementById("height").innerHTML = data.birth_year;
  //   document.getElementById("mass").innerHTML = data.height;
  //   document.getElementById("eye").innerHTML = data.mass;
  //   document.getElementById("hair").innerHTML = data.eye_color;
  //   document.getElementById("skin").innerHTML = data.skin_color;
  //   document.getElementById("films").innerHTML = data.films;
  // });
};