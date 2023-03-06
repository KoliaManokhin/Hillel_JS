const table = document.createElement("div");

table.classList.add("container");

document.body.append(table);

for (let i = 1; i < 101; i++) {
    const div = document.createElement("div");
    div.classList.add("table-container");
    table.append(div);
    div.innerText = i;
};