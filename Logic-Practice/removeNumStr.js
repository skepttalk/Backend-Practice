let str = "151exhsd43";

let ostr = "";

let nstr = ""

let num = "0123456789";

for(let i=0; i<str.length;i++){
    if(num.includes(str[i])){
        ostr += str[i]
    }
    else{
     nstr += str[i]
    }
}

console.log("number from string:",ostr)
console.log("char from string:",nstr)