var githubUrl = "http://localhost:8000/jsonfile.json";

ajaxUrl(githubUrl, reqReposUrl);

function ajaxUrl(url, fnc){
  var xhrObj = new XMLHttpRequest();
  xhrObj.addEventListener("load", fnc);
  xhrObj.open("GET", url);
  xhrObj.send();
}

function reqReposUrl (evt) {
  var target = evt.target;
  var response = target.response;
  var json = JSON.parse(response);
  var ownerObj = json["owner"];
  var repos_url = "";

  for(var key in ownerObj){
    if(key !== "repos_url") continue ;
    repos_url = ownerObj[key];
    break;
  }
  ajaxUrl(repos_url, reqHtmlUrl);

}

function reqHtmlUrl(evt){
  var target = evt.target;
  var response = target.response;
  var json = JSON.parse(response);
  var ownerObj = json["owner"];
  var html_url = "";
  var title = "";
  for(var key in ownerObj){
    if(key !== "html_url") continue ;
    html_url = ownerObj[key];
    title = key;
  }
  var dl = document.querySelector(".github-list");
  var dtNode = "<dt>" + title + "</dt>";
  var ddNode = "<dd>" + html_url + "</dd>";
  dl.insertAdjacentHTML("beforeend",dtNode);
  dl.insertAdjacentHTML("beforeend",ddNode);
}
//Element.insertAdjacentHTML()
