// 1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

// 2. Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log("[ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");
console.log(favoriteAnimals);
console.log(" The array has a length of: " + favoriteAnimals.length);
let giraffeIndex = favoriteAnimals.indexOf("giraffe");
favoriteAnimals.splice(giraffeIndex, 1);
console.log(favoriteAnimals);
let meerkatIndex = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: " + meerkatIndex);


//More JavaScript 1

const sumThreeNumbers = (a, b, c) => {
    return a + b + c;
}
console.log(sumThreeNumbers(3, 4, 5));

//2
const colorCar = (color) => {
    console.log("a " + color + " car");
}
colorCar("green");

//3
let randomObject = {
    name: "foo",
    place: "malm?"
};
const printObject = (anyObject) => {
    console.log(anyObject);
}
printObject(randomObject);

//4
const vehicleType = (color, codeNumber) => {
    if (codeNumber === 1) {
        console.log("a " + color + " car");
    } else if (codeNumber === 2) {
        console.log("a " + color + " motorbike")
    }
}
vehicleType("green", 1);

//5
console.log((3 === 3) ? "Yes" : "No");

//6
const vehicleDetails = (color, codeNumber, age) => {
    let vehicleType;
    let isUsed;
    if (codeNumber === 1) {
        vehicleType = "car";
    } else if (codeNumber === 2) {
        vehicleType = "motorbike";
    }
    if (age > 0) {
        isUsed = "used";
    } else if (age === 0) {
        isUsed = "new";
    } else {
        isUsed = "wrong number";
    }
    console.log("a " + color + " " + isUsed + " " + vehicleType);
}
vehicleDetails("green", 1, 3);

//7
let listVehicle = ["car", "motorbike", "caravan", "bike",];

//8
listVehicle[2];

//9
const vehicleDetailsFromList = (color, codeNumber, age) => {
    let vehicleType;
    if (codeNumber >= 0 && codeNumber < listVehicle.length) {
        vehicleType = listVehicle[codeNumber];
    } else {
        vehicleType = "No such vehicle";
    }
    let isUsed;
    if (age > 0) {
        isUsed = "used";
    } else if (age === 0) {
        isUsed = "new";
    } else {
        isUsed = "wrong number";
    }
    console.log("a " + color + " " + isUsed + " " + vehicleType);
}
vehicleDetailsFromList("green", 2, 4);

//10

const writeAd = (listVehicle) => {

    let advertisementList = ["Amazing Joe's Garage, we service "];
    let listVehicleLenght = listVehicle.length;
    for (let i = 0; i < listVehicleLenght - 1; i++) {
        if (i !== listVehicleLenght - 2) {
            advertisementList.push(listVehicle[i], "s, ");
        } else {
            advertisementList.push(listVehicle[i], "s and ");
        }

    }
    advertisementList.push(listVehicle[listVehicleLenght - 1], "s.");
    let advertisement = advertisementList.join("");
    console.log(advertisement);
}
writeAd(listVehicle);

//11
listVehicle.push("track");
writeAd(listVehicle);

//12
let emptyObject = {};

//13
let fooTeachers = {
    peter: { module: "test" },
    albert: { module: "git" },
    tommy: { module: "html/cs" },
    fadi: { module: "html/js" },
    marcus: { module: "js" },
}
console.log(fooTeachers);

//14
fooTeachers.peter.language = "general";
fooTeachers.albert.language = "command line";
fooTeachers.tommy.language = "html and css";
fooTeachers.fadi.language = "javascripte";
fooTeachers.marcus.language = "javascript";
console.log(fooTeachers);

//15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// since we are dealing with arrays so the reference matters
console.log(x === y); //false because x and y does not refer to the same reference even they have the same type and the same values
console.log(x == y); //false because x and y does not refer to the same reference even they have the same values
console.log(z === y); // true because they have the same reference
console.log(z == x);  // false because they do not have the same reference

//16
let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log(o3);
o2.foo = "other bar";
console.log(o2);
console.log(o3);
// yes changing the order matters because it assigns from left to right

//17
let bar = 42;
typeof typeof bar;
console.log(typeof typeof bar);
//because the return of the typeof is a string that show the type of the variable, so the second typeof will return the type string