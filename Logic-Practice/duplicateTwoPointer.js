



let arr = [1,1,2,2,3,4,4];

let i = 0; 

for (let j = 1; j < arr.length; j++) {

    if (arr[j] !== arr[i]) {
        i++;
        arr[i] = arr[j];
    }
}

console.log("Unique count:", i + 1);
console.log("Modified array:", arr.slice(0, i + 1));