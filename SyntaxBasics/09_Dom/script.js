const heading = (document.getElementById("h1").textContent = "sprouts");
const body = document.querySelector("body");
const nightBtn = document.querySelector(".night");
nightBtn.addEventListener("click", () => {
  body.classList.toggle("day-mode");
});
const btnChange = document.querySelector(".btnChange");
const paragraph = document.querySelector(".para");
btnChange.addEventListener("mouseover", () => {
  paragraph.textContent = "nothing's here let's go";
});
