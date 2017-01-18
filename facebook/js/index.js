/*
  피드백
  1 캐시에 담아둔다. 변수에 담아둔다.
  2 이벤트 객체 사용하라. evt, target
  - 이벤트 evt 객체는 가장 마지막 선택한 것을 가르키는 성질이 있다.
  - setArrtirbute("style","background-color:red")
  - 중복된 것은 변수에 담아두자. 변수값이 없으면 디버깅하기 어렵다.
  - hmtl 바뀌면 작동이 안되는 리스크가 있다. nextElementSibling. 정확한 의도가 드러나지 않는다.
  - 해당 element의 스타일속성, 값을 만들어주는 함수 만들기
    function setCSS(ele, styleName, value){
      ele.style[styleName] = value;
      //ele.style.backgroundColor = "red";
    }
    setCSS(ele, {
    "opacity":0.5 , "display":"none"
    })
    function setCSS(ele, styleObj){
      for in 문
    }

  3 범용함수.코드를 계속 범용성 있게. 함수인자를 많이 써라.
  - https://en.wikipedia.org/wiki/Holy_Grail_(web_design)
  - best practice
*/

var errorMSG = "글자수(20)를 초과했습니다!";
var max = 20;
var black_button = document.querySelector("#black_button");
var white_button = document.querySelector("#white_button");

black_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "black";
});
white_button.addEventListener("click",function(){
  document.querySelector("body").style.backgroundColor = "#e9ebee";
});

//var map = document.getElementById("map");
//var camera = document.getElementById("camera");
var cancel = document.getElementById("cancel");
var writeBox = document.getElementById("writebox");
//var writeTools = document.getElementById("writeTools");

function setCSS(ele, styleObj){
  for(var styleName in styleObj){
    ele.style[styleName] = styleObj[styleName];
  }
}

var eventAction = {
  "hide" : function(evt){
    var target = evt.target;
    var writeBox = target.parentElement;
    var map = writeBox.querySelector("#map");
    var camera = writeBox.querySelector("#camera");
    var cancel = writeBox.querySelector("#cancel")
    map.classList.add("hidden");
    camera.classList.add("hidden");
    cancel.classList.add("showing");
  },
  "show" : function(evt){
    var target = evt.target;
    var writeBox = target.parentElement;
    var map = writeBox.querySelector("#map");
    var camera = writeBox.querySelector("#camera");
    var cancel = writeBox.querySelector("#cancel")
    map.classList.remove("hidden");
    camera.classList.remove("hidden");
    cancel.classList.add("showing");
  }
}

writeBox.addEventListener("click",eventAction.hide);
cancel.addEventListener("click",eventAction.show);





function checkStringMax(string){
    if(string.length >= max) return true;
    return false;
}

writebox.addEventListener("keydown",function(){
  if(checkStringMax(writebox.value)){
    alert(errorMSG);
  }
});
