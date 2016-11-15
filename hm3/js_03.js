
let myArray = [1, 2, 3, 4, 5, 6];

function forEach (someArray) {
var forEachItems = someArray.forEach(function(item, i, arr) {
  arr.push(item+item);
});
}

function filter (someArray) {

var filterArr = someArray.filter(function(number) {
  return number > 4;
});
return filterArr;
}

function square (someArray) {

var squareArray = someArray.map(function(item) {
  return item*item;
});
return squareArray;
}

forEach(myArray);

console.log(myArray);
console.log(filter(myArray));
console.log(square(myArray));