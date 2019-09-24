
// ES6 Javascript Tutorial For Beginners | ES6 Crash Course
// https://www.youtube.com/watch?v=WZQc7RUAg1A8

// Constants. Can't be modified once set.
// Other times, use let for variables. scope is within the bracket only.

const A = 1;
document.write(A + "<br />");
// A = 2;  Error: Assignment to constant variable.

const list = [1, 2, 3, 5];
document.write("=========================<br />");
document.write("List is:<br />");
for (let i = 0; i < list.length; i++) {
  document.write(list[i] + "<br />");
}
document.write("=========================<br />");


// document.write(i);  This is an error, i is not defined outside of the for-loop block


// See type
let message = "hello?";
document.write(message + " is " + typeof message + "<br />");


// String formattingf within ``
let name = "super mario!";
document.write(`hohoho-. ${message} ${name}<br />`);


// Dictinary/json obj
// Keys are string only, and keys look like objects but they are strings
const person = {
  name: 'X',
  likes: 'water'
}
document.write(person.likes + "<br />");


// Default function parameters
function sleepy(n = 9) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += 'z';
  }
  str += '...';
  document.write(str + "<br />");
}

sleepy();
sleepy(3);
sleepy(11);


// Arrow function: Like lambda func in python
// https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html

// forEach: Array method. forloop. and getting index
list.forEach((x, index) => {
  document.write(`index is ${index}. value is ${x}.<br />`);
});

// map: Array method. Returns a new list from an existing list
const newList = list.map(x => x + 100);
document.write(newList + "<br />");

// filter: Array method. Returns a filtered list
const filteredList = list.filter(x => x > 2);
document.write(filteredList + "<br />")



