let arr   = [1,2,33,5,8]
let arr1  = [1,2,3,5,8]

let isEqual = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr1[i]) {
        isEqual = false;
        break;
    }
}

if (isEqual) {
    console.log("array equal");
} else {
    console.log("array not equal");
}
