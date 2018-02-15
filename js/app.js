

function getData(url) {

  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    }

    req.onerror = function () {
      reject(Error("Network Error"));
    }

    req.send()

  })
  
}
var data;
getData('https://swapi.co/api/people/1')
.then((respuesta) => {
  data = JSON.parse(respuesta)
})
.then(() => {
  console.log(data.name);
  console.log(data.gender);
  console.log(data.homeworld);
  console.log(data.birth_year);
  console.log(data.height);
  console.log(data.mass);
  console.log(data.eye_color);
  console.log(data.hair_color);
  console.log(data.skin_color);
  console.log(data.films);
})

