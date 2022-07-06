console.log("Hello World");

let name = "Egemen";
console.log(name);

let person = {name:"Egemen", age:21};
// Dot Notation
person.age = 22;
// Bracket Notaton
//* While using bracket notation, in order to directly use the string phrase of the key, you need to type it 
//*     as if it is a string.
let selection = 'age';
person[selection] = 24;

console.log(person.age);


// Arrays
//* It can store multiple datatypes in an array.
let selectedColors = [1, 'red', 'green', 'yellow', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);

// Funtions
function greet(name, lastName){
    console.log("Hello " + name + " " + lastName);
}

greet("Egemen", "Kilic");
greet("Asude");
greet("Asude", "Alim");

//! THE DEFAULT VALUE IN JS IS UNDFEDINED

function squareOf(number)
{
    return number ** 2;
}

let num = 3;
let num_squared = squareOf(num);
console.log(num_squared);
