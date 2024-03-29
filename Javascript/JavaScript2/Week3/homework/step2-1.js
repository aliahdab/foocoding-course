// Code goes here

'use strict';

function foo(func) {
  const students = [
    {
      name: 'student1',
      result: 'pass',
    },
    {
      name: 'student2',
      result: 'fail',
    },
    {
      name: 'student3',
      result: 'fail',
    },
    {
      name: 'student4',
      result: 'pass',
    },
  ];

  const succeed = students.filter(student => student.result == 'pass');
  const succeedStudent = Object.keys(succeed).map(function(key) {
    return succeed[key].name;
  });
  func();
  console.log(succeedStudent + '! ' + ' congrats you have passed the exam, Hurray !!!!!!!!!');
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

module.exports = foo;
