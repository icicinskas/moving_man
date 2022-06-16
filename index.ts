const rollDice = document.querySelector("button") as HTMLButtonElement;
const diceImage = document.querySelector("i") as HTMLElement;
const points = document.querySelector("h2") as HTMLElement;
const manImage = document.querySelector("img") as HTMLImageElement;
const divFields = document.querySelectorAll("div") as NodeListOf<HTMLElement>;
const divStar = document.querySelector(".start") as HTMLElement;

const dice: string[] = [
  "fa-solid fa-dice-one",
  "fa-solid fa-dice-two",
  "fa-solid fa-dice-three",
  "fa-solid fa-dice-four",
  "fa-solid fa-dice-five",
  "fa-solid fa-dice-six",
];

let idValue: number = 0;
let pointsValue: number = 0;
const man: string = "man.png";

rollDice.onclick = () => {
  const random: number = Math.floor(Math.random() * 6) + 1;
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

    if (idValue > 0) deleteMan();

    divFields.forEach((x) => (Number(x.id) === idValue ? createMan(x) : x));
  }
};

function createMan(x: any): void {
  const img = document.createElement("img") as HTMLImageElement;
  img.className = "temporary-man";
  img.src = man;
  x.append(img);
}

function deleteMan(): void {
  const removeImg = document.querySelector(".temporary-man");
  removeImg?.remove();
}
