$(function() {
    var todos = [
    {
        task: 'do jQuery tutorial',
        isCompleted: false
    },
    {
        task: 'take a nap',
        isCompleted: true
    }
    ];

    var app = {
        showTodos: function() {
            var todosListEl = $('#todos-list');

            todosListEl.html('');

            todos.forEach(function(todo) {
                var taskClasses = 'todo-task' + (todo.isCompleted ? ' is-completed' : '');

                todosListEl.append('\
                <tr>\
                    <td class="' + taskClasses + '">' + todo.task + '</td>\
                    <td>\
                        <i class="float-right success fa fa-edit edit-button pr-1 pl-1"><span> Edit</span></i>\
                        <i class="fa fa-trash red-text delete-button float-right pr-1 pl-1"> Delete</i>\
                        <i class="fa fa-archive success  save-button float-right pr-1 pl-1"> Save</i>\
                        <i class="fa fa-times orange-text cancel-button float-right pr-1 pl-1"> Cancel</i>\
                    </td>\
                </tr>\
                ');
            });
        },

        addTodo: function(event) {
            event.preventDefault();

            var createInput = $('#create-input');
            var createInputValue = createInput.val();

            var errorMessage = null;

            if (!createInputValue) {
                errorMessage = 'Task cannot be empty.';
            } else {
                todos.forEach(function(todo) {
                    if (todo.task === createInputValue) {
                        errorMessage = 'Task already exists.'
                    }
                });
            }

            if (errorMessage) {
                app.showError(errorMessage);
                return;
            }

            todos.push({
                task: createInputValue,
                isCompleted: false
            });

            createInput.val('');
            app.showTodos();
        },

        toggleTodo: function() {
            todos.forEach(function(todo) {
                if (todo.task === $(this).text()) {
                    todo.isCompleted = !todo.isCompleted;
                }
            }.bind(this));
            app.showTodos();
        },

        enterEditMode: function() {
            var actionsCell = $(this).closest('td');
            var taskCell = actionsCell.prev();

            actionsCell.find('.save-button').show();
            actionsCell.find('.cancel-button').show();
            actionsCell.find('.edit-button').hide();
            actionsCell.find('.delete-button').hide();

            taskCell.removeClass('todo-task');
            app.currentTask = taskCell.text();
            taskCell.html('<input type="text" class="edit-input" value="' + app.currentTask + '" />');
        },

        exitEditMode: function() {
            var actionsCell = $(this).closest('td');
            var taskCell = actionsCell.prev();

            actionsCell.find('.save-button').hide();
            actionsCell.find('.cancel-button').hide();
            actionsCell.find('.edit-button').show();
            actionsCell.find('.delete-button').show();

            taskCell.addClass('todo-task');
            taskCell.html(app.currentTask);
        },

        saveTask: function() {
            var newTask = $('.edit-input').val();

            todos.forEach(function(todo) {
                if (app.currentTask === todo.task) {
                    todo.task = newTask;
                }
            });
            app.currentTask = newTask;
            app.exitEditMode.call(this);
        },

        deleteTask: function() {
            var taskToDelete = $(this).parent('td').prev().text();
            var found = false;
            todos.forEach(function(todo, index) {
                if (!found && taskToDelete === todo.task) {
                    todos.splice(index, 1);
                    found = true;
                }
            });
            app.showTodos();
        },

        showError: function(errorMessage) {
            $('.error-message').html(errorMessage).slideDown();
        },

        clearError: function() {
            $('.error-message').fadeOut();
        }
    };

    $('#create-form button').css('background', 'green');
    $('#create-form button').css({
        color: 'white',
        borderRadius: '8px'
    });

    app.showTodos();

    // $('.todo-task').on('click', app.toggleTodo);
    $('#add-tsk-btn').on('click', app.addTodo);
    $('#create-input').on('keyup', app.clearError);
    $('table').on('click', '.todo-task', app.toggleTodo);
    $('table').on('click', '.edit-button', app.enterEditMode);
    $('table').on('click', '.cancel-button', app.exitEditMode);
    $('table').on('click', '.save-button', app.saveTask);
    $('table').on('click', '.delete-button', app.deleteTask);
});
