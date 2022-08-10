/**
 * Loops
 * 
 * 0: A loop it a code simular to an if statement but, only have two outcomes. if it return false value it will repet the code
 * in the loop. when it return true it will run the next code and not repeat is self  
 */

//while loop
//will repeat a set of code in a the loop intil the condition is meet.
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
var test2 = ['a', 'b', 'c'];
for(var i = 0; i < test2.length; i++){
    console.log(test2[i]); // print a b c
}
for(var i = test2.length -1; i >= 0; i--){
    console.log(test2[i]); // print a b c
}
// the for loop will iterat it self through the array and print a, b, and c. it can also, iterat through a array backword.
// a differece in a for and a while loop is that the iteration (i++) will start in the loop once.

// for in loop
// a loop that is used for looping through objects
var test3 = {
    name: 'gage',
    age: 999999,
    likesFood: true, 
}
for(var key in test3){
    console.log(test3[key]); // print gage 999999 true
    console.log(key); // print name age likesfood
}
//scince object are a bit more complex than an array the for in loop is better for looping through 
// objects. the for in loop can also be used in arrays
