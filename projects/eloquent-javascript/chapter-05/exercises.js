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

function every(arr, func) {
var bol = false;
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i])){
      bol = true;
    }else{
      return false;
    }
  }
return bol;
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
