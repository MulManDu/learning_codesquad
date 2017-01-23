# css
- 예제 많이 풀어보기.
- mdn server. live-server

# 코드 리뷰
- map, foreach 등은 꼭 알아야 한다.
- 각각 이벤트리스너를 추가하지 않고, 하나의 이벤트리스너로 만들어보자. 어렵지만
- 매개변수로 불필요한 객체를 넘기지 않는다.
- display: flex. 해보기.

## 수정해보기
- ajax 에서 콜백함수를 넣어서 만들어보기. fnc
- DomContentLoaded : 어디서부터 시작하는지 명시해두기. 전역변수를 없앨 수 있다.

```javascript
document.addEventListener("DOMContentLoaded", function(){
  makeEvtForTabs();
});
```
