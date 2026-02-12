let arr = [30,54,545,4,34,4,55,3453,45]

let newarr = []

let n = arr.length - 1

for (let i = n; i >= 0; i--) {
    newarr.push(arr[i])
}

console.log("array reverse", newarr)
