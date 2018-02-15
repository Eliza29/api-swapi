

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
})
