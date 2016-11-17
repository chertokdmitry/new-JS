
var myArray = [1, 2, 3, 4, 5, 6];


function arrayForEach(someArray) {
	for (var i=0; i < someArray.length; i++) {
		console.log(someArray[i]);
	}
}

function arrayFilter(someArray, myFilter, filterNumber) {
	var newArray = [];
	for (var i=0; i < someArray.length; i++) {
		switch(myFilter){
			case 'greater': if(someArray[i]>filterNumber) {
				newArray.push(someArray[i]);}break;
			case 'less': if(someArray[i]<filterNumber) {
				newArray.push(someArray[i]);}break;
			case 'equal':if(someArray[i]==filterNumber) {
				newArray.push(someArray[i]);}break;
		}
	}
	return newArray;
}

function arrayMap(someArray){
	var newArrayMap = [];
	for (var i=0; i < someArray.length; i++) {
		var newItem = square (someArray[i]);
			newArrayMap.push(newItem);
		}

		function square(item) {
				return item*item;
				}
	return newArrayMap;
}	

function arraySlice(someArray, sliceStart, sliceEnd){
	var newArraySlice = [],
	first, 
	end;

	if (sliceEnd === undefined)  { end = someArray.length;}
		else if (sliceEnd >= 0) { end = sliceEnd;}
		else { end = someArray.length + sliceEnd;}

	if (sliceStart >= 0){ first=sliceStart}
		else { first = someArray.length + sliceStart;}

	for (var i=first; i < end; i++) {
			newArraySlice.push(someArray[i]);
		}


	return newArraySlice;
}

function arrayReduce(someArray){

	var sum=0;
	for (var i=0; i < someArray.length; i++) {
		var sum = arraySum (sum, someArray[i]);
		}

		function arraySum(totalSum, current) {
				return totalSum + current;
				}
	return sum;
}

function arraySplice(someArray, start, deleteCount){

	if (start > 0 && deleteCount !=0) {
		var deleteEnd = someArray.length - deleteCount;
		for (var i = start + deleteCount; i < someArray.length; i++) {
			someArray[start] = someArray[i];
			start++;
			}
		for (var i = someArray.length - deleteCount; i < someArray.length; i++) {
			delete someArray[deleteEnd];
			deleteEnd++;
			}
	}	

	else if (start < 0 && deleteCount !=0) {
		var replaceEnd = someArray.length - deleteCount;
		var replaceStart = someArray.length + start;
		console.log(replaceStart + ' ' + replaceEnd);
		for (var i = replaceStart; i < someArray.length; i++) {
			someArray[i] = someArray[replaceEnd];
			replaceEnd++;
			}
		for (var i = someArray.length - deleteCount; i < someArray.length; i++) {
			delete someArray[i];
			}
	}	

	if (arguments[3]) {
		for (var i=0; i < arguments.length - 3; i++){
			someArray.push(arguments[i+3]);
			}
		}
	return someArray;
}


//console.log(arrayForEach(myArray));

//console.log(arrayFilter(myArray, 'greater', 4));

//console.log(arrayMap(myArray));

//console.log(arrayMap(myArray));

//console.log(arraySlice(myArray, 2, 5));

//console.log(arrayReduce(myArray));

console.log(arraySplice(myArray, -2, 1, 100, 200));