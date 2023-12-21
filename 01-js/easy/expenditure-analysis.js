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

const transactions = [
  {
    "category": "Food",
    "totalSpent": 30,
  },
  {
    "category": "Clothing",
    "totalSpent": 40,
  },
  {
    "category": "Electronics",
    "totalSpent": 30,
  },
]

calculateTotalSpentByCategory(transactions)


function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  transactions.forEach(transaction => {
    // check if transaction.category in the answer, if present than increment the count value with it.
    for (let i = 0; i < ans.length; i++) {
      if (ans[i] && ans[i].category === transaction.category) {
        const temp = ans[i]["category"] + 1;
        ans[i].category = temp;
      }
    }
  });
  console.log("Ans: ", ans);

  return ans;
}

module.exports = calculateTotalSpentByCategory;
