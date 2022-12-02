function main(a = 2, b = 3, c) {
    if (typeof (c) === `function`) {
        return c(sum(a, b))
    } else {
        return sum(a, b)
    }
}

function sum(a, b) {
    return a + b;
}

function example() {
    return 5 + 5;
}

console.log(main(8, 10, example))

