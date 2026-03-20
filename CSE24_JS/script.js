var num=4;
console.log(num);
console.log(typeof(num));
var num="sidd";
console.log(num);
console.log(typeof(num));
var num=null;
console.log(num);
console.log(typeof(num));
var num=undefined;
console.log(num);
console.log(typeof(num));

const sym1=Symbol(4)
console.log(sym1);
const sym2=Symbol(2);
if(sym1==sym2){
    console.log("true");
}
else
    console.log("false")
  
var count;
// document.write ("starting loop"+<br/>)
for(count=0;count<12;count++){
    document.write(count);
}

var result,a=10,b=5;
result=a+b;
document.write(result);
var result,a=10,b=5;
result=a-b;
document.write(result);
var result,a=10,b=5;
result=a/b;
document.write(result);
var result,a=10,b=5;
result=a*b;
document.write(result);


var a=10;b=20;c=30;
if(a>b && a>c)
console.log("a");
if(b>c && b>a)
    console.log("b")
if(c>a&&c>a)
    console.log("c");

