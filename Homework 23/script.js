function assignObjects(obj1, obj2) {
    newObj = {};
    for (const key in obj1) {
        newObj[key] = obj1[key]
    }
    for (const key in obj2) {
        newObj[key] = obj2[key]
    }
    return newObj;
}

const modificedObjRepeat = assignObjects({ x: 40, y: 30 }, { x: 20 });
const modificedObjNoneRepeat = assignObjects({ x: 20, y: 30 }, { z: 40 });
console.log(modificedObjRepeat);
console.log(modificedObjNoneRepeat);