let str = "madam";
let n = str.length - 1;
let str2 = "";

for (let i = n; i >= 0; i--) {
  str2 += str[i];
}

if (str === str2) {
  console.log(true);
} else {
  console.log(false);
}
