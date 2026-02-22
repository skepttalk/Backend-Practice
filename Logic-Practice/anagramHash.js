let str = "silent";
let nstr = "listen";

if (str.length !== nstr.length) {
    console.log("Not an anagram");
    return;
}

let map = {};


for (let char of str) {
    map[char] = (map[char] || 0) + 1;
}

for (let char of nstr) {
    if (!map[char]) {
        console.log("Not an anagram");
        return;
    }
    map[char]--;
}

console.log("It is an anagram");