
// ES6 Javascript Tutorial For Beginners | ES6 Crash Course
// https://www.youtube.com/watch?v=WZQc7RUAg18


// Constants. Can't be modified once set.
// Other times, use let for variables. scope is within the bracket only.

const A = 1;
document.write(A + "<br />");
// A = 2;  Error: Assignment to constant variable.

const list = [1, 2, 3, 5];
for (let i = 0; i < list.length; i++) {
  document.write(i);
}


// document.write(i);  This is an error, i is not defined outside of the for-loop block


// See type
let message = "hello?";
document.write(message + " is " + typeof message + "<br />");


// String formattingf within ``
let name = "super mario!";
document.write(`hohoho-. ${message} ${name}<br />`);


// Dictinary/json obj
const person = {
  name: 'X',
  likes: 'water'
}
document.write(person.likes + "<br />");


// Arrow function. => ???


// Default function parameters, same as python
function sleepy(n = 9) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += 'z';
  }
  str += '...';
  document.write(str);
}

sleepy();


//
