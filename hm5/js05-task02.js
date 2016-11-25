
function loadCities() {
      var xhr = new XMLHttpRequest();

  let promise = new Promise((resolve, reject) => {
      var url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
      xhr.open('GET', url, false);
      xhr.send()
      
      if(xhr.status != 200){
        reject ( xhr.status + ':' + xhr.statusText );
      } else {
        resolve("result") 
      }
  });

  promise
    .then(result => {
    
      var cities = JSON.parse(xhr.responseText);
      showCities(cities);},
      error => {
      alert("Rejected: " + error); 
    }
  );
}

function showCities(cities) {

    var citiesArr = [];

    cities.forEach(function(city) {
      citiesArr.push(city.name);
    });

    citiesArr.sort();
    for (var i = 0; i < citiesArr.length; i++) {
      var li = cityList.appendChild(document.createElement('li'));
      li.innerHTML = citiesArr[i];
    }
}
