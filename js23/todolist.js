document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskNameInput = document.getElementById('task-name');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const taskName = taskNameInput.value.trim();
        if (taskName) {
            const todo = { taskName, completed: false };
            const todos = getTodos();
            todos.push(todo);
            saveTodos(todos);
            renderTodos();
            taskNameInput.value = '';
        }
    }

    function deleteTodo(index) {
        const todos = getTodos();
        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos();
    }

    function toggleCompletion(index) {
        const todos = getTodos();
        todos[index].completed = !todos[index].completed;
        saveTodos(todos);
        renderTodos();
    }

    function renderTodos() {
        const todos = getTodos();
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo.taskName;
            if (todo.completed) {
                li.classList.add('completed');
            }
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => deleteTodo(index));

            li.addEventListener('click', () => toggleCompletion(index));

            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    function getTodos() {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    }

    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    renderTodos();
});