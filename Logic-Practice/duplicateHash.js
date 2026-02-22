let input = [1, 2, 3, 4, 2, 5, 1];

let obj = {};
let result = [];

for (let i = 0; i < input.length; i++) {
    let value = input[i];

    obj[value] = (obj[value] || 0) + 1;

    if (obj[value] === 2) {   
        result.push(value);
    }
}

console.log(result);