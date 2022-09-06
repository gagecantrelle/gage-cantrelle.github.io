/**
 * Operators
 * 
 * 0: specif character or a set of specif character that peforems different action depending on what character 
 * 
 * 1: commonly used to asign varaible datatypes/value
 * 
 * 2: can perform math problems
 * 
 * 3: used in if statements 
 */

//Assignment operartors
//commonly used when declareing a varaible value
var test1 = 1; // = operartor will make any varaible equal to a value
test1 += 1; // += operartor will make any varaible equal to the defind varaibale value plus a value
console.log(test1); //print 2
test1 -= 1; // -= operartor will make any varaible equal to the defind varaibale value subtract a value
console.log(test1); //print 1
test1 *= 2; // *= operartor will make any varaible equal to the defind varaibale value times a value
console.log(test1); //print 2
test1 /= 1; // /= operartor will make any varaible equal to the defind varaibale value divided a value
console.log(test1); //print 1
test1 %= 2; // %= operartor will make any varaible equal to 0 or 1 , commonly used when trying to find even or odd numebrs
console.log(test1); //print 1
test1 **= 2; // **= operartor will make any varaible equal to the defind varaibale value times it own value by a value
console.log(test1); //print 1

//Arithmetic operator
//performs arithmetic/math on varaibles that has a number value
var test2 = 1;
test2 = test2 + 1; // + operartor will make any varaible equal to the varaibale value pluse a value 
console.log(test2); //print 2
test2 = test2 - 1; // - operartor will make any varaible equal to the varaibale value subtract a value 
console.log(test2); //print 1
test2 = test2 * 2; // * operartor will make any varaible equal to the varaibale value times a value 
console.log(test2); //print 2
test2 = test2 / 1; // / operartor will make any varaible equal to the varaibale value divide a value 
console.log(test2); //print 1
test2 = test2 % 1; //operartor will make any varaible equal to 0 or 1 , commonly used when trying to find even or odd numebrs
console.log(test2); //print 1
test2++; // ++ operartor will increase any varaible value by 1  
console.log(test2); //print 2
test2--; // -- operartor will decrease any varaible value by 1  
console.log(test2); //print 1
test2**3; // ** operartor will make any varaible equal to the varaibale value times it own value by a value
console.log(test2); //print 1

// you can also use these operartors like this
var test3 = 1 + 2;
console.log(test3); //print 3

//Comparision operartor
// compars two value and return true or false. commony use in if statements and loop
var test4 = 4;
if(test4 == 4){  // == check if varaible value is equal to 4 as a number and string ('4')
    console.log(test4); // print 4
}
if(test4 == '4'){  
    console.log(test4); // print 4
}
if(test4 === 4){  // === check if varaible value is equal to 4 as a number and not a string ('4')
    console.log(test4); // print 4
}
if(test4 != 4){  // != check if varaible value is not equal to 4 as a number and string ('4')
    console.log(test4); // print 4
}
if(test4 != '4'){  // 
    console.log(test4); // print 4
}
if(test4 !== 4){  // !== check if varaible value is not equal to 4 and not a string ('4')
    console.log(test4); // print 4
}
if(test4 !== '4'){ 4
    console.log(test4); // print 4
}

if(test4 > 3){  // >= check if varaible value is greater than 4 
    console.log(test4); // print 4  
}
if(test4 < 5){  // <= check if varaible value is less than 4 
    console.log(test4); // print 4  
}
if(test4 >= 3){  // >= check if varaible value is greater than or equal to 4 
    console.log(test4); // print 4  
}
if(test4 >= 4){   
    console.log(test4); // print 4  
}
if(test4 <= 5){  // >= check if varaible value is less than or equal to 4 
    console.log(test4); // print 4  
}
if(test4 <= 4){  // > check if varaible value is less than or equal to 4 
    console.log(test4); // print 4  
}

// Logic operators
//helps compare mutiple value
var test5 = true;
var test6 = 6;
if(test5 = true && test6 > 5){ // && operartors will use two value and compare each on with different values. return true if both are true
    console.log(true); //print true
}
var test5 = true;
var test6 = 4;
if(test5 = true && test6 > 5){ 
    console.log(true); //dose not print 
}
var test5 = true;
var test6 = 4;
if(test5 = true || test6 > 5){ // || operartors will use two value and compare each on with different values. return true if both or one is true are true 
    console.log(true); //print true
}
var test5 = true;
var test6 = 6;
if(test5 = false || test6 > 5){ // 
    console.log(true); //print true
}    
var test5 = false;
var test6 = 4;
if(test5 = true || test6 > 5){ 
    console.log(true); //dose not print
}

//Unary operartors
test7 = true;    // ! operartor will swap true and false value
console.log(!test7); //print false
test7 = false;    // ! operartor will swap true and false value
console.log(!test7); //print true

var test8 = 8;
console.log(typeof test8); // will print out value type (number)
var test8 = '8';
console.log(typeof test8); //print string
var test8 = true;
console.log(typeof test8); // print boolean
var test8 = function eigth(){

};
console.log(typeof test8); //print function
var test8 = [8, 9];
console.log(typeof test8); //print array
var test8 = {
    tab: 8,
};
console.log(typeof test8); //print object
var test8 = undefind; // or var test8;
console.log(typeof test8); //print undefind
var test8 = null;
console.log(typeof test8); // print null
var test8 = NaN;
console.log(typeof test8); // print not a number

var test9 = -1; // - operaorter change a postive number to a negative number

//Ternary operator
// acts like a if statement
function test10(t){
    return (t ? 'yes' : 'no' );
}
console.log(test10(true)); // print yes
console.log(test10(false)); // print no

// after seting up what you would put in a if statement (if(t) or if(t === true)) by puting a ? that line of code will act like a if statement.
// then by declaring 2 value with : in the middle ('yes' : 'no') you will set what the out come will be. if true return 'yes', if false return 'no'