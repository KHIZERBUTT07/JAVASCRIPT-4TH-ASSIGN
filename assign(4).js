// JAVASCRIPT 4TH ASSIGNMENT:

// Q1)
for( var i = 1; i <=5; i++){
    console.log(i);

}

// Q2)
var sum = 0;
for( var i = 1; i <=10; i++){
sum += i;
console.log("SUM:",sum);
}

// Q3)
for(var i = 10; i>=1; i--){
    console.log(i);
}

// Q4)
var num = 5;
console.log(`Multiplication Table for ${num}:`);        /* brackets m backticks imp */
for( var i = 1; i<=10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

// Q6)
var star = "*";
for(var i = 1; i<=5; i++){
    // star +='*';   if we put this before console so, we dont need to put variable name before thats y i put this after console.
    console.log(star);
    star +='*';
}

// Q6)

// For Loop:
/* for loop in javascript is used to repeat a  block of code multiple times,making it easier to perform repetitive tasks or iterate over collections of data. It has for steps which are as follows:
   1.Initialization
   2.Condition
   3.Satatement
   4.Updation      */





/* just uncomment to check assignment;

// JAVASCRIPT 3RD ASSIGNMENT:


// pop and push:

// Initial array of fruits
var fruits = ["apple" ,"bannana",  "orange",  "grape"];
// Function to display available fruits
console.log('fruits', fruits);
console.log("Customer Purchase",fruits.pop());
console.log('Avaialable Fruits',fruits);
console.log("Customer Purchase",fruits.pop());
console.log('Avaialable Fruits',fruits);

var newFruit = prompt('Enter a fruit name which you want to add');
fruits.push(newFruit);
console.log('newFruit','is added in stock');
console.log('Avaialable Fruits',fruits);

var newFruit = prompt('Enter another fruit name which you want to add');
fruits.push(newFruit);
console.log('newFruit','is added in stock');
console.log('Avaialable Fruits',fruits);

// shift and unshift

var fruits= ["Apple","Bannana","Cherry","Dates","Elderberry"];
console.log("Current fruits in stock");

console.log(fruits);
console.log('A new shipment of fruits has arrrived');
console.log('newly arrived fruit is', fruits.shift());
var newFruit = prompt('Enter a name of a fruit to add in stock');
fruits.unshift(newFruit);
console.log("Updated fruits in stock");
console.log(fruits);

// splice

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("current numbers of array");
console.log(numbers);

var start = prompt("Enter starting index of number you want to remove");
var end = prompt("Enter last index of number you want to remove");
numbers.splice(start,end);
console.log(numbers);

// slice

var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log("current numbers of array");
console.log(numbers);

var userNumber = prompt("Enter a quantity of number you want to remove");
numbers = numbers.slice(userNumber);
console.log('numbers');

var userNumbered = prompt("Enter another quantity of number you want to remove");
numbers = numbers.slice(userNumbered);
console.log('numbers');

console.log(numbers);

// length

var numbers = [1,2,3,4,5,6,7,8,9,10];
var numbered = 0;
for(var i=0; i<numbers.length;i++){
    numbered+= numbers[i]
};
var average = numbered/numbers.length;
console.log("The average of the numbers is:",average);
*/







/* just uncomment to check assignment;

// JAVASCRIPT 2ND ASSIGNMENT:


// Prompt user for age:
var age = prompt("Enter Your Age:");

// Prompt user for student status:
var isStudent = prompt("Are You A Student?(Yes OR No)");

// Initialize ticketprice variable:
var ticketprice;

// Check age and student status to determine ticket price:
if(age < 12){
    ticketprice = 5;
}
else if(age >=12 && age <=18){
    if(isStudent === "yes"){
        ticketprice = 8;
    }
    else{
        ticketprice = 10;
    }
}
else{
    ticketprice = 12;
}
// Display the ticketprice using an alert box:
alert("The Ticket Price Is $" + ticketprice);  */








/* just uncomment to check assignment;

// JAVASCRIPT 1ST ASSIGNMENT:

// 1) ALERTS 

alert("Wellcome To Javascript Basic Assignment");


// 2)  DECLARING A VARIABLE 

var favouritefood = ("BBQ");
console.log("favouritefood");


// 3) VARIABLES FOR NUMBERS

var num1 = 20;
var num2 = 10;
console.log("Addition", num1 + num2);
console.log("Substraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);


// 4) VARIABLES LEGAL AND ILLEGAL NAMES:

// Legal variable names: snake_case, camelCase, PascalCase

// Illegal variable names: : 1stVariable (starting with a digit), my-variable (containing hyphens), my variable (containing spaces)



// 5) MATHS EXPRESSIONS:

// . FAMILIER OPERATORS,

var result = (num1 + num2) * (num1 - num2) / (num2);
console.log("Result:", result);

// . UN-FAMILIER OPERATORS,

// PURPOSE:   The % (modulus) operator gives the remainder of the division operation.
var remainder = num1 % num2;
console.log("Remainder:", remainder);


// 6) POST INCREMENT AND PRE INCREMENT

var no = 7
no++;
console.log("Post Increment:", no); // Prints 7, then increment no to 8
++no;
console.log("Pre Increment:", no) // Incrememt no to 9, then prints 9


// 7) CONCATENATING TEXT STRINGS

var firstName = "Khizer";
var lastName = "Butt";
var fullName = firstName + " " + lastName;
console.log("fullName:", fullName);


// 8) PROMPTS

var userAge = prompt("Please Enter Your Age");
console.log("User's Age:", userAge);
if(userAge>=18){
    alert("YOU ARE ELIGIBLE");
}
else if (userAge<18) {
    alert("YOU ARE NOT ELIGIBLE");
}


// 9) ODD AND EVEN WITH IF STATEMENT

var number=prompt("Enter a Number To Check Number is Odd or Even");
if(number % 2 == 0){
    alert("The Number is Even!");
}else{
    alert("The Number is odd");
}


// 10) IF  ELSE AND ELSE IF STATEMENT

var  grade = prompt("Enter Your Numerical Grade");
if(grade>=90){
    alert("A+1 GRADE");
    console.log("A+1 GRADE");
}
else if(grade>=80){
    alert("A1 GRADE");
    console.log("A1 GRADE");
}
else if(grade>=70){
    alert("A GRADE");
    console.log("A GRADE");
}
else if(grade>=60){
    alert("B GRADE");
    console.log("B GRADE");
}
else if(grade>=50){
    alert("C GRADE");
    console.log("C GRADE");
}
else if(grade>=40){
    alert("D GRADE");
    console.log("D GRADE");
}
else if(grade<40){
    console.log("FAILED");
} */