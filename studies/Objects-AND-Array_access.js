/**
 * Objects and Array access
 * 
 * 0: Objects and array are know as complex variables that can hold mutiple data-types/values. They can also hold blocks of codes
 *  
 * 1: complex variables can't be copy by value like simple/primite variables. It can only be refference by value
 */

// Array acces
//Array can hold mutiple data-types/value
var test1 = ['abc', true, 123];
        //     0      1    2  
        //each data-type/value in an Array will hold a point/reffence to there position in the Array.
        // if you try to console.log an array without giveing it a poit/reffence to it position it will print all values
        console.log(test1); // print ['abc', true, 123]
// to access a spefice value in the array you would call the array with a brack notieion and a number in it
console.log(test1[1]); // print true   

//another way to access the array values is to use a .length() method in a for-loop
for(var i = 0; i < test1.length; i++){
    console.log(test1[i]); // print value points/reference  (abc then true then 123)
}
// by declaring a variable i to 0 and then comparing it to test1 length (3) and repeat the code that many times (3)
//the .length() method will get the length/how-many-values from the array.  the array has three values so the length be three

//to add or remove a value from an array you can use 4 methods .push, .pop, .shift, .unshift
test1.pop(); //remove last value (or test1.pop(123))
console.log(test1); // print ['abc', true, ]
test1.shift(); //remove frist value (or test1.pop('abc))
console.log(test1); // print [true]
test1.push(123); //add to last value (or test1.push())
console.log(test1); // print [true, 123]
test1.unshift('abc'); //add to frist value (or test1.unshift())
console.log(test1); // print ['abc', true, 123]

//access object
//can hold mutiple named/key value
var test2 = {
name: 'bob',
age: 33
}
//to access an object it simular to accessing a array but, you use a . insted of [] and use the object value name / key
console.log(test2.name); // print bob
  //to access the key name onloy you would need a for-in-loop
  for(var key in test2){  // key will resperante the values name. you can think of an object key value like a variable
    console.log(key); // print name then age
  }

//to add or remove a value from an you use . and .slice
test2.likes = "game";  
//since there no likes key in the object it will add it to the object
console.log(test2.likes); //print game

test2.slice(3,1); 
//we selected the thrid key in the object (likes) then deleat all only one code (likes,   (3, 1) the 1 determin how many to start starting at 3(likes))
console.log(test2.likes); //print error undefind   because the likes key is no longer in the test2 object