// Date

// 현재 시간
var d = new Date();
console.log(d);

// 2020년 4월 7일
var d= new Date(2020, 3/*month-1*/, 7, 12, 30, 40);
console.log(d);

// 객체 메서드
console.log( 
    "년도:" + d.getFullYear() + "\n" + 
    "월:" + (d.getMonth()+1) + "\n" +
    "일:" + d.getDate() + "\n" + 
    "시" + d.getHours() + "\n" +
    "분:" + d.getMinutes() + "\n" +
    "초:" + d.getSeconds() + "\n" +
    "밀리초:" + d.getMilliseconds() + "\n");

d.setFullYear(2021);
console.log(d);
d.setMonth(11); //12월
console.log(d);
