let arr = [-1, -2, -3, 4,0, 5, 6, -2];

let neg = [];
let post = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        neg.push(arr[i]);   
    } else {
        post.push(arr[i]);  

    }
}

console.log( "negavite number from array",neg); 
console.log("postive number from  array", post); 
console.log("negavite numbers length:",neg.length)
console.log("Positive number length:",post.length)