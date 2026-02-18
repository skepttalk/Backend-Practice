let arr = [-2,1,-3,4,-1,2,1,-5,4]

let sum = "";

for(let i=0; i<arr.length;i++){
    if(!sum.includes(arr[i])){
       sum += arr[i]
    }
    else{
        break;
    }
}
console.log(sum)