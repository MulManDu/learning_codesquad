var addressBook = {
  "name" : [],
  "address" : [],
  "init" : init,
  "store" : store,
  "search" : search
}

function init(){
  for(let i = 0; i < this.name.length; i++){
    this.name[i] = "";
    this.address[i] = "";
  }
}

function store(name, address){
  let addIndex = this.name.length;
  this.name[addIndex] = name;
  this.address[addIndex] = address;
}

function search(name){
  let addressList = [name];
  let str = "";
  for(let i = 0; i < this.name.length; i++){
    if(this.name[i] !== name) continue;
    addValue(addressList, this.address[i]);
  }
  str = addressList.join("\n");
  return str;
}

function addValue(array, value){
  let length = array.length;
  array[length] = value;
}


addressBook.init(addressBook);
addressBook.store("이채윤", "부산 해운대구");
addressBook.store("도깨비", "캐나다 벤쿠버");
addressBook.store("지은탁", "캐나다 벤쿠버");
addressBook.store("저승사자", "덕성여대 종로캠퍼스 운형궁");
addressBook.store("써니", "서울시 BBQ치킨구");
addressBook.store("이채윤", "서울시 서초구");
var result = addressBook.search("이채윤");
console.log(result);


/* 2번 과제: 랜덤 이름 생성기 */
function genName(){
  
}
