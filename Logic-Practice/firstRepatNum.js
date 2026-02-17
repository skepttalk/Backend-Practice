let   array = [99,92,542,1,99,102]
let Rep = [];

for (let num of array) {

    if (array.indexOf(num) !== array.lastIndexOf(num)) {
        Rep = num;
        break;
    }
    else {
        Rep = "no repeating ";
    }
}


console.log("input:", array);
console.log(" first repeating number is:", Rep);