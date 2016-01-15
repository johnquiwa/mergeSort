function bubbleSort(array){

	for (var i = 0; i < array.length; i++) { //passes
		for(var j = 0; j < array.length; j ++){ //bubbling
			if (!inOrder(array,j)) swap(array, j);
		}
	};

	return array;
}

function inOrder (array,index){
	if (index === array.length - 1) return true;
	return array[index] < array[index + 1];
}

function swap (array,index){
	var oldLeft = array[index];
	array[index] = array[index+1];
	array[index + 1] = oldLeft;
}
// var counter = 0;
// var length = array.length

// var compareFunction = function(array){
// 	for (var i = 0; i < length - 1; i++) {
// 		var oldLeft = array[i];
// 		var oldRight = array[i + 1];
// 		if(oldLeft > oldRight){
// 			array[i] = oldRight;
// 			array[i + 1] = oldLeft;
// 		}
// 	};
// 	length --;
// 	if (length !== 1){
// 		compareFunction(array);
// 	}
// 	return array;
// }
// 	if(array.length === 0 || array.length === 1){
// 		return array;
// 	}
// 	return compareFunction(array);
}
