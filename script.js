const numbers = [67, 80, 65, 79, 86, 66, 75, 71, 81, 69, 90, 79, 68, 65, 73, 88];


let newArrLoop = [];
let newArrForEach = [];
let newArrMap = [];

// 1. Convert numbers to Alphabet according to Ascii table using the fromCharCode method
// Using a for loop:
function convertToCharCodeUsingForLoop() {
    for (let i = 0; i < numbers.length; i++) {
        newArrLoop.push(String.fromCharCode(numbers[i]));
    }

};
convertToCharCodeUsingForLoop()
document.getElementById('loop').innerHTML = newArrLoop.join(" ");

// Using the forEach method:
function convertToCharCodeUsingForEach() {
    numbers.forEach(function (element) {
        newArrForEach.push(String.fromCharCode(element));
        return newArrForEach;
    });
};
convertToCharCodeUsingForEach()
document.getElementById("forEach").innerHTML = newArrForEach.join(" ");

// Using the map method:

function convertToCharCodeUsingMap() {
    numbers.map(function(element) {
        newArrMap.push(String.fromCharCode(element));
    });
};
convertToCharCodeUsingMap();
console.log(newArrMap);
document.getElementById("map").innerHTML = newArrMap.join(" ");


// 2. Display numbers below showing only numbers that are greater than 72 and less then 88 (inclusive) using the filter method
// Answer:
const results = numbers.filter(result => result > 72 && result < 88);
console.log(results);
document.getElementById("filter").innerHTML = results.join(" ");

// 3. Display the product of all numbers using reduce
// Answer:

const answer = numbers.reduce((a, b) => { return a * b });
console.log(answer);
document.getElementById("reduce").innerHTML = answer;