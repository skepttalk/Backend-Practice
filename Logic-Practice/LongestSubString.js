let str = "kuldeep";

let longestNonRepeat = "";

for(let i=0; i<str.length;i++){
    if(!longestNonRepeat.includes(str[i])){
        longestNonRepeat += str[i]
    }
    else{
        break;
    }
}
console.log("longest Non Repeat String:",longestNonRepeat)