function merge(arr,arr1){
	var newArr = [];

	while (arr.length !== 0 && arr1.length !== 0){
		if(arr[0] < arr1[0]){
			newArr.push(arr.shift());
		}else{
			newArr.push(arr1.shift());
		}
	}

	while (arr1.length){
		newArr.push(arr1.shift());
	}

	while (arr.length){
		newArr.push(arr.shift());
	}
	return newArr;
}


function split(wholeArray) {
	if(wholeArray.length === 1){
		return wholeArray;
	}
	var arr = wholeArray;

	var length = wholeArray.length;
	var half = Math.floor(length/2);
    var firstHalf = wholeArray.slice(0,half);
    var secondHalf = wholeArray.slice(half, length);

    return [firstHalf, secondHalf];
}

function mergeSort(array){
	if(array.length < 2){
		return array;
	}
	var splitArray = split(array);
	var left = mergeSort(splitArray[0]);
	var right = mergeSort(splitArray[1]);
	
	return merge(left,right);
}