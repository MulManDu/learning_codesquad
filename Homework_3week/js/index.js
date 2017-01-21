const title = "title";
const body = "body";
var postUrls = {
  "position" : "http://jsonplaceholder.typicode.com/posts/1",
  "friend" : "http://jsonplaceholder.typicode.com/posts/2",
  "theme" : "http://jsonplaceholder.typicode.com/posts/3",
  "news" : "http://jsonplaceholder.typicode.com/posts/4"
}

makeEvtForTabs();

function makeEvtForTabs(){
  var Tabs = document.querySelectorAll("nav > .tab");
  var header = document.querySelector(".mainHeader");
  for(var i = 0; i < Tabs.length; i++){
      Tabs[i].addEventListener("click", getEffect);
  }
  header.addEventListener("click", function(evt){
    uncolorTabs(Tabs);
    removePost();
  });
}

function getEffect(evt){
  var Tabs = document.querySelectorAll("nav > .tab");
  var targetUrl = "";
  var target = evt.target;
  if(target.tagName === "SPAN") target = target.parentNode;
  uncolorTabs(Tabs);
  colorTab(target);
  removePost();
  targetUrl = postUrls[target.id];
  ajaxByUrl(targetUrl, reqPost);
}

function uncolorTabs(Tabs){
  for(var i = 0; i < Tabs.length; i++){
    Tabs[i].classList.remove("selectedTab");
  }
}

function colorTab(target){
  target.classList.add("selectedTab");
}

function removePost(){
  var titleNode = document.querySelector(".myName");
  var bodyNode = document.querySelector(".myDesc");
  titleNode.innerHTML="";
  bodyNode.innerHTML="";
}

/* ajax */
function ajaxByUrl(url, fnc){
  var xhrObj = new XMLHttpRequest();
  xhrObj.addEventListener("load", fnc);
  xhrObj.open("GET", url);
  xhrObj.send();
}

/* ajax 콜백함수 */
function reqPost(evt) {
  var PostObj = {};
  var target = evt.target;
  var response = target.response;
  var json = JSON.parse(response);
  PostObj[title] = json[title];
  PostObj[body] = json[body];
  writePost(PostObj)
}

function writePost(PostObj){
  var titleNode = document.querySelector(".myName");
  var bodyNode = document.querySelector(".myDesc");
  titleNode.insertAdjacentHTML("beforeend",PostObj[title]);
  bodyNode.insertAdjacentHTML("beforeend",PostObj[body]);
}
