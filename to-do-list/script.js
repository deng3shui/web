const form = document.getElementById("form")
const input=document.getElementById("input")
const todosUL=document.getElementById("todos")
const todos = JSON.parse(localStorage.getItem('todos')) //将本地内容转为js
if(todos) {
    todos.forEach(todo => addTodo(todo)) //显示本地存储内容
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
})
function addTodo(todo){
    let todoText=input.value

    if(todo){
        todoText=todo.text //存在本地内容
    }
    if(todoText){

        const todoEl=document.createElement("li")
        if(todo&&todo.complete){
            todoEl.classList.add("completed")
        }
        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            //toggle() 方法切换元素的可见状态。如果被选元素可见，则隐藏这些元素，如果被选元素隐藏，则显示这些元素。
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}
function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}
