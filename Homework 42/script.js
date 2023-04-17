const form = document.getElementById("container");
const userName = document.getElementById("userName");
const userDate = document.getElementById("userDate");
const button = document.getElementById("button");
const man = document.getElementById("man");
const woman = document.getElementById("woman");
const city = document.getElementById("city");
const userAdress = document.getElementById("userAdress");
const ukrLang = document.getElementById("ukrLang");
const engLang = document.getElementById("engLang");
const info = document.getElementById("info");
const gender = document.getElementById("gender");

button.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("p>span").innerText = ` ${userName.value}`;
    document.getElementById("year").innerText = ` ${userDate.value}`;

    if (man.checked) gender.innerText = ` ${man.value}`;
    if (woman.checked) gender.innerText = ` ${woman.value}`;

    document.getElementById("town").innerText = ` ${city.value}`;
    document.getElementById("street").innerText = ` ${userAdress.value}`;

    if (ukrLang.checked && engLang.checked) {
        document.getElementById("language").innerText = ` ${ukrLang.value}, ${engLang.value}`;
    } else if (ukrLang.checked) {
        document.getElementById("language").innerText = ` ${ukrLang.value}`;
    } else if (engLang.checked) {
        document.getElementById("language").innerText = ` ${engLang.value}`;
    };

    info.classList.remove("block");
    form.classList.add("block");
});