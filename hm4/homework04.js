
// *************** START TASK 1 ********************************

function load() {

	var elContainer = "container";
	var addElement = "p";
	var elementInner = "<h1>Hello world!</h1>";
	prepend(elContainer, addElement, elementInner);
}

function prepend(container, newElement, newInner) {
	var myContainer = document.getElementById(container);
	var first = myContainer.firstElementChild;
   	var newEl = document.createElement(newElement);
        newEl.innerHTML = newInner;
	var insEl = myContainer.insertBefore(newEl, first);

}
// *************** END TASK 1 ********************************

// *************** START TASK 2 ********************************

function load2() {

	var elContainer = "container";
	deleteTextNodes(elContainer);
}

function deleteTextNodes(elementTxt) {
		var el = document.getElementById(elementTxt);
		var child = el.childNodes;
		for (var i = 0; i < child.length; i++){
			if(child[i].nodeType == 3){
				el.removeChild(child[i]);
		}
		}
}

// *************** END TASK 2 ********************************

// *************** START TASK 3 *******************************


function load3() {

	var elContainer = "container2";
	deepDeleteTextNodes(elContainer);
}

function deepDeleteTextNodes(elementTxt) {
		
	var el = document.getElementById(elementTxt);
	delNode(el, true)
			
	function getNodes(parentEl) {
		var childs = parentEl.childNodes;
		for (var i = 0; i < childs.length; i++){
			var deepElements = childs[i].childNodes;
			if (deepElements.length > 0) {  					
				var newParentEl = childs[i];			
				delNode(newParentEl, true)	
			}

			else {
					delNode(parentEl)
			}				
		}
	}

	function delNode(par, deepCheck) {
		var parChilds = par.childNodes;
		for (var s = 0; s < parChilds.length; s++){
			if (parChilds[s].nodeType == 3){
				par.removeChild(parChilds[s]);
			}	
		}

		if (deepCheck) {
			getNodes(par)
		}
	}
}
							

								