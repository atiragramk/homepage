const btn = document.querySelector("#btn");
const gif = document.querySelector(".fire");

console.log(btn);

btn.addEventListener("click", (event) => {
  event.preventDefault();
  gif.classList.toggle("fire");
});
