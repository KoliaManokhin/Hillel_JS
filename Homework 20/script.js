const numberArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

//1)Знайти суму та кількість позитивних елементів
const amountPositiveElement = numberArr.filter(function (number) {
    return number >= 0;
})
function summPositiveElement(arr) {
    let summ = 0;
    arr.forEach(function (number) {
        summ += number;
    })
    return summ;
}
const summPositive = summPositiveElement(amountPositiveElement)
console.log(`1)Сумма позитивных элементов = ${summPositive}, а их количество = ${amountPositiveElement.length}`);

//2)Знайти мінімальний елемент масиву та його порядковий номер
function findeMinElement(arr) {
    let minElement = numberArr[0];
    const min = arr.forEach(function (number) {
        if (number < minElement) {
            minElement = number
        }
    })
    return minElement;
}
const minElementArr = findeMinElement(numberArr);
console.log(`2)Минимальний элемент масива = ${minElementArr}, а его порядковый номер = ${numberArr.indexOf(minElementArr)}`)

//3)Знайти максимальний елемент масиву та його порядковий номер.
function findeMaxElement(arr) {
    let maxElement = numberArr[0];
    const min = arr.forEach(function (number) {
        if (number > maxElement) {
            maxElement = number
        }
    })
    return maxElement;
}
const maxElementArr = findeMaxElement(numberArr);
console.log(`3)Максимальний элемент масива = ${maxElementArr}, а его порядковый номер = ${numberArr.indexOf(maxElementArr)}`)

//4)Визначити кількість негативних елементів
const amountNegativeElement = numberArr.filter(function (number) {
    return number < 0;
})
console.log(`4)Количество негативных элементов = ${amountNegativeElement.length}`);

//5)Знайти кількість непарних позитивних елементів
const amountPositiveNoPareElement = amountPositiveElement.filter(function (number) {
    return number % 2 !== 0;
})
console.log(`5)Количество непарных позитивных елементов масива = ${amountPositiveNoPareElement.length}`)

//6)Знайти кількість парних позитивних елементів
const amountPositivePareElement = amountPositiveElement.filter(function (number) {
    return number % 2 === 0;
})
console.log(`6)Количество парных позитивных елементов масива = ${amountPositivePareElement.length}`)

//7)Знайти суму парних позитивних елементів.
const summPositivePareElement = summPositiveElement(amountPositivePareElement)
console.log(`7)Сумма парных позитивных элементов = ${summPositivePareElement}`)

//8)Знайти суму непарних позитивних елементів.
const summPositiveNoPareElement = summPositiveElement(amountPositiveNoPareElement)
console.log(`8)Сумма непарных позитивных элементов = ${summPositiveNoPareElement}`)

//9)Знайти добуток позитивних елементів
function multiplication(arr) {
    let multi = 1;
    const multiplicationArr = arr
        .forEach(function (number) {
            multi *= number
        })
    return multi;
}
const multiplicationPositiveElement = multiplication(amountPositiveElement);
console.log(`9)Произведение позитивных элементов = ${multiplicationPositiveElement}`)

//10)Знайти найбільший серед елементів масиву, ост альні обнулити
numberArr.forEach(function (number, index) {
    if (number === maxElementArr) {
        numberArr[index] = number;
    } else {
        numberArr[index] = 0
    }
})
console.log(`В масиве остался самый большое число элементов масива, остальные обнулены [${numberArr}]`)
