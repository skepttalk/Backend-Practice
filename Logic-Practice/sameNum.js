let Same = [92,94,93,96,92,92,96]
let count =1;
let Repeat =[]

for(let i=0; i<Same.length;i++){

  if (!Repeat.includes(Same[i])) {
    Repeat = Repeat.concat(Same[i]);
    for (let j = i + 1; j < oStr.length; j++) {
      if (oStr[i] === oStr[j]) {
        count++;
      }
    }
}
}