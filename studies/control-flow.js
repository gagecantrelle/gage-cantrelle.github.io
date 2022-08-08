/**
 * Control Flow
 * 
 * 0: Control Flow are a set of statements that tell a program what it can and can't do. This alow the program know when a certan
 * condition is meet and run a spefic set code depend on the condition.
 */

//If, Else-if, Else statemets
// Statements that specify a line of of code to run if the Statement condition is true

  //If and Else statement
  var test1 = 1;
  if(test1 = 1){         //test if test1 that has a value of 1 is equal to 1
    console.log(test1); //print 1 if statement is true
  }else{
    console.log("error"); // print error if statement is false
  }

  //Else-if statement
  var test2 = 2;
  if(test2 = 2){         //test if test2 that has a value of 2 is equal to 2
    console.log(test2); //print 1 if statement is true
  }else if(test2 = 1){ //test if test2 that has a value of 1 is equal to 1 
    console.log(test2) //print 2 if statement is true
  }else{
    console.log("error"); // print error if all If statements are false
  }
  //Else-if will run if the frist if statement come back as false, then check if the value is equal to it's condition. this statements can be used mutiple times 

  //If statement can use varaibales for it conditions
  var test3 = 3;
  var test4 = 4;
  if (test3 = test4){
    console.log("true");
  }else{
   console.log("false");
  }

//Switch statements
//This statement is simular to If statement. They both compare values that are given to them but, a switch is more cleaner. it is beter susited for
//when you need to compare a value and have mutiple conditions.
var test5 = 5;

switch(test5){
case 1:  //if test5 = 1
    console.log(1);
break;   // stop if conditions are true
case 2:  //if test5 = 2
    console.log(2);
break;   // stop if conditions are true
case 3:  //if test5 = 3
    console.log(3);
break;   // stop if conditions are true
case 4:  //if test5 = 4
    console.log(4);
break;   // stop if conditions are true
case 5:  //if test5 = 5
    console.log(5);
break;
}

//