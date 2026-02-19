let arr = [1,2,3,7,11,15,34];
let target = 9;

let map = {};

for(let i = 0; i < arr.length; i++){
    let complement = target - arr[i];

    if(map[complement] !== undefined){
        console.log("Pair found:", complement, arr[i]);
        break;
    }

    map[arr[i]] = i;
}

