const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// #ff15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const colorCode = hexcode();
  color.textContent = colorCode;
  document.body.style.backgroundColor = colorCode;
});

//hexCode Generator :
function hexcode() {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += randomGenerator();
  }
  return hexCode;
}

// random code generator from hex[]
function randomGenerator() {
  return hex[Math.floor(Math.random() * hex.length)];
}
