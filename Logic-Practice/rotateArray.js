//right rotate by one

let arr = [10,20,30,40,50,60,70];

let last = arr[arr.length - 1];

for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = last;

console.log(arr);



//left roatae by one
let arr = [10,20,30,40,50,60,70];

let first = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}

arr[arr.length - 1] = first;

console.log(arr);
