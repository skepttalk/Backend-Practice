let str = "aadfdfdfnjnnnnr";

let freq = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freq[char] = (freq[char] || 0) + 1;
}

console.log("frequency are", freq);



