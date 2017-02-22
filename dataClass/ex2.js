function binarySearch(array, value){
  low = 0;
  high = array.length - 1;
  while (low <= high){
    mid = Math.round((low + high) / 2);
    if( array[mid] > value ){
      high = mid-1;
    }
    else if ( array[mid] < value ){
      low = mid+1;
    }
    else
      return mid;
  }
  return -1;
}
var arr = [1, 2, 3, 4, 5];
var result = binarySearch(arr, 1);
console.log(arr[result]);
