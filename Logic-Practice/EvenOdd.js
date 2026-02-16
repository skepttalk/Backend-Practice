let arr = [20,40,33,34,43,405,34]

let even = [];

let odd = [];

for(let i =0; i<arr.length;i++){
    if(arr[i] % 2 === 0){
     even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
}

console.log("even numbers:",even,"odd numbers:",odd)