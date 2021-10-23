// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
// Print Statement
console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c,d  ) * 2;
    return total;
  }
// Print *Arropw function*
  printHello = () => "Hello there!";

// Converted to an arrow function
addition = (a, b) => a + b;




//For loop, below is the array then the for loop
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 //Vegetables 11.4.2

 // Array and for loop
 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 }


 // For loop of number without an array
 for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 // Calling a new function
 function buildTable(data) {

}

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
