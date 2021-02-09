//Selectors
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");
const filterOptions = document.querySelector(".todo__filter");
//functions
let addTodo = (event) => {
  //Prevent submitting
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //todo li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo__item");
  newTodo.innerHTML = todoInput.value;
  todoDiv.appendChild(newTodo);
  //save to local storage
  saveToLocalStorage(todoInput.value);
  //Complete button
  const completeButton = document.createElement("button");
  completeButton.classList.add("complete__button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completeButton);
  //Trash button
  const timesButton = document.createElement("button");
  timesButton.classList.add("times__button");
  timesButton.innerHTML = '<i class="fas fa-times"></i>';
  todoDiv.appendChild(timesButton);
  //Clear input value
  todoInput.value = "";
  //Append todo item
  todoList.appendChild(todoDiv);
};

let removeF = (event) => {
  const it = event.target;
  //animation of removal
  if (it.classList[0] === "times__button") {
    const todoContainer = it.parentElement;
    todoContainer.classList.add("animation");
    //removing transition element
    todoContainer.addEventListener("transitionend", () =>
      it.parentElement.remove()
    );
  }

  if (it.classList[0] === "complete__button") {
    it.parentElement.classList.toggle("completed");
  }
  removeFromLocalStorage()
};
// filter function
let filterTodo = (e) => {
  const todos = document.querySelectorAll(".todo");
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};
//save to local storage
let saveToLocalStorage = (todo) => {
  //check local storage
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
// get to do from local stoarge
let getTodo = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //todo li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo__item");
    newTodo.innerHTML = todo;
    todoDiv.appendChild(newTodo);
    //Complete button
    const completeButton = document.createElement("button");
    completeButton.classList.add("complete__button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completeButton);
    //Trash button
    const timesButton = document.createElement("button");
    timesButton.classList.add("times__button");
    timesButton.innerHTML = '<i class="fas fa-times"></i>';
    todoDiv.appendChild(timesButton);
    //Append todo item
    todoList.appendChild(todoDiv);
  });
};
//remove from local stoarge
let removeFromLocalStorage = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(todos , 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};
//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeF);
todoList.addEventListener("click", removeF);
filterOptions.addEventListener("change", filterTodo);
document.addEventListener("DOMContentLoaded", getTodo);
