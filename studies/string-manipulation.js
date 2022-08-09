/**
 * String methode
 * 
 * 0: Methode that are use edit a string to change what it says and how it said. They are commly used to
 * check if a ctring has a certan value. a password for an acount would be one way to check a value
 * 
 */

//Operators
var userName = 'gage';
if(userName == 'gage'){
    console.log(true) 
}else{
    contsole.log(false); 
}
//this code will check if the username is equal to 'gage'. if the username is true it will print true and print false if false.

var obj = {
    Username: 'Gage',
    password: '1234'
}
if(obj.Username === 'Gage' && password === '1234'){
    console.log(true) 
}else{
    contsole.log(false); 
}
//this is a complex code that will check if the username is equal to 'Gage' and the password is '1234. if the username is true 
//it will print true and print false if false.   

//Methods
//ways to edit and change strins

//.length
// return a value of a number equal to the amount of character including the space
var test1 = 'hello';
console.log(test1.length); // will count all character including the space and return a number
//this methon can also be used in a for-loop use to check if a string length is equal to a spefic number. it can be used with array or objet to
//go through all it values. 

//.slice()
//deleats charcters
var test2 = 'hello';
console.log(test2.slice(1)); //print ello
console.log(test2.slice(2)); //print llo
console.log(test2.slice(2, 4)); // print ll
//this will deleat charcters that has a specfit number. h = 1, e = 2, l = 3, l = 4, o = 0. if you deleat a higher number it will also deleat the lower
//numbers too. then if you deleat two numbers, the numbers betwen the two will not be deleated

//.replace()
// will replace all spefic words or characters with anothe word or character
var test3 = 'hello sir';
console.log(test3.replace('sir', 'miss')); // print hello miss

//.replace() will only replace the frist word or chacter unless it put in a / /i
var test4 = 'hello sir, are you ok sir';
console.log(test4.replace('sir', 'miss')); // print hello miss, are you ok sir
var test4 = 'hello sir, are you ok sir';
console.log(test4.replace(/sir/i, 'miss')); // print hello miss, are you ok miss

//upper to lower case
//change all words or chacters to either upper case or lower case
var test5 = hello;
test5.toUpperCase(); //change the word to upper case 
console.log(test5); //print HELLO
test5.toLowerCase(); //change the word to lower case
console.log(test5); //print hello

//.concat()
//join two string
var test6 = 'hello';
var test7 = 'world';
var test8 = test6.concat(' ', test7);
console.log(test8); //print hello world
var test8 = test6.concat(' ', 'world');
console.log(test8); //print hello world
// can be used instead of plus operator (test = 'hello' + ' ' + 'world')

//trim
// remove all space
var test9 = '  hello  '
console.log(test9.trim()) // print hello

