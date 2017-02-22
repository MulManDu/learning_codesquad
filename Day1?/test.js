var foo = function(obj){
  obj.value++;
  console.log(obj.value);
}

var b = {
  "value" : 1,
  "lal" : 555`
};
foo(b);
console.log(b);
