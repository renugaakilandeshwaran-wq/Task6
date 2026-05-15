

// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array

// const { version } = require("react");



let presentStudents = ["Amirtha", "Ananth", "Aarthi", "Akilan"];
let absentStudents = ["Baveena", "Banu", "Zumaana", "Yazhini"]
let Allstudents = [...presentStudents, ...absentStudents]
Allstudents.push("Meena")
console.log(Allstudents);


// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object

let mobiledetails = {
    mobiletype: "android",
    mobilemodel: "vivoT3",
    mobileversion: 16,
}
let chargerdetails = {
    chargertype: "C",
    chargermodel: "Samsung",
    chargermode: "speed",
    lifetime: "60",
}

let products = {
    ...mobiledetails, ...chargerdetails, deliverydate: "16 May 2026"
};
console.log(products);


// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item
function orderFood(...items) {
    console.log("Total items ordered:", items.length);
    console.log("First Item:", items[0]);
    console.log("Last Item:", items[items.length - 1]);
}
orderFood("Idly", "Pongal", "Dosa", "Burger")

// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees

// Employee objects array
let employees = [
    {
        name: "Ravi",
        salary: 45000
    },
    {
        name: "Priya",
        salary: 60000
    },
    {
        name: "Arun",
        salary: 75000
    },
    {
        name: "Meena",
        salary: 40000
    }
];

let filteredEmployees = employees.filter((employee) => {
    return employee.salary > 50000;
});

console.log(filteredEmployees);


// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total
// Array of player scores

let scores = [100, 200, 150, 300, 250];

let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

console.log(totalScore);