var array = ['a','b','c','d','e','f'];

function printReverse(arr){
  for(let i = arr.length-1; i >= 0; i--){
    console.log(arr[i]);
  }
}

function reverseArray(arr){
  var maxIndex = arr.length - 1;
  for(let i=0; i < maxIndex/2; i++){
    let temp = arr[i];
    arr[i] = arr[maxIndex - i];
    arr[maxIndex - i] = temp;
  }
  console.log(arr.join(' '));
}

printReverse(array);
reverseArray(array);
