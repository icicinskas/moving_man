"use strict";
const rollDice = document.querySelector("button");
const diceImage = document.querySelector("i");
const points = document.querySelector("h2");
const manImage = document.querySelector("img");
const divFields = document.querySelectorAll("div");
const divStar = document.querySelector(".start");
const dice = [
    "fa-solid fa-dice-one",
    "fa-solid fa-dice-two",
    "fa-solid fa-dice-three",
    "fa-solid fa-dice-four",
    "fa-solid fa-dice-five",
    "fa-solid fa-dice-six",
];
let idValue = 0;
let pointsValue = 0;
const man = "man.png";
rollDice.onclick = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    dice.forEach((d, i) => (random - 1 === i ? (diceImage.className = d) : i++));
    if (random) {
        idValue += random;
        manImage.style.visibility = "hidden";
        if (idValue >= 38) {
            pointsValue += 200;
            points.innerText = "points: " + pointsValue;
            manImage.style.visibility = "visible";
            deleteMan();
            idValue = 0;
        }
        if (idValue > 0)
            deleteMan();
        divFields.forEach((x) => (Number(x.id) === idValue ? createMan(x) : x));
    }
};
function createMan(x) {
    const img = document.createElement("img");
    img.className = "temporary-man";
    img.src = man;
    x.append(img);
}
function deleteMan() {
    const removeImg = document.querySelector(".temporary-man");
    removeImg === null || removeImg === void 0 ? void 0 : removeImg.remove();
}
