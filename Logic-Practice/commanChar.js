let str = "hello";
let str1 = "world";
let match = []

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str1.length; j++) {
    if (str[i] === str1[j]) {
       match.push(str[i])
    }
  }
}
  console.log("matched char:", match);