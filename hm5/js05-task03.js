function loadCities() {
  var xhr = new XMLHttpRequest();
  var promise = new Promise((resolve, reject) => {
      var url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
      xhr.open('GET', url, false);
      xhr.send()
      if(xhr.status != 200){
        reject ( xhr.status + ':' + xhr.statusText );
      } else {
        resolve() 
      }
  });

  promise.then(result => {
      var cities = JSON.parse(xhr.responseText);
      makeArr(cities);},
      error => {
      alert(error); 
    }
  );
}

function makeArr(cities) {
    var citiesArr = [];
    cities.forEach(function(city) {
      citiesArr.push(city.name);
    });
    filterCity(citiesArr);
}

function filterCity(citiesArr){
  inputFilter.addEventListener('input', function(){
      showCity(this.value, citiesArr)
 });  
}

function showCity(inputValue, citiesArr){
    removeChildren(cityList)
    for (var i = 0; i < citiesArr.length; i++) {
      if(~citiesArr[i].indexOf(inputValue)) {
              var li = cityList.appendChild(document.createElement('li'));
              li.innerHTML = citiesArr[i];
      }
    }
}

function removeChildren(elem) {
  while (elem.lastChild) {
    elem.removeChild(elem.lastChild);
  }
}

