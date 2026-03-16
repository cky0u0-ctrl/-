import { TodoList } from "./TodoList.js";
let todoInput = document.querySelector(".todo-input");
let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let todoList = document.querySelector(".todo-list");

// let todoMemo = document.querySelectorAll(".todo-list>li");

// 
let todo = new TodoList(todoList)

addBtn.addEventListener("click", () => {
    let todoValue = todoInput.value.trim();
    if (todoValue) {
        todo.addTodo(todoValue);
        todoInput.value = "";
        todoInput.focus();
    }
})


removeBtn.addEventListener("click", () => {
    todo.removeAll();
})





todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        // let todovalue = todoInput.value;
        // todo.addTodo(todovalue)
        // todoInput.value = "";
        // todoInput.focus();

        //  이미지 만들어진 이벤트를 강제로 실행할때
        addBtn.click();
    }
})

