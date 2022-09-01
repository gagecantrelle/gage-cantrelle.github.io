const { dog } = require("./dogData");

// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.      //greeting, location and time
var greeting = function(greeting, location, time){
console.log(greeting.concat(" ", location, " ", time));
}



// 2.
var contestants = function(dogarray){
    return dogarray.length;
}



// 3.
var filterSpecies = [];
dogspecies = dogs.filter(array => array["species"] === "dog");
filterSpecies.push(dogspecies);

console.log(filterSpecies);

// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(function(cur){
    if(cur["weight"] >= 0 && cur["weight"] <= 10){
        cur["class"] = "red";
    }else if(cur["weight"] >= 11 && cur["weight"] <= 20){
        cur["class"] = "yellow";
 } else if(cur["weight"] >= 21){
    cur["class"] = "green";  
 }
});
 
 
// 6.
var firstInClass = function(array, output={}){
if(array.length === 0){
return output;
}

Object.assign(output, array[0]);

return firstInClass(array.slice(1), output);
};




// 7.
var votes = dog.reduce(function(acc, cur){
  return acc + cur.votes;
}, 0);