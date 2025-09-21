document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const todoForm = document.getElementById('addTodoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const todoCount = document.getElementById('todoCount');
    const clearCompletedBtn = document.getElementById('clearCompleted');
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    // State
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let currentFilter = 'all';
    
    // Initialize the app
    function init() {
        renderTodos();
        updateTodoCount();
        
        // Event listeners
        todoForm.addEventListener('submit', addTodo);
        clearCompletedBtn.addEventListener('click', clearCompletedTodos);
        
        filterButtons.forEach(button => {
            button.addEventListener('click', filterTodos);
        });
    }
    
    // Add a new todo
    function addTodo(e) {
        e.preventDefault();
        
        const text = todoInput.value.trim();
        if (text === '') return;
        
        const todo = {
            id: Date.now(),
            text,
            completed: false,
            timestamp: new Date().toISOString()
        };
        
        todos.push(todo);
        saveTodos();
        renderTodos();
        updateTodoCount();
        
        // Reset input
        todoInput.value = '';
        todoInput.focus();
    }
    
    // Render todos based on current filter
    function renderTodos() {
        // Clear the list
        todoList.innerHTML = '';
        
        // Filter todos
        let filteredTodos = todos;
        if (currentFilter === 'active') {
            filteredTodos = todos.filter(todo => !todo.completed);
        } else if (currentFilter === 'completed') {
            filteredTodos = todos.filter(todo => todo.completed);
        }
        
        // Render todos
        if (filteredTodos.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.className = 'list-group-item text-center text-muted py-4';
            
            if (currentFilter === 'all') {
                emptyMessage.textContent = 'No tasks yet. Add a new task to get started!';
            } else if (currentFilter === 'active') {
                emptyMessage.textContent = 'No active tasks. Enjoy your free time!';
            } else {
                emptyMessage.textContent = 'No completed tasks yet. Keep going!';
            }
            
            todoList.appendChild(emptyMessage);
        } else {
            filteredTodos.forEach(todo => {
                const todoItem = createTodoElement(todo);
                todoList.appendChild(todoItem);
            });
        }
    }
    
    // Create todo element
    function createTodoElement(todo) {
        const li = document.createElement('li');
        li.className = 'list-group-item todo-item fade-in';
        li.dataset.id = todo.id;
        
        if (todo.completed) {
            li.classList.add('completed');
        }
        
        li.innerHTML = `
            <input type="checkbox" class="form-check-input todo-checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="todo-text">${todo.text}</span>
            <div class="todo-actions">
                <button class="btn btn-sm btn-edit">Edit</button>
                <button class="btn btn-sm btn-delete">Delete</button>
            </div>
            <form class="edit-todo-form">
                <div class="input-group">
                    <input type="text" class="form-control edit-todo-input" value="${todo.text}">
                    <button class="btn btn-success btn-sm" type="submit">Save</button>
                </div>
            </form>
        `;
        
        // Add event listeners
        const checkbox = li.querySelector('.todo-checkbox');
        const todoText = li.querySelector('.todo-text');
        const editBtn = li.querySelector('.btn-edit');
        const deleteBtn = li.querySelector('.btn-delete');
        const editForm = li.querySelector('.edit-todo-form');
        const editInput = li.querySelector('.edit-todo-input');
        
        // Toggle completed
        checkbox.addEventListener('change', () => toggleCompleted(todo.id));
        todoText.addEventListener('click', () => toggleCompleted(todo.id));
        
        // Delete todo
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        
        // Edit todo
        editBtn.addEventListener('click', () => {
            todoText.style.display = 'none';
            editForm.style.display = 'flex';
            editInput.focus();
        });
        
        // Submit edit form
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newText = editInput.value.trim();
            if (newText !== '') {
                updateTodoText(todo.id, newText);
            }
            editForm.style.display = 'none';
            todoText.style.display = 'block';
        });
        
        // Cancel edit on escape key
        editInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                editForm.style.display = 'none';
                todoText.style.display = 'block';
            }
        });
        
        return li;
    }
    
    // Toggle completed status
    function toggleCompleted(id) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        
        saveTodos();
        renderTodos();
        updateTodoCount();
    }
    
    // Update todo text
    function updateTodoText(id, newText) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, text: newText };
            }
            return todo;
        });
        
        saveTodos();
        renderTodos();
    }
    
    // Delete todo
    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
        updateTodoCount();
    }
    
    // Clear completed todos
    function clearCompletedTodos() {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
        updateTodoCount();
    }
    
    // Filter todos
    function filterTodos(e) {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update filter
        currentFilter = e.target.dataset.filter;
        renderTodos();
    }
    
    // Update todo count
    function updateTodoCount() {
        const activeTodos = todos.filter(todo => !todo.completed).length;
        todoCount.textContent = `${activeTodos} item${activeTodos !== 1 ? 's' : ''} left`;
    }
    
    // Save todos to localStorage
    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    // Initialize the app
    init();
});