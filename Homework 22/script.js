const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

function convert() {
    newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            for (let innerKey in obj[key]) {
                newObj[innerKey] = obj[key][innerKey]
            }
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const convertObj = convert(obj);

console.log(convertObj);