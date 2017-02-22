function swap(array, i){
  var temp = array[i];
  array[i] = array[i+1];
  array[i+1] = temp;
}

function bubbleSort(arr){
  var count = arr.length;
  do{
    for(var i=0; i<arr.length-1; i++){
      if(arr[i] > arr[i+1]) swap(arr, i);
    }
    count--;
    console.log(arr.join(','));
  }while(count != 0 );
}

var array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46];
bubbleSort(array);
