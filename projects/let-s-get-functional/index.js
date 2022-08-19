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
    var str = customer.replace(/[$,]/g, "");
    var num = str.parseFloat();
})
} //loop through array  divide by length

var firstLetterCount = function(array, letter){
var firstchar = _.fliter(array, function(letter){
      
    return firstchar.name[0] === letter;
})
}

var friendFirstLetterCount = function(array, customer, letter){
 for(var i = 0; i < array.length; i++){

 }
}

var friendsCount = function(array, name){
var count = _.contains(array, name);
if(count === true){
return count.friends.name;
}

};

var topThreeTags = function(array){

}

var genderCount = function(array){

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