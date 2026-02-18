// let arr = [7, 1, 5, 3, 6, 4];

// let minPrice = Infinity;
// let maxProfit = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < minPrice) {
//         minPrice = arr[i];
//     } else {
//         let profit = arr[i] - minPrice;
//         if (profit > maxProfit) {
//             maxProfit = profit;
//         }
//     }
// }

// console.log(maxProfit);





let arr = [7, 1, 5, 3, 6, 4];
let maxProfit = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let profit = arr[j] - arr[i];
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
}

console.log(maxProfit);
