
/*
Variable 
===========
Name of storage location is called variable

In Js 3 keywords we use to declare variable
---------------------------------------------
var, let , const

var(Older/not recommended)
======================
-Scope: Global + function
-Var is fully hoised
-Redeclaration is allowed
-Reassignment is allowed

modern syntax
-----------------
let
=============
-Scope: Global + Block scope
-For Mutable data use let
-let is hoisted but let initialize in temporal ded zone so 
if you try to access before delcration then you wil get Refrence error
- Redecalartion is not allowed
- Reassignment is allowed

const
================
-Scope: Global + Block scope
-For Immutable data use const
-const is hoisted but const initialize in temporal ded zone so 
if you try to access before delcration then you wil get Refrence error
- Redecalartion is not allowed
- Reassignment is not allowed


Syntax:
===========
let id=101;
let name="Jay";




*/


//redeclaration & reassignment allowed
var id=101;
var id=201;
var id=301;

console.log(id);//301
console.log(typeof id);//number


//reassignment
id='1234';
console.log(id);
console.log(typeof id);//string



//let redeclaration not allowed and reassignment allowed rule
let toolName="Selenium";
//let toolName="Playwright";//SyntaxError: Identifier 'toolName' has already been declared

toolName="Playwright";

console.log(toolName);


//const redeclaration & reassignment not allowed

const vendorName="Microsoft";

//const vendorName="Microsoft";//SyntaxError: Identifier 'vendorName' has already been declared

//vendorName="Google"//TypeError: Assignment to constant variable.
console.log(vendorName);

console.log("----Global scope------");
//Global scope: anything declare inside Js file outside any block or function is global scope data

var fname="Hiteshi";
let location="Us";
const emailId="hiteshi@gmail.com";

console.log(fname);
console.log(location);
console.log(emailId);

//global data we can access everywhere means inside function also
console.log("----Call global data through function----");

//escape character \n for new line
function show()
{
console.log("FirstName: "+fname+"\n & location: "+location+"\n & emailId: "+emailId);
}

//call

show();


console.log("-----function scope for var------");
/*
Any variable declare inside function we can call it within function that is function
scope/ local scope
var is function scope but let and const are block scope
*/


function info()
{
    var automationType='Functional';
    let browserVersion=150;
    const browserName="chrome";

    console.log("vatype:"+automationType);
    console.log("let type: "+browserVersion);
    console.log("const type: "+browserName);
    
      
}

//call
info();


console.log("----outside the function----");

    //console.log("var type:"+automationType);//ReferenceError: automationType is not defined
    //console.log("let type: "+browserVersion);//ReferenceError: browserVersion is not defined
    //console.log("const type: "+browserName);//ReferenceError: browserName is not definedlog

    console.log("---------");
    
var a=10;
console.log(a);//10

function test1()
{
    var a=20;
    console.log(a);//20
    if(true)
    {
        var a=30;
        console.log(a);//30
    }
    console.log(a);//30
    
}

test1();

console.log("----block scope-----");
/*
Any variable declared inside block { }, if block ,
for loop,while loop we can access it within block
let and const are block scoped


*/

if(true)
{
    let testType="API";
    const tool="Postman";
    console.log(testType);
    console.log(tool);
       
}

    //console.log(testType);//ReferenceError: testType is not defined
    //console.log(tool);//ReferenceError: tool is not defined


let b=10;//Global scope
console.log(b);//10

function test2()
{
    let b=20;//function scope
    console.log(b);//20
    if(true)
    {
        let b=30;//block scope
        console.log(b);//30
        
    }
    console.log(b);//20
    }

test2();

//global
console.log(b);//10

console.log(a);//10

//const=Global+block scope


const c=10;
console.log(c);//10

function test3()
{
    const c=20;
    console.log(c); //20

    if(true)
    {
        const c=30;
        console.log(c);//30
        
    }
    console.log(c);//20
    
    
}

test3();








