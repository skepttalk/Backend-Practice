let strs = ["flower","flow","flight"] ;

let newStr = "";

    if (strs.length === 0) return "";

    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];

    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        newStr += first[i]
        i++;
    }


    console.log("comman perfix string",newStr)