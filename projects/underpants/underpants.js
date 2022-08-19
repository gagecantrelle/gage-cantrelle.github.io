// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { isUndefined, result } = require("lodash");

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){ //take in any value
return value; //return any value
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){ // take in a value
    var vtest = ""; //set vtest to empty string
    if(typeof value === 'object' && value !== null && Array.isArray(value) === false && value instanceof Date === false){ //test if value is an object 
      vtest = "object"; //set vtest to object
   }else if(typeof value === 'object' && value !== null && Array.isArray(value) === true && value instanceof Date === false){ //test if value is an array 
      vtest = "array"; //set vtest to array
   }else if(typeof value === 'object' && value === null && Array.isArray(value) === false && value instanceof Date === false){ //test if value is null
      vtest = "null"; //set vtest to null
   }else if(typeof value === 'object' && value !== null && Array.isArray(value) === false && value instanceof Date === true){ //test if value is an date 
      vtest = "date"; //set vtest to date
   }else if(typeof value === 'function'){ //test if value is an function
      vtest = "function"; //set vtest to function
   }else if(typeof value === 'undefined'){ //test if value is an undefined
    vtest = "undefined"; //set vtest to undefined
   }else if(typeof value === 'string'){ //test if value is an string
    vtest = "string"; //set vtest to string
   }else if(typeof value === 'number'){ //test if value is an number
    vtest = "number"; //set vtest to number
   }else if(typeof value === 'boolean'){ //test if value is an boolean
    vtest = "boolean"; //set vtest to boolean
   }
   console.log(vtest) // print to the console vtest
   return vtest; //return vtest
  
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(arr, num){ // take in a array and a number
    var array = []; //set empty array
    if(Array.isArray(arr)){ // check if arr is array
       for(var i = 0; i <= arr.length; i++){ // loop through array
        if(num === undefined){ // chech if num is undefined
            return arr[0]; // return frist value in arr
        }else if(i === num){ // check if i is equal num
         return array; //return array
        }else if(num < 0){ // check if num is less than 0
            return array; // return array
        }else if(arr.length < num){ //check if the arr length is less than num
            return arr; // return arr
        }

        array.push(arr[i]); // give array a new value from arr[i]
       }
    }else{ // run if arr is not a array
        return array; // return array
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(arr, num){ // take in a array and a number
    
    
       
         if(num === undefined){ // chech if num is undefined
             return arr[arr.length -1]; // return last value in arr
         }else if(Array.isArray(arr) === false){ // check if arr is not a array
          return []; //return blank array
         }else if(num < 0){ // check if i is lessthan num
             return []; //return blank array
         }else if(num > arr.length){ //check if num is greater than arr length
             return arr; //return arr
         }else{ // run if num is not undefined
             return num = arr.slice(-num); //return last values in arr
         }

}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(arr, value){ // take in array and a value
    for(var i = 0; i <= arr.length; i++){ //loop through arr
        if(arr[i] === value){ //check if arr[i] is equal to value 
            return i; // return i
        }
            
        
    }
    return -1; // return -1 if all values are false
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(arr, value){ // take in array and value
    for(var i = 0; i < arr.length; i++){ // loop through arr
     if(arr[i] === value){  //check if arr[i] is equal to value 
        return true; // return true
     }
    }
    return false; // return false
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
 _.each = function(collection, func){
       if(Array.isArray(collection)){
       for(var i = 0; i < collection.length; i++){
        func(collection[i], i, collection)  //llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

        
       }
       }else{
        for(var key in collection){
            func(collection[key], key, collection)
        }
       }
 }

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(arr){
    var array = [];
    for(var i = 0; i < arr.length; i++){
        if(array.indexOf(arr[i]) === -1){
            array.push(arr[i]);
        }
    }
    return array;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(arr, func){ // take in array and function    will return all value that are speficfide in array or object
    var array = []; //set blank array
    for(var i = 0; i < arr.length; i++){ //loop through array
        if(func(arr[i], i, arr)){ // check if values all equal true
        array.push(arr[i]); // push arr[i] in array
        }
    }
    return array; //return array
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(arr, func){
   var array = [];
    for(var i = 0; i < arr.length; i++){
     if(func(arr[i], i, arr) === false){
        array.push(arr[i]);
     }
   }
   return array;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(arr, func){
    var arrayT = [];
    var arrayF = [];
    var arrayA = [];
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
           arrayT.push(arr[i]);
        }else if(!func(arr[i], i, arr)){
            arrayF.push(arr[i]);
        }
     
    }
     return arrayA.concat([arrayT], [arrayF]);
      


} 

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(coll, func){// take in collection and function         retun spefic key
    var array = [];
    if(Array.isArray(coll)){
    for( var i = 0; i < coll.length; i++){
        array.push(func(coll[i], i, coll));
    } 
    }else{
      for(var key in coll){
        array.push(func(coll[key], key, coll));
      }
    }
    return array;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(ArrObj, key ){
return ArrObj.map(obj => obj[key]); //return array map (function parameter is obj return the obj value)
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(coll, func){
if(!func){ // chech if func has a value
   if(Array.isArray(coll)){
     for(let i = 0; i < coll.length; i++){
        if(!coll[i]){
            return false;
        }
     }
   }else{
     for(var key in coll){
        if(!coll[key]){
            return false
        }
     }
   }

}else{
    if(Array.isArray(coll)){
        for(let i = 0; i < coll.length; i++){
           if(!func(coll[i], i, coll)){
               return false;
           }
        }
      }else{
        for(var key in coll){
           if(!func(coll[key], key, coll)){
               return false
           }
        }
      }
}
return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(coll, func){
    if(!func){ // chech if func has a value
        if(Array.isArray(coll)){
          for(let i = 0; i < coll.length; i++){
             if(coll[i]){
                 return true;
             }
          }
        }else{
          for(var key in coll){
             if(coll[key]){
                 return true;
             }
          }
        }
     
     }else{
         if(Array.isArray(coll)){
             for(let i = 0; i < coll.length; i++){
                if(func(coll[i], i, coll)){
                    return true;
                }
             }
           }else{
             for(var key in coll){
                if(func(coll[key], key, coll)){
                    return true
                }
             }
           }
     }
     return false;

}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(arr, func, seed){ // take in array , function, and seed    will return a single value speficed in array
    var result; // result is undefind
    if(seed !== undefined){ // check if seed is not undefind
     result = seed; //set result equal to seed
     for(let i = 0; i < arr.length; i++){ // loop through arr
        result = func(result, arr[i], i, arr);
     }
    }else{ // run if seed is undefind
     result = arr[0];
     for(let y = 1; y < arr.length; y++){ //loop through arr
        result = func(result, arr[y], y, arr);
    } 
}

return result;
}
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(...obj){
    
    return Object.assign(...obj, {});

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
