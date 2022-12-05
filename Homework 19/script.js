const arr = [1, 2, 3, 4];

function copy(list, func) {
    coppyArr = [];
    for (let i = 0; i < list.length; i++) {
        coppyArr[i] = func(list[i]);
    }
    return coppyArr;
}

const newArr = copy(arr, function (value) { return value * 10; });

console.log(newArr);



