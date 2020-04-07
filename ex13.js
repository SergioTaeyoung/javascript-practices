//배열 (Array)

//1. 생성자 함수
var a1 = new Array(); 
console.log(typeof(a1));
var a2 = new Array(10); //배열을 정의할 때 크기 지정은 별 의미가 없다.

a2[0] = 0;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;

console.log(a2[1], a2[2]);  //배열 요소에 값을 대입하지 않으면 undefined
console.log(a2.length);

// Array VS Object
a = [];
a[0] = 0;
a["1"] = 1;
a["name"] = '머지?';

console.log(a["0"], a[0], a['name'], a.length);
for(property in a){
    console.log("prop:" + property + ":" + typeof(property));
}
console.log("===============================");

o = {};
o["0"] = 0;
o["1"] = 1;
o["name"] = '머지?';
console.log(a["0"], a[0], a['name'], a.length);
for(property in o){
    console.log("prop:" + property + ":" + typeof(property));
}
console.log(o["0"], o[0], o['name'], o.length);

//2. 리터럴
console.log("=============리터럴=============");
var a3 = []; 
console.log(typeof(a3), a3.length);

var a4 = [
    function(){console.log("hello")},
     20,
     "javascript",
     40,     
     {
         email: 'xodud7965@gmail.com',
         name: '최태영'
     },
     true,
     null,
     undefined
    ];
console.log(a4.length);
for(var i=0; i<a4.length; i++){
    console.log(a4[i]);
}

//배열 초기화