const div = document.querySelector("div");
const button = document.querySelector("button");

button.addEventListener("click", (a) => {
    a.preventDefault();
    const input = document.querySelector("input").value;
    const select = document.querySelector("select").value;
    div.className = '';
    div.classList.add(`${select}`);
    div.style = `background-color: ${input}`;
});