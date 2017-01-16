
/*
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
*/

/*
  2. 만약 remove 일 경우,
  3. 제거할 일 숫자를 Num_of_removingTask 에 저장
  4. 숫자 중에 일치하는 것이 없으면,
  5. 붉은색 에러 문자 추가. 3초 뒤 삭제 (함수) - setTimeout
  6. 일치한다면, 해당 일을 삭제. - removeChild()
 */
function addTask(addingText, addingTag) {
  node = document.createElement(addingTag);
  text = document.createTextNode(addingText);
  node.appendChild(text);
  document.querySelector("ol").appendChild(node);
}
function removeTask(removingNum){
  ol = document.querySelector("ol");
  list = ol.querySelectorAll("li");
  ol.removeChild(list[removingNum - 1]);
}
function spakleMessage(message){
    addTask("에러에러에러","li");
    setTimeout(removeTask(ol.querySelectorAll("li").length),1000);
}
 /*
  * 1. executeItemNode 함수를 완성하세요
  * 이 함수의 actionType 매개변수는 'add' 또는 'remove'를 받습니다.  add를 받으면 추가하고, remove를 받으면 일을 삭제합니다.
  * todoORNumber 는 add일때는 새로운 일을 문자열로 받고, remove일때는 숫자를 받습니다.
  * 할일 목록은 할일의 문자열 길이 순으로 정렬됩니다. 목록이 추가될때마다 바로 정렬되야 합니다.(가장 긴 할일 내용이 뒤로 가야함)
  * 삭제하려는 경우 num과 일치하는 item번호가 없다면 'message' 영역에서 적당한 메시지를 붉은색으로 표시됐다 3초뒤 사라집니다.
  * 추가하려는 경우 이미 같은일이 있다면 message영역에서 적당한 메시지를 붉은색으로 표시했다 3초뒤 사라집니다.
  * 함수를 여러개로 나눠도 상관없습니다.
  * 참고로 1번을 풀기 위해서는 string조작과 setTimeout이라는 것을 공부해야 할 수도 있습니다.
  *
  * 2. 좀더 사용하기 쉬운 웹화면이 되도록, css에 다양한 스타일을 적용하면서 꾸며봅니다.
  *
  * 3. 아래 event 관련 코드를 학습해보고, 어떤 코드를 의미하는지 최대한 자세히 주석으로 설명을 넣어보세요.
  */

 function doSomething(actionType, todoORnumber)  {

 }


 /*
  * 3번문제는 여기에 자세히 설명을 넣으시면 됩니다.
  *
  *
  *
  */

 var controller = document.querySelector(".controller");

 controller.addEventListener("click", function(evt) {
   var btn = evt.target;
   if(btn.tagName !== "BUTTON") return;
   var inputValue = btn.previousElementSibling.value;
   var actionType = btn.className;
   doSomething(actionType, inputValue);
 });
