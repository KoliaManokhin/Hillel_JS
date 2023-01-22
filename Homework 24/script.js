let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    }
];

Array.prototype.heroesRender = function (universe) {
    const Trs = this.map(function (heroes) {
        return `
            <tr>
                <td>${heroes.name}</td>
                <td><img src="images/${universe}/${heroes.name.toLowerCase().replaceAll(" ", ``)}.svg" width="30"></td>
            </tr>
        `
    }).join(``);

    document.write(`
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>${Trs}</tbody>
        </table>
    `)
}
dcHeroes.heroesRender("dc");
marvelHeroes.heroesRender("marvel");
