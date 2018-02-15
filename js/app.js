window.onload = () => {
  let idImg;
  function getData(event) {
    event.preventDefault();
    idImg = event.target.id;
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
    console.log(data);
    $('#exampleModalLongTitle').html(data.name);
    $('#gender').html(data.gender);
    // $('#home-world').html(data.homeworld);
    $('#birth-year').html(data.birth_year);
    $('#height').html(data.height);
    $('#mass').html(data.mass);
    $('#eye').html(data.eye_color);
    $('#hair').html(data.hair_color);
    $('#skin').html(data.skin_color);
    $('#insert-img').attr('src', 'assets/images/' + idImg + '.png');


    // obteniendo datos de homeworld 
    let newRequest = new XMLHttpRequest();
    newRequest.open('GET', data.homeworld);
    newRequest.onload = getExtraData;
    newRequest.onerror = handleError;
    newRequest.send();

    function getExtraData() {
      const dataHome = JSON.parse(this.responseText);
      const resultHome = dataHome.name;
      console.log(resultHome);
      $('#home-world').html(resultHome);

    }
    
  }

  var images = $('#people-container figure img');

  images = [...images];
  images.forEach(img => {
    img.addEventListener('click', getData);
  });

  // images.addEventListener("click", function () {
  //   
  // });
};