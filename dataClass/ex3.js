function addFirst(list, value){
  var newNode = { item : value, next: null };
  newNode.next = list.head.next;
  list.head.next = newNode;
  list.length ++;
}
function get(list, index){
  var node = list.head;
  for(var i = 0; i < index; i++){
    node = node.next;
  }
  return node.item;
}

var list = {
  head: { item: null, next: null },
  length: 0
};


for(var k = 0; k < 10; k++){
  addFirst(list, k);
}

console.log(list);

for(var j = 0; j < 11; j++){
  console.log(get(list, j));
};
