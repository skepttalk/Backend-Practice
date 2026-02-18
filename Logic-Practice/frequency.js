let str = "aabbcc";

let freq = {};

// Count frequency
for (let i = 0; i < str.length; i++) {
    let char = str[i];
    freq[char] = (freq[char] || 0) + 1;
}

let found = false;

// Find first non-repeating
for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === 1) {
        console.log("First non-repeating:", str[i]);
        found = true;
        break;
    }
}

if (!found) {
    console.log("No single character found");
}
