// function moveZeros(arr) {
//     let j = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             j++;
//         }
//     }

//     return arr;
// }

// console.log(moveZeros([0,1,0,3,12]));


// let arr = [20, 0, 0, 43, 89, 3];
// let i = 0;
// let count = arr.length;

// while (i < count) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1);
//     arr.push(0);
//     count--;
//   } else {
//     i++;
//   }
// }

// console.log(arr);


let arr = [40,33,22,0,2,0,3,0,234]


for(let i =0;i<arr.length;i++){
    if(arr[i] === 0){
        arr.splice(i,1)
        arr.push(0);
    }
}

console.log(arr)

