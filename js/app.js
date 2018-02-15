

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
      reject(Error(" Error"));
    }

    req.send()

  })
  
}


var data;

// var number= 0,
// arr = [1,2,3,4,5,6,10,13,14,15,20,22,23,24,30,44,78,84,85,86,87];
//   for (var i = 0; i<arr.length; i++){
//     number = arr[i];
//   }
// getData('https://swapi.co/api/people/'+number +'')
getData('https://swapi.co/api/people/1')
.then((respuesta) => {
  data = JSON.parse(respuesta)
}) 
.then(() => {
  
  var images = document.getElementById('1');
  // var images = document.getElementById(number);
  images.addEventListener("click", function(){
  document.getElementById("exampleModalLongTitle").innerHTML = data.name;  
  document.getElementById("gender").innerHTML = data.gender;
  document.getElementById("home-world").innerHTML = data.gender;
  document.getElementById("birth-year").innerHTML = data.homeworld;
  document.getElementById("height").innerHTML = data.birth_year;
  document.getElementById("mass").innerHTML = data.height;
  document.getElementById("eye").innerHTML = data.mass;
  document.getElementById("hair").innerHTML = data.eye_color;
  document.getElementById("skin").innerHTML = data.skin_color;
  document.getElementById("films").innerHTML = data.films;
});
})
  

