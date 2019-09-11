'use strict';

function Dog() {
  (this.name = 'puppy'), (this.color = 'white'), (this.numLeges = 4);
}

const hound = new Dog();
hound.name = 'max';
hound.color = 'black';
hound.numLegs = 6;

// Do not change or remove anything below this line
module.exports = hound;
