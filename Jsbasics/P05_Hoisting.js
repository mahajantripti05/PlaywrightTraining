/*
It is behavior of Js laguage that variable and functions are hoisted
Hoisting means declaration process first before execution.
Hoisting is the behavior where you can able to access variable before even declaring it.

var is fully hoisted
function declaraton fully hoisted

let and const and modern function syntax
=============================================
These are also hoisted but if you try to access it before declaration Js
throws error
as variable declare inside temporal dead zone.


*/

test1();//result

//test2();//error:ReferenceError: Cannot access 'test2' before initialization

//test3();//ReferenceError: Cannot access 'test3' before initialization


console.log(x);//undefined
var x=100;
console.log(x);//100

// console.log(y);//error:ReferenceError: Cannot access 'y' before initialization
let y=200;
console.log(y);//200

//console.log(z);//ReferenceError: Cannot access 'z' before initialization
const z=300;
console.log(z);//300


console.log("-----------------");

function test1()
{
    console.log("This is test1() calling.....");
    
}


let test2=function()
{
    console.log("This is test2() calling......");
    
}

let test3=()=>{console.log("This is test3() calling....");}