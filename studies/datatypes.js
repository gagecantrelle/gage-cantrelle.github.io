/**
 * Data types
 * 
 * 0: Data types are different types of data/values that can be hold by a varaible
 * 
 * 1: without Data types nomader what type of code you use they wont work
 */

/**
 * types of data/values
 * 1: Number = 0, 1, 2, 3, and -1
 * 2: String = "hello world" or 'hello world'
 * 3: Boolean = true or false
 * 4: Array = [1, 'hello', true]
 * 5: Object ={
 * name: gg;
 * age: 4;
 * istrue: true;
 * }
 * 6: Function = function varname(oo){
 * return oo;
 * }
 * 7: Undefined = undefind/ no value
 * 8: Null = set something to undefind 
 * 9: NaN = not a number
 */
 
  //1
  var num1 = 1;
  var num2 = 0;
  var num3 = -1;
  // can hold any number
  
  //2
  var scentes1 = "hello there world";
  var scentes2 = 'hello';
  var scentes3 = 'h';
  // can hold a secesntes, a single word, or a single character

  //3
  var istrue = true;
  var isfalse = false;
  // can hold values of true or false

  //4
  var arr = [1, 'hey', false, {
  name: bob, 
  age: 23,
  }];
  // can hold mutiple values in a single varaible

  //5
  var obj = {
name: joe,
age: 2,
like: ["apple", "car"],
  }
  // can hold key collection
  //each collection can hold mutiple different values

  //6
  function test(up){
    return up;
  }
  console.log(test(1)); //print 1
  // can hold a set of code that can perform an action when called. The parameter of each function can be givein a name(up). when called(test(1)) you can
  //give the parameter a value or varaible(num1).

  //7
  var und;
  // a value that appear when a varaible has no data/value

  //8
  var i = null;
  // same as undefined, but use when you want to set a varaible value to nothing

  //9
  var times = 2 * 'a';
  console.log(times);
  //a value that appers when a output is expextion a number, but is given a differnt value insted

/**
* infint numbers
* 
* 0: Infinty and -infinty are specal numbers that don't end
* 
* 1: you would see Infinty when you get an error say that the code is infint
* 
* 2; you would see -Infinty when you get an error say that the code is -infint
*/

var inftest1 = typeof Infinity;
var inftest2 = typeof -Infinity;
console.log(inftest1); //print number
console.log(inftest2); //print number