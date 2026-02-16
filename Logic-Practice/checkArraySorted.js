function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

let arr = [200, 50, 434, 4354, 5544];
console.log(isSorted(arr));
