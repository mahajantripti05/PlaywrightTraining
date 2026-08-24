// Assignment 1 — Student Information
// ===============================
let studentName = "Rahul";
let studentAge = 21;
let isEnrolled = true;
let studentGrade = "A";
let studentEmail = "rahul@email.com";

console.log("Assignment 1:");
console.log(studentName, typeof studentName); // string
console.log(studentAge, typeof studentAge); // number
console.log(isEnrolled, typeof isEnrolled); // boolean
console.log(studentGrade, typeof studentGrade); // string
console.log(studentEmail, typeof studentEmail); // string

// ===============================
// Assignment 2 — Identify the Data Type
// ===============================
let num = 100;
let str = "100";
let bool = true;
let undef = undefined;
let nul = null;
let bigNum = 12345678901234567890n;

console.log("\nAssignment 2:");
console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof undef); // undefined
console.log(typeof nul); // object (quirk in JS)
console.log(typeof bigNum); // bigint

// ===============================
// Assignment 3 — var, let, and const
// ===============================
var companyName = "Microsoft";
let employeeName = "Tripti";
const employeeId = 101;

console.log("\nAssignment 3:");
console.log(companyName, employeeName, employeeId);

companyName = "Google"; // ✅ var can be reassigned
employeeName = "Mahajan"; // ✅ let can be reassigned
// employeeId = 202; // ❌ Error: const cannot be reassigned

console.log(companyName, employeeName, employeeId);

// ===============================
// Assignment 4 — Predict the Output
// ===============================
var x = 10;
let y = 20;
const z = 30;

console.log("\nAssignment 4:");
console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

x = 100; //  var reassignment
y = 200; //  let reassignment
// z = 300; // Error: const cannot be reassigned

console.log(x); // 100
console.log(y); // 200
console.log(z); // 30

// ===============================
// Assignment 5 — Find the Error
// ===============================
var a = 10;
a = 20; // allowed

let b = 30;
b = 40; // allowed

const c = 50;
// c = 60; // Error: const cannot be reassigned

console.log("\nAssignment 5:");
console.log(a, b, c);

// ===============================
// Assignment 6 — Mixed Data Types
// ===============================
let empName = "Amit";
let empId = 123;
let salary = 50000.50;
let isPermanent = true;
let joiningDate = "2022-01-15"; // could also use Date object
let managerName = "Rohit";

console.log("\nAssignment 6:");
console.log(empName, typeof empName);
console.log(empId, typeof empId);
console.log(salary, typeof salary);
console.log(isPermanent, typeof isPermanent);
console.log(joiningDate, typeof joiningDate);
console.log(managerName, typeof managerName);

// ===============================
// Assignment 7 — Employee Profile
// ===============================
var employeeName2 = "Tripti";
let employeeId2 = 101;
let age = 28;
let salary2 = 75000;
let department = "QA";
let isActive = true;
let manager2 = "Rahul";
let joiningDate2 = "2021-06-01";
const referenceNumber = 987654321987654321n;

console.log("\nAssignment 7:");
console.log(employeeName2, employeeId2, age, salary2, department, isActive, manager2, joiningDate2, referenceNumber);

// ===============================
// Find the Error Questions
// ===============================
console.log("\nFind the Error Questions:");
// 1. let name = "Rahul"; let name = "Amit"; Error: Cannot redeclare let
// 2. const age = 25; age = 30; Error: Assignment to constant variable
// 3. const city; city = "Pune"; Error: const must be initialized
let salary3 = 50000; salary3 = 60000; console.log(salary3); // Works fine
var company = "ABC"; var company = "XYZ"; console.log(company); // Allowed, prints "XYZ"
/* let age = 25; var age = 30; Error: Cannot redeclare let with var */
// let age = 25; age = "Twenty Five"; console.log(age); // Allowed, prints "Twenty Five"
/* const value = 100; value = "Hello"; Error: Assignment to constant variable */

// ===============================
// Tricky Questions
// ===============================
console.log("\nTricky Questions:");
var x1 = 10; { var x1 = 20; } console.log(x1); 
// Output: 20 → var is function-scoped, redeclaration inside block overwrites outer.

let x2 = 10; { let x2 = 20; } console.log(x2); 
// Output: 10 → let is block-scoped, inner x2 is separate.

const x3 = 10; { const x3 = 20; } console.log(x3); 
// Output: 10 → const is block-scoped, inner x3 is separate.

let age1 = 25; { let age1 = 30; console.log(age1); } console.log(age1); 
// Output: 30 (inner block), then 25 (outer block).

var x4 = 10; { var x4 = 20; console.log(x4); } console.log(x4); 
// Output: 20, 20 → var ignores block scope, so reassignment affects outer.

/// console.log(age2); let age2 = 25; 
// Error: Temporal Dead Zone → cannot access let before initialization.

console.log(age3); var age3 = 25; 
// Output: undefined → var is hoisted but initialized later.

var x5 = 10; { let x5 = 20; console.log(x5); } console.log(x5); 
// Output: 20 (inner block), then 10 (outer block).

// let x6 = 10; { var x6 = 20; } console.log(x6); 
// Error: Cannot redeclare let with var.

/// const x7 = 10; { var x7 = 20; } console.log(x7); 
// Error: Cannot redeclare const with var.