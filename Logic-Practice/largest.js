let arr = [10,30,43,54,345,43]

let n = arr[0]

for(i=1;i<arr.length;i++){
    if(n<arr[i]){
        n  = arr[i]
    }
}
console.log("max num:",n)