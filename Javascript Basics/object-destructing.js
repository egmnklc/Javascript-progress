const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// const a = alphabet[0];
// const b = alphabet[1];

/*
    * Destruct the right hand side array:
    *- Since we have an array, we also create an array on the lhs.
    *- And fill in the values we want to supply.
    *- So as a result, a is a constant value that holds the first index of alphabet, and 
    *-  b is the second constant value that holds the second index of alphabet.
*/
const [a, b, c] = alphabet;
console.log(a, b, c);
console.log("--------------------------------------------------------");

/*
    * What if we wanted to skip an element?
    *     - We can just remove b and and leave the commas.
*/
const [d, ,e] = alphabet;
console.log(d, e);

/* 
    * What if we wanted to rest of the elements inside of alphabet?
    *   - That is where the spread operator comes in.
*/
console.log("--------------------------------------------------------");
/*
    * First element goes into f, second is skipped, third goes to g and remaning goes into rest in array type.
*/
const [f, , g, ...rest] = alphabet;
console.log(f,g,rest);
console.log(rest[0]);

const newArray = [...alphabet, ...numbers];
//* Another way to combine two arrays is:
const anotherArray = alphabet.concat(numbers);
console.log(newArray);
console.log(anotherArray);

/*
    * It is possible to destruct arrays returned from a function. 
    * Destruction could  be also made after assigning return value to a constant type.
    * You  can also assign default values for these variables, at line 54.
*/
function sumAndMultiply(a, b)
{
    return [a+b, a*b, a/b];
}

const result = sumAndMultiply(3, 5);
const [sum, multiple, division = "No division"] = result;

console.log(sum, multiple, division);


//* Object Destructuring
const personOne = 
{
    name: "Kyle",
    age: 24,
    favoriteFood: "Watermelon",
    address: 
        {
            city: "Somewhere",
            state: "New York"
        }
}

const personTwo = 
{
    name: "Sally",
    age: 32,
    address: 
        {
            city: "Somewhere else",
            state: "Another state"   
        }
} 
/* 
    * While destructuring an object, we use curly brackets instead of square brackets.
*/
const {name, age} = personOne;
//* Ignore error name is deprecated if it exists.
console.log("--------------------------------------------------------");
console.log(name, age);

/*
    * What if you want to use name with a different identifier? 
    *   - We can also use default values.
    * While using a different identifier, you use colon,
    *   While setting a default value, you use equal operator.
    * - We can deconstruct an object nested inside an object.
*/
const {name : firstName = "John", a_age, favoriteFood = "Rice", ...remaining} = personOne;
const {name: _firstName = "Doe", ..._rest} = personOne;
const {name: secondName = "Not Sally", address : {city} } = personTwo;
const {address : {street} } = personOne;

console.log(firstName, age, favoriteFood, remaining);
console.log(_firstName, _rest);
console.log("Playground for personOne ends");
console.log("--------------------------------------------------------");

console.log(city);
console.log(secondName, city);
console.log(street, 109); //* This will print out undefined because there isn't a key named street in address dictionary.
console.log("--------------------------------------------------------");

const personThree =  {...personOne, ...personTwo}; //* Last object will overwrite existing data.
console.log(personThree);
console.log("Playground for personThree ends");
console.log("--------------------------------------------------------");

 function printUser(user)
 {
    console.log(`Name is ${user.name} and age is ${user.age}`);
 }

// * Acessing object propery in a function with object destructuring.
 function printUser({name, age, facoriteFood = "apple"})
 {
    console.log(`Name is ${name} and age is ${age} and food is ${favoriteFood}`);
 }
 printUser(personOne);