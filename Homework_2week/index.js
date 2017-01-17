var controller = document.querySelector(".controller");

controller.addEventListener("click", function(evt) {
  var btn = evt.target;
  if(btn.tagName !== "BUTTON") return;
  var inputValue = btn.previousElementSibling.value;
  var actionType = btn.className;
  doSomething(actionType, inputValue);
});

function doSomething(actionType, todoORnumber)  {
  switch(actionType){
    case "add" :
      addTask(todoORnumber);
      sort();
      break;
    case "remove" :
      removeTask(todoORnumber);
      break;
  }
}
function sort(){
  var ol = document.querySelector("ol");
  var listArray = ol.querySelectorAll("li");
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
  var ol = document.querySelector("ol");
  var node = document.createElement("LI");
  var listArray = ol.querySelectorAll("li");
  var judge = isIn(addingTask);
  if(!(judge)){
    node.innerHTML = addingTask;
    ol.appendChild(node);
  }
}
function isIn(task){
  var ol = document.querySelector("ol");
  var listArray = ol.querySelectorAll("li");
  for(var i = 0; i < listArray.length; i++){
    if(listArray[i].innerHTML === task){
      blinkMessage("이미 존재하는 일입니다.")
      return true;
    }
  }
  return false;

}
function removeTask(removingNum){
  var ol = document.querySelector("ol");
  var listArray = ol.querySelectorAll("li");
  if(removingNum >= listArray.length){
    blinkMessage("해당 숫자가 존재하지 않습니다.");
  }
  ol.removeChild(listArray[removingNum - 1]);
}

function blinkMessage(errorMessage){
    var body = document.querySelector("body");
    var message_node = document.createElement("P");
    message_node.innerHTML = errorMessage;
    body.querySelector(".message").appendChild(message_node);
    message_node.style.color = 'red';
    setTimeout(removeMessage, 3000);
}
function removeMessage(){
  var body = document.querySelector("body");
  var node = body.querySelector(".message p");
  var message = body.querySelector(".message");
  message.removeChild(node);
}



/* 설계 중 낙서장

[ executeItemNode(actionType) 함수 ]
  1. actionType 이 add 인지 remvoe 인지 검사.
  2. 둘 다 아닐 경우, 콘솔에러 출력.

  3. 만약 add 일 경우,
    4. 새로운 일(문자열)을 addingTask 에 저장
    5. 맨 뒤에 새로운 일을 추가하기.
      5-1. ol 노드값을 ol에 저장한다.
      5-2. li 엘리먼트를 생성해서, node 에 저장한다. - document.createElement("LI")
      5-3. text 노드를 생성해서, textarea에 저장한다. 인자로 addingTask 를 전달한다. - document.createTextNode("Water")
      5-4. node 에 text 노드를 추가한다. - node.appendChild()
      5-2. 리스트에 새로운 일을 추가한다. -ol.appendChild(node)
    6. 정렬하기 (함수)
      6-1. 리스트 노드 값들을 알아내기. ol 태그 자식 노드들을 list_nodes 배열에 저장한다. - querySelector()
      6-2. index:0 부터 index .lenght-1 까지 i를 1씩 증가 반복.
      6-5. i+1 부터 .lenght-1 까지 1씩 증가.
      6-6. 만약 list_nodes[i]가 list_nodes[j] 보다 크다면,
      6-7. temp = list_nodes[i];
      6-7. list_nodes[i] = list_nodes[j]
      6-8. list_nodes[j] = temp;

  3. 만약 remove 일 경우,
    4. 제거할 일 숫자를 Num_of_removingTask 에 저장
    5. 숫자 중에 일치하는 것이 없으면,
    6. 붉은색 에러 문자 추가. 3초 뒤 삭제 (함수) - setTimeout
    7. 일치한다면, 해당 일을 삭제. - removeChild()
*/
