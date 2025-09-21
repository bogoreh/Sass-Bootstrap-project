class TodoApp {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.currentFilter = 'all';
        this.currentPriority = 'all';
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        // Add todo form
        document.getElementById('add-todo-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTodo();
        });

        // Filter buttons
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Priority filter
        document.querySelectorAll('.dropdown-item[data-priority]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.setPriorityFilter(e.target.dataset.priority);
            });
        });

        // Theme toggle (optional)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'd') {
                this.toggleTheme();
            }
        });
    }

    addTodo() {
        const input = document.getElementById('todo-input');
        const priority = document.getElementById('priority-select').value;
        const text = input.value.trim();

        if (text) {
            const todo = {
                id: Date.now(),
                text: text,
                completed: false,
                priority: priority,
                createdAt: new Date().toISOString()
            };

            this.todos.unshift(todo);
            this.saveTodos();
            this.render();
            input.value = '';
            input.focus();
        }
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveTodos();
            this.render();
        }
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id);
        this.saveTodos();
        this.render();
    }

    setFilter(filter) {
        this.currentFilter = filter;
        this.updateActiveFilterButtons();
        this.render();
    }

    setPriorityFilter(priority) {
        this.currentPriority = priority;
        this.render();
    }

    updateActiveFilterButtons() {
        document.querySelectorAll('.btn-filter').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === this.currentFilter);
        });
    }

    getFilteredTodos() {
        let filtered = this.todos;

        // Apply status filter
        if (this.currentFilter === 'active') {
            filtered = filtered.filter(todo => !todo.completed);
        } else if (this.currentFilter === 'completed') {
            filtered = filtered.filter(todo => todo.completed);
        }

        // Apply priority filter
        if (this.currentPriority !== 'all') {
            filtered = filtered.filter(todo => todo.priority === this.currentPriority);
        }

        return filtered;
    }

    render() {
        const filteredTodos = this.getFilteredTodos();
        const todoList = document.getElementById('todo-list');
        
        todoList.innerHTML = filteredTodos.length === 0 ? 
            '<div class="text-center text-muted py-4">No tasks found</div>' : 
            filteredTodos.map(todo => this.createTodoElement(todo)).join('');

        this.updateStats();
    }

    createTodoElement(todo) {
        return `
            <div class="todo-item d-flex align-items-center justify-content-between p-3 mb-2 priority-${todo.priority} ${todo.completed ? 'completed' : ''} fade-in">
                <div class="d-flex align-items-center flex-grow-1">
                    <input type="checkbox" class="form-check-input todo-checkbox me-3" 
                           ${todo.completed ? 'checked' : ''} 
                           onchange="app.toggleTodo(${todo.id})">
                    <span class="priority-dot ${todo.priority}"></span>
                    <p class="todo-text mb-0">${this.escapeHtml(todo.text)}</p>
                </div>
                <div class="todo-actions">
                    <button class="btn btn-sm btn-danger btn-delete ms-2" 
                            onclick="app.deleteTodo(${todo.id})">
                        <i class="bi bi-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    }

    updateStats() {
        const total = this.todos.length;
        const completed = this.todos.filter(t => t.completed).length;
        const active = total - completed;

        document.getElementById('total-count').textContent = total;
        document.getElementById('active-count').textContent = active;
        document.getElementById('completed-count').textContent = completed;
        document.getElementById('total-tasks').textContent = total;
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', newTheme);
    }
}

// Initialize the app
const app = new TodoApp();