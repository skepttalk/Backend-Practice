let arr = [1,2,4,6,7,99,9,58]

let miss =[]

arr.sort((a,b)=>a-b)
let min = arr[0];
let max = arr[arr.length-1]
for(i=min;i<max;i++){
  if(!arr.includes(i)){

    miss.push(i)
  }
}
console.log("missing numbers in array",miss)