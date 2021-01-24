//Selectors
const todoInput   = document.querySelector('.todo__input')
const todoButton  = document.querySelector('.todo__button')
const todoList    = document.querySelector('.todo__list')

//functions
let addTodo = (event) => {
    //Prevent submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //todo li
    const newTodo = document.createElement('li')
    newTodo.classList.add("todo__item")
    newTodo.innerHTML = todoInput.value;
    todoDiv.appendChild(newTodo)

    //Complete button
    const completeButton = document.createElement('button')
    completeButton.classList.add('complete__button')
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(completeButton)
    //Trash button
    const timesButton = document.createElement('button')
    timesButton.classList.add('times__button')
    timesButton.innerHTML = '<i class="fas fa-times"></i>'
    todoDiv.appendChild(timesButton)
    //Clear input value
    todoInput.value ="";
    //Append todo item
    todoList.appendChild(todoDiv)
}

let removeF = (event) => {
    const  it  = event.target
    //animation of removal
    if ( it.classList[0] === "times__button" ){
        const todoContainer = it.parentElement
        todoContainer.classList.add('animation')
        //removing transition element
        todoContainer.addEventListener('transitionend' , () => it.parentElement.remove())
    }
    
     if( it.classList[0] === "complete__button" ){
        it.parentElement.classList.toggle('completed')
    }
}
//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", removeF);