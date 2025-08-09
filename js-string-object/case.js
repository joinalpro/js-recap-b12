const school = "A. K. High School";

// console.log(school);

const subject = "Chemistry";
const book = "chemistry";

console.log(book.toUpperCase());

if (subject.toLowerCase() === book.toLowerCase()){
    console.log("I am reading book regulary.");
} 
else {
    console.log("not reading, waiting for dinner.");
}

const drink = "water";
const liquid = "  water"

console.log(drink);
console.log(liquid.trim());

if(drink === liquid.trim()){
    console.log("Drink more water");
}
else {
    console.log("collect the water.");
}