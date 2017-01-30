var addressBook = {
  "name" : [],
  "address" : [],
}

function init(obj){
  for(var i = 0; i < obj.name.length; i++){
    obj.name[i] = "";
    obj.address[i] = "";
  }
  return obj;
}

function store(name, address, obj){
  var addIndex = obj.name.length;
  obj.name[addIndex] = name;
  obj.address[addIndex] = address;
  return obj;
}

function search(name, obj){
  var addressList = [name];
  var str = "";
  for(var i = 0; i < obj.name.length; i++){
    if(obj.name[i] !== name) continue;
    addValue(addressList, obj.address[i]);
  }
  str = addressList.join("\n");
  return str;
}

function addValue(array, value){
  var arrayString = "";
  var length = array.length;
  array[length] = value;
  arrayString = array.join(" ");
  return arrayString;
}

init(addressBook);
store("이채윤", "부산 해운대구", addressBook);
store("물만두", "서울시 서초구", addressBook);
store("도깨비", "캐나다 벤쿠버", addressBook);
store("지은탁", "캐나다 벤쿠버", addressBook);
store("저승사자", "덕성여대 종로캠퍼스 운형궁", addressBook);
store("써니", "서울시 BBQ치킨구", addressBook);
store("이채윤", "서울시 서초구", addressBook);
var result = search("이채윤", addressBook);
console.log(result);
