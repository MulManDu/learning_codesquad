var PostObj = {};

function makeEvtNav(){
  var nav = document.querySelector("nav");
  nav.addEventListener("click", eventTab);
}

function eventTab(evt){
  var target = evt.target;
  //var div = document.querySelector()
  if(target.tagName === "SPAN") target = target.parentNode;
  if(target.tagName !== "DIV") return;
  getEffect(target);
}

function getEffect(target){
  var postUrls = {
    "position" : "http://jsonplaceholder.typicode.com/posts/1",
    "friend" : "http://jsonplaceholder.typicode.com/posts/2",
    "theme" : "http://jsonplaceholder.typicode.com/posts/3",
    "news" : "http://jsonplaceholder.typicode.com/posts/4"
  }

  var targetUrl = "";
  var Tabs = document.querySelectorAll("nav > .tab");
  uncolorTabs(Tabs);
  colorTab(target.classList);
  removePost2();
  //removePost();
  targetUrl = postUrls[target.id];
  ajaxByUrl(targetUrl, reqPost);
}


function colorTab(classList){
  classList.add("selectedTab");
}

function removePost2(){
  var section = document.querySelector("#my_position");
  section.innerHTML="";
}

function uncolorTabs(Tabs){
  var selectedTab = document.querySelector(".selectedTab");
  if(selectedTab !== null) selectedTab.classList.remove("selectedTab");
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
  //var PostObj = {};
  var target = evt.target;
  var response = target.response;
  var json = JSON.parse(response);
  PostObj["title"] = json["title"];
  PostObj["body"] = json["body"];
  replacePost2(PostObj);
  //writePost(PostObj);
}

function writePost(PostObj){
  var postNode = document.querySelectorAll(".eleDisplayShow > ul > li > div");
  postNode[0].innerHTML = PostObj["title"];
  postNode[1].innerHTML = PostObj["body"];
}

document.addEventListener("DOMContentLoaded", function(){
  makeEvtNav();
});

/* ------------------------------------------*/
/* --------------예시코드----------------------*/
/* ------------------------------------------*/

function replacePost(PostObj){
  var template = [
    "<ul>",
      "<li>",
        "<div>","{{title}}","</div>",
        "<div>","{{body}}","</div>",
        "</li>",
      "</ul>"
  ];
  var section = document.querySelector("#my_position");
  var templateString = template.join(" ")
    .replace("{{title}}", PostObj.title)
    .replace("{{body}}", PostObj.body);
  section.innerHTML = templateString;
}


function replacePost2(PostObj){
  var section = document.querySelector("#my_position");
  var list = document.querySelector("#listTemplate");
  var str = list.innerHTML;
  str = str.replace("{{title}}", PostObj.title)
           .replace("{{body}}", PostObj.body);
  section.innerHTML = str;
}
