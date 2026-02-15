let str = "bus";
let str2 = "sub";

if (str.length !== str2.length) {
    console.log("not anagram");
} else {
    for (let i = 0; i < str.length; i++) {
        let found = false;

        for (let j = 0; j < str2.length; j++) {
            if (str[i] === str2[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            console.log("its not an anagram");
            return;
        }
    }

    console.log("its an anagram");
}






function anagram (a1,a2){
    
    a1 = a1.split('').sort().join('')
    a2 = a2.split('').sort().join('')
    return a1 === a2;

}

const a1 = "file";
const a2 = "life";

if(anagram(a1,a2)){
    console.log(true)
}
else{
    console.log(false)
}
