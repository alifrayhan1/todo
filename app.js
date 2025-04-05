let newTask = document.querySelectorAll(".newTask");
let mainContainer = document.querySelector(".main-container");
let textarea = document.querySelector("textarea");
let addButton = document.querySelector(".input button");
let ol = document.querySelector("ol");

newTask.forEach((task) => {
  task.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".input").classList.toggle("display");
    textarea.focus();
  });
});

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  let li = document.createElement("li");
  if (textarea.value.trim() !== "") {
    li.innerHTML = `${textarea.value}  <i class="fa-solid fa-trash"></i>`;
    ol.appendChild(li);
  }
  textarea.value = "";
  document.querySelector(".input").classList.toggle("display");
});

ol.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    const li = e.target.closest("li");
    if (li) {
      li.remove();
    }
  }
});
