/* 
Your assignment is to build a simple app that calculates the amount of change or money back due to the user after purchasing an item.

Here are the things that should be included:

Prompt asking for the amount the user is paying.  Also tell the user how much they owe.

A function that takes the amount the user paying

The function should subtract the amount payed from the original cost

The function should return the difference from the calculation

*/

const item = 6.40;

let amountPaid = prompt("This item costs $" + (Math.round(item * 100) / 100).toFixed(2) + " How much will you be paying?");

function moneyDue(){

    let changeLeftOver = item - amountPaid;

    if (changeLeftOver == 0) {
        return console.log("You gave the exact amount.");
    } else if (changeLeftOver > 0) {
        return console.log("You gave too little. You still owe $" + (Math.round(changeLeftOver * 100) / 100).toFixed(2));
    } else if (changeLeftOver < 0) {
        return console.log("You gave too much. Your change due is $" + (Math.round(Math.abs(changeLeftOver * 100)) / 100).toFixed(2));
    } else {
        return console.log("Error occurred when calculating change due");
    }
}

console.log(moneyDue());

// ||||||||||||||||||||||||||||||||||||||||||||||||||||Refactored version using Eslint||||||||||||||||||||||||||||||||||||||||||||||||

const item = 6.40;

const amountPaid = prompt(`This item costs $${(Math.round(item * 100) / 100).toFixed(2)} How much will you be paying?`);

function moneyDue() {
  const changeLeftOver = item - amountPaid;

  if (changeLeftOver === 0) {
    return console.log('You gave the exact amount.');
  }
  if (changeLeftOver > 0) {
    return console.log(`You gave too little. You still owe $${(Math.round(changeLeftOver * 100) / 100).toFixed(2)}`);
  }
  if (changeLeftOver < 0) {
    return console.log(`You gave too much. Your change due is $${(Math.round(Math.abs(changeLeftOver * 100)) / 100).toFixed(2)}`);
  }
  return console.log('Error occurred when calculating change due');
}

console.log(moneyDue());
