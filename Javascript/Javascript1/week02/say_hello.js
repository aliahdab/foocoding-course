/*1*/
console.log("Hej världen\n" /** Swedish**/, " Hello World\n" /*English*/, "Selam Dünya\n" /* Turkish*/);

/*2*/
console.log("I'm awesome");

/*3*/
let x;
console.log("The value will be: undefined");
console.log(x);
 x = 23;
console.log("The value will be: 23");
console.log(x);

/*4*/
let y = "Hello";
console.log("The value will be: Hello");
console.log(y);
y = "Hello World";
console.log("The value will be: Hello World");
console.log(y);

/*5*/

var z = 7.25;
console.log(z);
var a = Math.round(z);
console.log(a);
var hnum = Math.max(a,z);
console.log("The Highest Number is " + hnum );

/*6*/

let animals = [];
console.log("The value of my array will be: []");
console.log(animals); // the result will be empty array
animals = ["Cat", "Cow", "Horse"];
console.log(animals);   // the result will be array within three animals
animals.push("baby pig");  // here we add Daan's favorite animal ('baby pig') to the existing array.
console.log(animals);  

/*7*/

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

/*8*/
var tNumber = 23;
var tString= "string";
var tBoolean = true;
var tUndefined;
console.log("The value of the variable is: " + tNumber);
console.log("The value the variable is: " + tString);
console.log("The value the variable is: " + tBoolean);
console.log("The value the variable is: " + tUndefined);
console.log(typeof tNumber);
console.log(typeof tString);
console.log(typeof tBoolean);
console.log(typeof tUndefined);

if (typeof tNumber === typeof tString){
    console.log("they have same the type");
}else{
    console.log("they do not have same the type");
}

/*9*/

var x = 7;
x = x % 3;
console.log(x +" >>> this value is the division remainder of 7 on 3 ");
console.log(7 / 3 + " >>> it is the result of division 7 on 3 ");
console.log(2 * 3 + ">>> the value is the 2 multiply 3 ");
console.log(7 - 6 + ">>> the value is the 7 minus 6 ");

/*10*/

var listarray = [3 , "string", "4", 4];
console.log(6/0);
console.log(9/0);
console.log(6/0 === 10/0);
if(6/0 === 10/0){
    console.log("the infinities are equal");
}else{
    console.log("the infinities are not equal");
}