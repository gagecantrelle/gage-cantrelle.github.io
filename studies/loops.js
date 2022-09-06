/**
 * Loops
 * 
 * 0: A loop it a code simular to an if statement but, only have two outcomes. if it return false value it will repet the code
 * in the loop. when it return true it will run the next code and not repeat is self  
 */

//while loop
//will repeat a set of code in a the loop intil it condition of true is equal false (will loop as long as it condition is true)
var test1 = 0;
while(test1 < 10){
    console.log("add"); //print add
    test1++;
}
// this code will print add 10 times.
//the while loop are commonly used when we don't know how many times it will iterat it self
//a differece in a for and a while loop is that the while loop iteration will start at the end of the loop

//for loop
// simular to the while but used more offen
// it separated into three parts start, stop, and update 
//start: where the loop starts with a counting varaible
//stop: where it compares the start value to see when the value is false. if false stop the loop
//update: if the start condition is still true chage the start condition. will repet every time in until the stop conditions run and say that start is false 
//for(var i = start;  i < stop; update++ )
var test2 = ['a', 'b', 'c'];
for(var i = 0; i < test2.length; i++){  // will loop three times
    console.log(test2[i]); // print a b c
}
for(var i = test2.length -1; i >= 0; i--){
    console.log(test2[i]); // print a b c
}
// the for loop will iterat it self through the array and print a, b, and c. it can also, iterat through a array backword.
// a differece in a for and a while loop is that the iteration (i++) will start in the loop once.

// for in loop
// a loop that is used for looping through objects
//like how creating a for loop insted of saying var i = 0 you will say var key in object
var test3 = {
    name: 'gage',
    age: 999999,
    likesFood: true, 
}
//in test3 we have 3 keys name, age, likeFood it also have 3 key values
// by declaring var key in test3. we are declaring key (can be called something else but normly called key) to be a key in test3 (name, age, likeFood)
//then by saying in test3 we are calling evey key in the object of test 3
for(var key in test3){
    console.log(test3[key]); // print all key values gage, 999999, and true
    console.log(key); // print all key name, age, and likesfood
}
//scince object are a bit more complex than an array the for in loop is better for looping through 
// objects. the for in loop can also be used in arrays
