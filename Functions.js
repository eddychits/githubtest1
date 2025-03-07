/*
//Called multiple times in different situations.
//Solves the issue of DRY (Do Not repeat Yourself) while coding.
 

//1st Step is to define the function.

function tech()
{
    console.log("I am learning JS");
}

//2nd step is calling the function.

tech();

//Example of acaaling the function 4 times
tech()
tech()
tech() 

*/

/*

//Returning the text of the function
//Same function
function tech()
{
    console.log("I am learning JS");
}

//edit the function to be able to return
function tech()
{
    return "I am learning JS!!";
}

//Attach it to a variable

let x = tech();
console.log(x);

*/
/*

//calling a function by passing a value
//Declare function
function tech()
{
    console.log("Hello World");
}

//return the function first and accept the value to be passed
//In our case its user
function tech(user)
{
    //insert template interation to fetch the exact value of the user inputed
        return `Hello ${user}!`
    }

//declare a variale to pass it through
    let user = 'Edu';
    let x = tech(user);
    console.log(x);
    */

    /*

    //NB A fucntion can have more than one sentence
    //FUNCTION EXPRESSION 1
    //create a variable and assign a afunction to it.
    //you can express more than one sentence in the function

    function multiply (num1,num2,num3)
{
    return num1*num2*num3
}
 let result = multiply(2,3,4)
 console.log(result);
 
    
    */

/*
    //local- global variables
    //A variable can be local or gloabla when you are using functions
    //The local variable can only be used inside the function,
    //While the global variable can be used both in and out of the function.

function Edward (greeting)
{

console.log(user);

return `Hello ${greeting}`
}
//greeting is a local variable because it becaue it can not be accessed outside the function
// This is a global variable because it can be accessed both in and out of the function
let user = "Edward";

let str = Edward(user)

console.log(str);

*/

//FUNCTION EXPRESSION 2
/*
let str = function multiply (num1,num2,num3)
{
    console.log(num1,num2,num3)
    
    return num1*num2*num3
    
    
}
let y = str;
 let result = y(2,3,4)
 console.log(result);
 */
/*
 //ARROW FUNCTION IN JS

 // A normal function
 let str = function ()
{
    console.log("Hello");
    return 1;
    
}
console.log(str());

// We are adding the arrow function in place of the function

let str = (num1,num2) =>
    {
        return num1+num2
    }
 let result = str(1,2)
console.log(result);

*/

//When using arrow function, and you have one return statement, you dont have to type return or use kali brackets.
 

// example of a function with if statement 

let str = (num1,num2) =>
{
    if(num1<0 ||num2<0)
     {
        console.log('one of the numbers is negative');
        
    }
    else
    console.log(num1+num2);
    }
str (0,-7)




