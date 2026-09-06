/*JavaScript Practice: Type Coercion & Explicit Conversion
===========================================================

Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.*/

console.log("-----Total Price Calculation-----");
//let price = "500";
/*let quantity = "3";

//Convert the string values to numbers
//let totalPrice = Number(price) * Number(quantity);
let totalPrice = price * quantity;
console.log("Total Price:" +totalPrice); // Output: Total Price: 1500*/


/*Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.*/

console.log("-----Final Price Calculation-----");
let price2 = "1000";
let tax = "200";

//Convert the string values to numbers 
let finalPrice = Number(price2) + Number(tax);
console.log("Final Price:" +finalPrice); // Output: Final Price: 1200

/*Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected)*/

console.log("-----Understanding + Coercion-----");
let actual = "100";
let expected = 20;

// The + operator will concatenate the string and number, resulting in a string
let result = actual + expected;
console.log("Result of actual + expected:" +result); // Output: Result of actual + expected: 10020

/*Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);*/

console.log("-----Understanding - Coercion-----");
let actual2 = "100";
let expected2 = 20;

// The - operator will convert the string to a number and then perform subtraction
let result2 = actual2 - expected2;
console.log("Result of actual2 - expected2:" +result2); // Output: Result of actual2 - expected2: 80

/*Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);*/

console.log("-----UI Value and Assertion-----");
/*let actualPrice = "100";
let expectedPrice = 100;

// The == operator performs type coercion, so it will return true
let isEqual = actualPrice == expectedPrice;
console.log("Result of actualPrice == expectedPrice:" +isEqual); // Output: Result of actualPrice == expectedPrice:true

// The === operator does not perform type coercion, so it will return false
let isStrictEqual = actualPrice === expectedPrice;
console.log("Result of actualPrice === expectedPrice:" +isStrictEqual); // Output: Result of actualPrice === expectedPrice:false*/

/*Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);

Modify the code so that the assertion gives:
true*/
let actualPrice = "500";
let expectedPrice = 500;
console.log(Number(actualPrice) === expectedPrice);

/*Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type*/

console.log("-----Environment Variable-----");
let timeout = "30000";
// Convert the string value to a number
let timeoutNumber = Number(timeout);
console.log("Timeout Value:" +timeoutNumber); // Output: Timeout Value:30000
console.log("Data Type of Timeout Value:" +typeof timeoutNumber); // Output: Data Type of Timeout Value:number

/*Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345*/

let orderId = 12345;

// Convert to string and prepend "ORDER-"
let formattedOrderId = "ORDER-" + orderId.toString();

console.log(formattedOrderId); // Output: ORDER-12345

/*Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.

Expected Output:
true
boolean*/

console.log("-----Boolean API Value-----");
let status = "true";    

// Convert the string to a boolean
let actualboolean = (status === "true");
console.log(actualboolean); // Output: true
console.log(typeof actualboolean); // Output: boolean  

/*Problem 10 — Input Field Value
A Playwright test retrieves a quantity from an input field:
let quantity = "5";
The expected quantity is:
let expectedQuantity = 5;*/

console.log("-----Input Field Value-----");
/*let quantity = "5";
let expectedQuantity = 5;

console.log("Quantity:" + quantity); // Output: Quantity:5
console.log("Expected Quantity:" + expectedQuantity); // Output: Expected Quantity:5
console.log("Are they equal?" + (Number(quantity) === expectedQuantity)); // Output: Are they equal?true*/

/*Problem 11 — Calculate Cart Total
An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
Calculate:
(price × quantity) - discount

Expected Output:
1498*/

let price = "799";
let quantity = "2";
let discount = "100";

let total = (+price * +quantity) - +discount;

console.log(total);        // 1498
console.log(typeof total); // number
