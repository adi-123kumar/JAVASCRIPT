// using date class object in js

// creating the object of the Date()
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());

console.log(myDate.toISOString())
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log( typeof myDate)


// gives current time from 1970
console.log(Date.now())