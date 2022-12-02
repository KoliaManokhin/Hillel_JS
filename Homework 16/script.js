function first(f) {
    console.log(f);
    return function second(s) {
        console.log(f + s);
        return function third(t) {
            console.log(f + s + t)
        }
    }
}

const firstCalcOperation = first(3);
const secondCalcOperation = firstCalcOperation(5);
secondCalcOperation(20);

