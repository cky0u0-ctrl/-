// 오늘의 할일을 저장하고 화면에 뿌려주는 클래스
export class TodoList {
    constructor(todo) {
        // 할일을 저장할 배열
        this.todos = [];
        // 할일의 목룍을 보여줄 요소
        this.todoItem = todo;
    }
    // 할일을 추가하는 메서드
    addTodo(todo) {
        this.todos.push(todo);
        console.log(this.todos);
        this.showTodos();
    }
    // 할일을 전부 삭제 메서드
    removeAll() {
        this.todos = [];
        this.showTodos();
    }
    // 할일 목록을 화면에 보여줄 메서드
    showTodos() {
        // 기존에 뿌려진 내용은 삭제
        this.todoItem.innerHTML = "";
        // 새롭게 배열을 다시 뿌려주기
        this.todos.forEach((t) => {
            let li = document.createElement("li");
            li.innerHTML = t;
            this.todoItem.append(li);
        })

    }
}