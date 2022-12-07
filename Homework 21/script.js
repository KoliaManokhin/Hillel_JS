let amount = 100;

let monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];

let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

function render(arr) {
    const modifiedArr = arr
        .map(function (cours) {
            cours[1] = cours[1] / 60
            return cours
        })
        .filter(function (cours) {
            return cours[1] > 2;
        })
        .map(function (cours) {
            cours.push(cours[1] * amount)
            return cours
        })
        .map(function (cours) {
            return `
                <tr>
                    <td>Task name: ${cours[0]}</td>
                    <td>Taks duration: ${cours[1]} hours</td>
                    <td>Task amount: ${cours[2]}$</td>
                </tr>
            `
        })
        .join("")
    return modifiedArr;
}

const modifiedTuesday = render(tuesday);
const modifiedMonday = render(monday);

document.write(`
    <table>
        ${modifiedTuesday}
        ${modifiedMonday}
    </table>
`)