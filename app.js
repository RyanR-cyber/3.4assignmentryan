function mupNumber(n1, n2) {
    return n1 * n2;
} // this is my function
let sum = mupNumber(5, 4); // 5 * 4 = 20
console.log(sum); // Output: 20

function moneyGained(m) {
   console.log("money");
   console.log("money");
} 
moneyGained(); // this is my function invoked

// create object with mutiple properties
const dog = {
    name: 'ozzyuddy',
    age: 7,
    color: 'black',
    breed: 'bulldog'
};
console.log(dog); // Output: { name: 'ozzyuddy', age: 7, color: 'black', breed: 'bulldog' }

function displayDate() {
  document.getElementById("demo").innerHTML = Date(); // This is a event
}

const name = "ryan";
let letter= name[3];
console.log(letter); // Output: a this is the use of string method

function subtract(a, b) {
    console.log(a - b);
}
subtract(10, 4); //  passing parameters in

