let str = "helloare"

let vowel = "aeiou";

let constent = "";

let v = "";

for(let i=0;i<str.length;i++){

if(!vowel.includes(str[i])){
    constent = constent + str[i]
}
else{
 v = v+ str[i]
}
}

console.log("constent:",constent,"vowel:",v)