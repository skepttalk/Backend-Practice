let arr = [1,2,3];
let k = 3;

let map = {0: 1};   
let currentSum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {

    currentSum += arr[i];

    if (map[currentSum - k]) {
        count += map[currentSum - k];
    }

    map[currentSum] = (map[currentSum] || 0) + 1;
}

console.log(count);