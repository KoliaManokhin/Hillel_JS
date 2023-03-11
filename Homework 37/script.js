const element_1 = document.getElementById("box-1");
const element_2 = document.getElementById("box-2");
const element_3 = document.getElementById("box-3");
const element_4 = document.getElementById("box-4");
const element_5 = document.getElementById("box-5");

const counter_1 = document.getElementById("counter-1");
const counter_2 = document.getElementById("counter-2");
const counter_3 = document.getElementById("counter-3");
const counter_4 = document.getElementById("counter-4");
const counter_5 = document.getElementById("counter-5");

//scream emoji clicker
let scream = 0;
element_1.addEventListener("click", () => {
    scream += 1;
    counter_1.innerText = scream;
});

//cool emoji clicker
let cool = 0;
element_2.addEventListener("click", () => {
    cool += 1;
    counter_2.innerText = cool;
});

//cry emoji clicker
let cry = 0;
element_3.addEventListener("click", () => {
    cry += 1;
    counter_3.innerText = cry;
});

//think emoji clicker
let think = 0;
element_4.addEventListener("click", () => {
    think += 1;
    counter_4.innerText = think;
});

//angry emoji clicker
let angry = 0;
element_5.addEventListener("click", () => {
    angry += 1;
    counter_5.innerText = angry;
});