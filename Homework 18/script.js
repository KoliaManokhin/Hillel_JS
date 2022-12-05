let a = [1, 2, 3, "hello", 4, 5];
let b = [1, 2, 3, true, 4, undefined, 6,];

function transformation(arr) {
    let coppyArr = arr.slice()
    let modified = [];
    for (let i = 0; i < coppyArr.length; i++) {
        if (!isNaN(arr[i]) && typeof (arr[i]) !== "boolean") {
            modified.push(coppyArr[i]);
        }

    }
    return modified;
}

let modifiedArrA = transformation(a);
let modifiedArrB = transformation(b);

function summArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function compare(summA, summB) {
    if (summA < summB) {
        return b
    } else if (summA === summB) {
        return "the amount is the same"
    } else {
        return a
    }
}

const summA = summArr(modifiedArrA);
const summB = summArr(modifiedArrB);

const summReturn = compare(summA, summB);
console.log(summReturn);

