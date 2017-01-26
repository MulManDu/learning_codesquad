# css
- 예제 많이 풀어보기.
- mdn server. live-server

# 코드 리뷰
- map, foreach 등은 꼭 알아야 한다.
- 각각 이벤트리스너를 추가하지 않고, 하나의 이벤트리스너로 만들어보자. 어렵지만
- 매개변수로 불필요한 객체를 넘기지 않는다.
- display: flex. 해보기.
- 메소드 체이닝. map filter

## 수정해보기
- ajax 에서 콜백함수를 넣어서 만들어보기. fnc
- DomContentLoaded : 어디서부터 시작하는지 명시해두기. 전역변수를 없앨 수 있다.

```javascript
document.addEventListener("DOMContentLoaded", function(){
  makeEvtForTabs();
});
```

# template. replace.
```javascript
var template = "<div>{{%name%}}<div>";
```

- 배열과 join() 함수를 이용해서 replace 해보기.

```javascript
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
  templateString = template.join(" ");
  templateString = templateString.replace("{{title}}", PostObj.title);
  templateString = templateString.replace("{{body}}", PostObj.body);
  section.innerHTML = templateString;
}
```

- 메소드 체인닝
```javascript
var templateString = template.join(" ")
  .replace("{{title}}", PostObj.title)
  .replace("{{body}}", PostObj.body);
```

# 마무리
- 동작구현한 것만해도 충분히 잘한 것이다.
- 동료 코드를 보고 피드백을 받기.

# 다음 수업
- 롤릴 베너. 여러 사진들이 돌아가는. 미리 해보는 것도
- 다음주 프로젝트 시작.
