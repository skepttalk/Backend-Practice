// let nums = [-1,0,1,2,-1,-4];

// let result = [];

// for(let i = 0; i < nums.length; i++) {

//     for(let j = i + 1; j < nums.length; j++) {

//         for(let k = j + 1; k < nums.length; k++) {

//             if(nums[i] + nums[j] + nums[k] === 0) {
//                 result.push([nums[i], nums[j], nums[k]]);
//             }

//         }
//     }

// }

// console.log("3 number sum  which is equal to zero and not same as other array",result);



let nums = [-1,0,1,2,-1,-4];

nums.sort((a,b)=>a-b);

let result = [];

for(let i = 0; i < nums.length - 2; i++){

    let left = i + 1;
    let right = nums.length - 1;

    while(left < right){

        let sum = nums[i] + nums[left] + nums[right];

        if(sum === 0){
            result.push([nums[i], nums[left], nums[right]]);
            left++;
            right--;
        }
        else if(sum < 0){
            left++;
        }
        else{
            right--;
        }

    }
}

console.log("with Two pointer 3 sum which gives 3 num of array sum equal to zero ",result);