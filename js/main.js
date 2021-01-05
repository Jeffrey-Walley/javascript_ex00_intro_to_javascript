/* using console commands

console.log('hello world');
console.error('this is an error');
console.warn('this is an warning');

*/

/* let, const

// initialized "score" var with let
let score;
score = 10;

*/

/* String, Numbers, Boolean, null, undefined, symbols 

const name = "Trelvyn"
const age = 5
const rating = 4.5;
const isBuff = true;
const x = null;
const y = undefined;
let z; //undefined also (a non initialized variable is undefined)

console.log(typeof isBuff); //reveals the value is a boolean value
*/

/*
const name = "Trelvyn";
const age = 5;

// learning about strings

// Conatenation
console.log('My name is ' + name + ' and i am ' + age);
//or
console.log(`my name is ${name} and i am ${age}`)
*/

// const hello = "ham, salad, chips, soda, cake";
/* console.log(hello.length); // reveals length of string */
/* console.log(hello.toUpperCase()); //method returns all uppercase characters */
/* console.log(hello.toLowerCase()); //method returns all lowercase characters */
/* console.log(hello.substring(0,5)); //method returns characters 0-5 <the word ham,  in this ex> */
/* console.log(hello.substring(0, 5)).toUpperCase()); // you can use chain multiple methods */
/* console.log(hello.split('')); // gives comma dileniated split output */
/* console.log(hello.split(', ')); // split into array output */

// Arrays - variables that hold multiple values for

/*const num = new Array(1, 2, 3, 4, 5);
console.log(numbers); */ // 'new'  is a constructor

/* const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits); */ // '[]' denotes array and displays the info in the array;

/* const fruits = ['apples', 'oranges', 'pears'];
   fruits[3] = 'grapes';
   console.log(fruits); */ // you can an item into an array this way, console.log includes 'grapes'

/* const fruits = ['apples', 'oranges', 'pears'];
    fruits.push('grapes'); // better way to add value to array is push to
    console.log(fruits); */ // you can an item into an array this way, console.log includes ''

/* const fruits = ['apples', 'oranges', 'pears'];
   fruits.unshift('grapes');
   console.log(fruits); */ // adds 'grapes' to the front of the Array

/* fruits.pop(); */ // removes the last item from the array 

// check to see if something is an array: console.log(Array.isArray());
// check index of a value: console.log(fruits.indexOf('oranges'));

// Object Literal (Objects)

/* const person = {
    firstName: 'Trelvyn',
    lastName: 'Martin-Walley',
    age: 5,
    hobbies: ['living', 'loving', 'licking', 'lounging'],
    address: {
        street: '900 Kitty Kat Lane',
        city: 'Shreveport',
        state: 'LA'
    }
} */

// console.log(person);
// console.log(person.firstName, person.lastName); // gives first firstName
// console.log(person.hobbies[1]); // gives 'movies'
// console.log(person.addresss.city); // gives 'Shreveport'

/* const { firstName, lastName } = person;
console.log(firstName); */ // deconstructs the object and assigns the value to the variable firstName

/* const { firstName, lastName, address: { city }} = person;
console.log(city); */ // deconstucts the object and assigns the value to the variable city, console.logs 'Shreveport'

/* person.email = 'trely@gmail.com';
console.log(person); */ // adds email into the object - console log shows the email is now added

// ARRAYS OF OBJECTS

/*  const todos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with Jim',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Clean out Desk',
        isCompleted: false,
    },
]; */

// console.log(todos[1].text); // would console.log 'Meeting with Jim'

// JSON
/* const todoJSON = JSON.stringify(todos);
console.log(todoJSON); */ // will give the JSON code for a server

// For LOOPS

/* for (let i = 0; i <= 10; i++) {
    console.log(i);
} */ // will console log count from 0 - 10

// While LOOPS

/* let i = 0;
while (i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
} */ // console.log "While Loop Number: 0" - "While Loop Number: 10"

// LOOPING with ARRAYS

/* for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
} */ //console.log "Take out trash" "Meeting with Jim" "Clean out Desk"

// FOR OF loops 
/* for (let todo of todos) {
    console.log(todo.text);
} */ // console.log "Take out trash" "Meeting with Jim" "Clean out Desk"

// High Order Array Methods: forEach, map, filter

/* todos.forEach(function(todo) {
    console.log(todo.text);
}); */ // forEach function -- console log: "Take out trash" "Meeting with Jim" "Clean out Desk"

/* const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText); */ //creates new Array of the info you put in: this creates a variable "todoText" from the map function of "todos"
// console.log will display: "Take out trash"... and it will have the .text property of the object assigned to a new variable

/* const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === false;
});
console.log(todoCompleted); */ // console log: 0: {id:2 "Meeting with Jim", isCompleted: false}; 1: {id:3, text: "Clean out Desk", isCompleted: false}

/* const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === false;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted); */
// chain additional ARRAY METHODS - console log: {"Meeting with Jim", "Clean out Desk"}


// CONDITIONALS

/* const x = 4;
const y = 10;

if (x > 5 || y > 10) {
    console.log('x is greater than 5 or y is more than 10');
} */