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

function calculateTotalSpentByCategory(transactions) {
  let cat=[];
  let output=[];
  let val=0;
  
  for(var i=0;i<transactions.length;i++){
    cat[i]=transactions[i].category;
  }

  // ... is spread operator in javascript 
  cat=[...new Set(cat)];
 
  for(var i=0;i<cat.length;i++){
    for(var j=0;j<transactions.length;j++){
      if(transactions[j].category==cat[i]){
        val=val+transactions[j].price
      }
    }
    // console.log(cat[i]+" "+val)
    let obj={category:cat[i].toString(), totalSpent:val};
    // console.log(obj);
    output.push(obj);
    val=0;
  }
  // output.forEach((element)=>{console.log(element)});
  return output;
}

// const transactions=[{
//   id: 1,
//   timestamp: 1656076800000,
//   price: 10,
//   category: 'Food',
//   itemName: 'Pizza',
// },
// {
//   id: 2,
//   timestamp: 1656076800002,
//   price: 20,
//   category: 'Travel',
//   itemName: 'Fuel',
// },{
//   id: 3,
//   timestamp: 1656076800003,
//   price: 30,
//   category: 'Clothing',
//   itemName: 'Dress',
// },{
//   id: 4,
//   timestamp: 1656076800004,
//   price: 40,
//   category: 'Leisure',
//   itemName: 'Perfume',
// },{
//   id: 5,
//   timestamp: 1656076800005,
//   price: 50,
//   category: 'Food',
//   itemName: 'Roll',
// }];

// calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
