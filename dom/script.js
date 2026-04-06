// 1.java script can change all the html element in the page 
// 2. js can change all the html attribute in the page 
// 3. js can change css style in the page
// 4. js can remove existing html element and attribute 
// 5. js can react to the all the existing html event in the page6. 
// 6. js can create a new html event in the page \


let x=document.getElementById("demo").getAttribute("id");
let y=document.getElementById("demo").setAttribute("class","democlass");
let z=document.getElementById("demo").style.Color="blue"; 
// create an element 
let a=document.createElement("h2");
// target body and append h2
let par=document.getElementsByTagName("body");
par[0].append(y);
// remove
a.remove();
function myFunction1(){
    console.log("on click is done");
    
}
function myFunction2(){
console.console.log();
}
function myFunction3(){
console.console.log();
("on mosue out done")
}
function myFunction4(){
console.console.log();
("")
}
function myFunction5(){
console.console.log();
(on)
}
function myFunction6(){
console.console.log();
(on)
}
function myFunction7(){
console.console.log();
(on)
}
// events in js
// onelclick
// <button onClick="onClick()">onClick</button>
// mouse event

// keyboard event
// on key down
// on key up
// form event 
// onfocus 
// onSubmit
// onblur
// onchange
// window event
// onload
// onreload 






