let arr = [20,20,40,50,60,40];

let newarr = [];

for(let i=0; i<arr.length;i++){
    if(!newarr.includes(arr[i])){
        newarr.push(arr[i])
    }
}

console.log("duplicate removed",newarr);