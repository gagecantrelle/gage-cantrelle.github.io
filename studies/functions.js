/**
 * Functions
 * 
 * 0: Functions are a type of complex datatype/value that contans a set of codes that wont run until it called.
 *    when called it will run it code despict it allready been run by the program. it can run at any point in your
 *    program when called
 * 
 * 1: in each function it will have a parameters that will take in a varaible out side the function to put it in the
 *    function
 *  
 * 2: code created in the function can't be called out of the function
 */

//ceating the function
//instead of puting var test1; you would put function test1(){}
function test1(){

}
// now if we just type in the function name test1() it will run at any point in you code
test1(); // run code
console.log(test1()); // print nothing to the console
// in the percintes of the function next to it name you can put in a parameter that will be equal to a varaible value
function test2(input){
    var output = input + 1;
    return output;
}
var add = 1;
console.log(test2(add)); // print 2
//the parameters will takin in any value or varaible and copy it. it will then use that value in the function to run the
//code. then if you need to retun a value you will put return output;

//when useing a function any code in it can't be use outside the function. By given the function a parameters it will act like a
//blank varaible in the function. To add a varaible or value in the function, you will need to call the function and put a varaible/value
//in side the percintes. This is also know a arugment, the parameter will then be equal to the argument. changing all the named parameters
//in the function to be equal to the argument value

//once a function takes in an argument it has the option to return a value. That value can be the argument we gave the function
// or a varaible created within the function. It could just return a value and not a variable. Even if the function has no 
// parameters it will still run and return a value

function test3(){
    console.log("hi");
}
test3(); // run test3 which will print hi

function test4(){
    var times = 2 * 3; // equal 6
    return times;
}
console.log(test4()); //print 6

// The function scope can't edit other varaible outside the function. we can creat a varaible in side the function that will hold 
// a edited value of an gobal varaible. we then can return the varaible created inside the function as a value. Then set the gobal varaible 
// that was given to the function as the return value

var a = 1;
function test5(input){
  var output = input + 1;
    return output;
}
console.log(a); // print 1
a = test5(a);
console.log(a); // print 2

//function Closures
//Functions form closure around the code the hold ( {} ). when a function return a value and is stored some where the code in the
//function will sill exist