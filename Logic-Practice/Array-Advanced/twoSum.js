let arr = [40,6,34,65,34,60];
let target = 100;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log("Pair found:", arr[i], arr[j]);
        }
    }
}





let left = 0;
let right = arr.length - 1;

while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
        console.log(arr[left], arr[right]);
        break;
    }
    else if (sum < target) {
        left++;
    }
    else {
        right--;
    }
}
