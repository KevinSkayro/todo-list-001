//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const item = todoList.children;

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
  //prevent button from reseting the page
  event.preventDefault();

  //Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  //place the li inside the div
  todoDiv.appendChild(newTodo);

  //Check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  //place the button inside the div
  todoDiv.appendChild(completedButton);

  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  //place the button inside the div
  todoDiv.appendChild(trashButton);

  //append the entire div to the list
  todoList.appendChild(todoDiv);

  //reset and delete todo input after submiting
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  if (item.classList[0] === "trash-btn") {
    const deleteItem = item.parentElement;
    deleteItem.classList.add("fall");
    deleteItem.addEventListener("transitionend", function () {
      deleteItem.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const completedItem = item.parentElement;
    completedItem.classList.toggle("completed");
  }
}
