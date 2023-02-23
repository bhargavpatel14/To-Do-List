const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const todoText = todoInput.value;
  if (todoText === "") {
    alert("Please enter a to-do");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = todoText;
  li.appendChild(span);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  todoInput.value = "";
}

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
