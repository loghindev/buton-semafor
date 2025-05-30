const btn = document.querySelector(".btn");
const togglerBtn = document.getElementById("togglerBtn");

const colors = ["bg-danger", "bg-warning", "bg-success"]; // bootstrap class
let index = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", startAutoChange);

function changeColor() {
  btn.classList.replace(colors[index], colors[++index]);
  if (index === colors.length) {
    index = -1;
    btn.classList.replace(colors[index], colors[++index]);
  }
}

// useless functionality here.
togglerBtn.addEventListener("click", (event) => {
  if (intervalId !== null) {
    stopAutoChange();
    event.target.textContent = "Auto changer is: off";
  } else {
    startAutoChange();
    event.target.textContent = "Auto changer is: on";
  }
});

function startAutoChange() {
  intervalId = setInterval(changeColor, 5000);
}

function stopAutoChange() {
  clearInterval(intervalId);
  intervalId = null;
}
