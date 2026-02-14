let fab = function (n){

    const arr = [0,1];

    for(let i = 2; i<=n;i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    console.log(arr)
};
fab(5);