function reqListener (evt) {
  var target = evt.target;
  //console.log(target);
  var response = target.response;
  var json = JSON.parse(response);
  var ownerObj = json["owner"];

  for(var key in ownerObj){
    var dl = document.querySelector(".github-list");
    var keyNode = document.createElement("DT");
    var valueNode = document.createElement("DD");
    keyNode.innerHTML = key;
    valueNode.innerHTML = ownerObj[key];
    dl.appendChild(keyNode);
    dl.appendChild(valueNode);
  }
}
function ajax(){
  var xhrObj = new XMLHttpRequest();
  xhrObj.addEventListener("load", reqListener);
  xhrObj.open("GET", "http://localhost:8000/jsonfile.json");
  xhrObj.send();
}
ajax();
