let arr = [3,3,3,5,64,3,3,5,7,5,3,3,3,3,8];

let obj = {};
let majority = null;

for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    obj[value] = (obj[value] || 0) + 1;

    if (obj[value] > arr.length / 2) {
        majority = value;
        break;
    }
}

console.log("Majority element:", majority);

