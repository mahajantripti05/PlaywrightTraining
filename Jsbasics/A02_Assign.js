/*Assignments On Operators
=============================
Guess the output?
---------------------*/
console.log(1 + "2" + 3);//"123"
console.log(1 + 2 + "3");//3"3"
console.log("5" * true);//5
console.log(10 > 5 > 1);//false
let c = 2;
    let b = c++ + ++c;//6
    console.log(c, b);//4,6

let a = 3;
console.log(a++ + a++ + ++a);//12

console.log(5 * 2 == "10");//true


let x = 1;
let y = ++x + x++ + x;
console.log(x, y);//3,7

console.log(10 > 5 && 20 < 30);//true

console.log(null || undefined || "Playwright");//"Playwright"