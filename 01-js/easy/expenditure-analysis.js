/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// --------- DONE -----------

function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  transactions.forEach(transaction => {
    const transactionIndex = ans.findIndex(t => t.category === transaction.category);
    if (transactionIndex === -1) {
      ans.push({
        category: transaction.category,
        totalSpent: transaction.price,
      })
    }
    else {
      let temp = ans[transactionIndex].totalSpent + transaction.price;
      ans[transactionIndex].totalSpent = temp;
    }
  });

  return ans;
}

module.exports = calculateTotalSpentByCategory;
