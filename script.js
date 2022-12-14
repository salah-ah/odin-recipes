console.log('script.js');

// write a function to get the current date
function getCurrentDate() {
    const date = new Date();
    return date;
    }

// write a function to
let date = getCurrentDate();
console.log(date);
let person = {
    name: 'John',
    age: 30,
    date: date,
    isAdmin: true,
    address: {
        street: 'Main Street',
        city: 'New York',
        state: 'NY'
    }
}