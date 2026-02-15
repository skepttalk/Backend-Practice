let oStr = "aabbeqwwat";
let str = "";

for (let i = 0; i < oStr.length; i++) {
  let count = 1;

  if (oStr.indexOf(oStr[i]) !== i) continue;

  for (let j = i + 1; j < oStr.length; j++) {
    if (oStr[i] === oStr[j]) {
      count++;
    }
  }

  str += oStr[i] + count;
}

console.log(str);
