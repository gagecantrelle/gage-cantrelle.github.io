// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./gage-cantrelle.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    var males = _.filter(array, function(customer){
        return customer.gender === 'male';
    })
    return males.length;
};

var femaleCount = function(array){
    
    var females = _.reduce(array, function(accumalte, customer){
        if(customer.gender === 'female'){
        accumalte += 1;
        }
        return accumalte;
    }, 0)
    return females;
}

var oldestCustomer = function(array){
    var old = _.reduce(array, function(accumalte, customer){
       if(customer.age > accumalte.age ){
        return customer;
       }
       return accumalte;
    })
    return old.name;
};

var youngestCustomer = function(array){
    var young = _.reduce(array, function(accumalte, customer){
        if(customer.age < accumalte.age ){
         return customer;
        }
        return accumalte;
     })
     return young.name;
    
};

var averageBalance = function(array){   // need to change string to number  parseFloat()  .replacr(/[$,]/g, "")
var average = _.map(array, function(customer){
    var str = customer.balance.replace(/[$,]/g, "");
    var num = parseFloat(str);
    return num;
})
;
var total = 0;
for(var i = 0; i < average.length; i++){
total += average[i];

}

return total / array.length;
} //loop through array  divide by length

var firstLetterCount = function(array, letter){
    var count = 0;
  
for(var i = 0; i < array.length; i++){
 if(array[i].name[0].toUpperCase() === letter.toUpperCase()){
    count++;
    }
}
   return count;
}


var friendFirstLetterCount = function(array, customer, letter){
 var count = 0;
 
 for(var i = 0; i < array.length; i++){
   if(array[i].name === customer){
    for(var y = 0; y < array[i].friends.length; y++){
    if(array[i].friends[y].name[0].toUpperCase() === letter.toUpperCase()){
        count++;
     }
   }
   }
 }
return count;
}
var friendsCount = function(array, name){
 var list = [];
for(var i = 0; i < array.length; i++){
     for(var y = 0; y < array[i].friends.length; y++){
      if(array[i].friends[y].name === name){
        list.push(array[i].name);
      }
    }
    }
    
return list;
};

var topThreeTags = function(array){
var topthree = [];
var tag = [];
for(var i = 0; i < array.length; i++){
    for(var y = 0; i < array[i].tags.length; y++){
        tag.push(array[i].tags[y])
    }
}
var obj = {};

for(var j = 0; j < tag.length; j++){
    if(obj[tag[j]]){
        obj[tag[j]] += 1;
    }else{
        obj[tag[j]] = 1;
    }
    
}
console.log(obj);
var top = [];
for(var key in obj){
    if(obj[key] > obj[0]){
     top = obj[key];
    }
    
}
topthree.push(top);
top.slice(1);



return tags;
}

var genderCount = function(array){
   var genders = {
    male: 0,
    female: 0,
    "non-binary": 0
   }
    var females = _.reduce(array, function(accumalte, customer){
        if(customer.gender === 'female'){
        accumalte += 1;
        }
        return accumalte;
    }, 0)
    
    var males = _.reduce(array, function(accumalte, customer){
        if(customer.gender === 'male'){
        accumalte += 1;
        }
        return accumalte;
    }, 0)
  
    var nonBinary = _.reduce(array, function(accumalte, customer){
        if(customer.gender === 'non-binary'){
        accumalte += 1;
        }
        return accumalte;
    }, 0)
    genders.male = males;
    genders.female = females;
    genders["non-binary"] = nonBinary;
    return genders;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
