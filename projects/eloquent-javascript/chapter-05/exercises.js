// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
var newArr = [];
for(let i = 0; i < arr.length; i++){
  for(let y = 0; y < arr[i].length; y++){
    newArr.push(arr[i][y]);
  }
}
return newArr;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, stop, update, action) {
  for(var i = start; stop(i); i = update(i)){
    action(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(coll, func) {
  if(!func){ // chech if func has a value
    if(Array.isArray(coll)){ //check if coll is an array
      for(let i = 0; i < coll.length; i++){ //loop through collection
         if(!coll[i]){ // check if coll spefic value is not true
             return false; // return false
         }
      }
    }else{ // run if coll not an array
      for(var key in coll){ //loop through collection
         if(!coll[key]){ // check if coll spefic value is not true
             return false // return false
         }
      }
    }
 
 }else{ // run if fun has a value
     if(Array.isArray(coll)){ //check if coll is an array
         for(let i = 0; i < coll.length; i++){ // loop through coll
            if(!func(coll[i], i, coll)){ // check if coll spefic value is not true
                return false; //return false
            }
         }
       }else{ // run if coll is not array
         for(var key in coll){ // loop through coll
            if(!func(coll[key], key, coll)){ // check if coll spefic value is not true
                return false; //return false
            }
         }
       }
 }
 return true; // return true
 
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {

let ltr = [];
let rtl = [];

for(let i = 0; i < string.length; i++ ){
  let scriptName = characterScript(string.charCodeAt(i)); //return null or {....}

  if(scriptName !== null){
    if(scriptName.direction === 'ltr'){
      ltr.push(scriptName);
    }else{
      rtl.push(scriptName);
    }
  }
}
if(ltr.length > rtl.length){
  return 'ltr';
}else{
  return 'rtl';
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
