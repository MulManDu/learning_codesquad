
/*
6. 정렬하기 (함수)
  6-1. 리스트 노드 값들을 알아내기. ol 태그 자식 노드들을 listArray 배열에 저장한다. - querySelector()
  6-2. index:0 부터 index .lenght-1 까지 i를 1씩 증가 반복.
  6-5. i+1 부터 .lenght-1 까지 1씩 증가.
  6-6. 만약 listArray[i]가 listArray[j] 보다 크다면,
  6-7. temp = listArray[i];
  6-7. listArray[i] = listArray[j]
  6-8. listArray[j] = temp;

6. 정렬 sort
  1. 맨 앞 리스트 노드와 바로 옆 노드와 비교해서, 뒷놈이 짧다면 자리 변경
  innerHTML
*/
var body = document.querySelector("body");
var ol = document.querySelector("ol");
var listArray = ol.querySelectorAll("li");
var message = body.querySelector(".message");

function sort(){
  listArray = ol.querySelectorAll("li");
  for(var i = 0; i < listArray.length; i++){
    for(var j = i+1; j< listArray.length; j++){
      if(listArray[i].innerHTML.length > listArray[j].innerHTML.length){
        var temp="";
        temp = listArray[i].innerHTML;
        listArray[i].innerHTML = listArray[j].innerHTML;
        listArray[j].innerHTML = temp;
      }
    }
  }
}


function addTask(addingTask) {
  var node = document.createElement("LI");
  node.innerHTML = addingTask;
  ol.appendChild(node);
}
function removeTask(removingNum){
  ol.removeChild(listArray[removingNum - 1]);
}
function blinkMessage(errorMessage){
    var message_node = document.createElement("P");
    message_node.innerHTML = errorMessage;
    body.querySelector(".message").appendChild(message_node);
    message_node.style.color = 'red';
    setTimeout(removeMessage, 3000);
}
function removeMessage(){
  var node = body.querySelector(".message p");
  message.removeChild(node);
}
