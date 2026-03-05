//using recursion

let person = {
    name: "kuldeep",
    age: 20,
    address: {
        city: "udaipur",
        pincode: 202020
    },
};

function flattenAnObject(obj, parent = "", res = {}) {

    for (let key in obj) {

        let propName = parent ? parent + "_" + key : key;

        if (typeof obj[key] === "object" && obj[key] !== null) {
            flattenAnObject(obj[key], propName, res);
            console.log()
        } 
        else {
            res[propName] = obj[key];
        }
    }

    return res;
}

console.log("flat object:", flattenAnObject(person));//recursion