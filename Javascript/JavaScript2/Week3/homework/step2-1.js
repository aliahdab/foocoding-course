// Code goes here

'use strict';

function foo(func) {
  const students = ['student1', 'student2', 'student3'];
  students.forEach(function(student) {
    // eslint-disable-next-line no-console
    console.log(student + '! ' + ' congrats you have passed the exam, let us celebrate');
    func();
  });
}

function bar() {
  // eslint-disable-next-line no-console
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
