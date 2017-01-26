# DataBase
- 개발자 외 직군: DBA, 머신러닝, SE

# 주소록 개발
- 어떤 기능이 필요할까? :
  1. 이름, 주소, 연락처 등록
    - 오브젝트 사용.
  2. 검색
    - 검색할 대상(이름 or 주소 or 연락처) 입력받아서 keyword 에 저장.
    - for in 문 검사
    - 일치할 시,
  3. 삭제
- 각 기능의 시간/공간 복잡도는? :
- 내가 다 구현할 수 있을까? :
```javascript
var name = ["이채윤", "김휘겸"];
var address = ["부산시", "대구시"];
var phoneNum = ["010-2365-1187", "010-3422-2342"];


function searchByName(keyword){
  var indexNum = name.indexOf(keyword);
  var human = {};
  human.name = name[indexNum];
  human.address = address[indexNum];
  human.phoneNum = phoneNum[indexNum];
  return human;
}
var target = {};
target = searchByName("이채윤");
console.log(target);

```

# 메모
- visu algorithm
- 관게형 데이터베이스.
- 오라클, Mysql, 몽고DB
- CAP : 일관성
