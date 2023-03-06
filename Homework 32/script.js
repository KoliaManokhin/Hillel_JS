const id = document.getElementById("hover");
const div = document.querySelector("div");
id.onmouseenter = () => div.classList.add("div");
id.onmouseleave = () => div.classList.remove("div");