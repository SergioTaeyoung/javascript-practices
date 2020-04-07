var o = {
    name:"taeyoung"
}
global.name = "nodejs";
var f = function(s){
    console.log(s + ":" + this.name);
}

f("hello");


f.call();