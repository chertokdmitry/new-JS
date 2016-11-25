
function timer(time) {
	return new Promise(function(resolve, reject) {
   		setTimeout(() => { resolve(time/1000 + " sec have passed!"); }, time);
	});
}

timer(3000).then((result) => console.log(result));


