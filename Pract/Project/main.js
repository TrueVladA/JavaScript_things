(function() {
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title){
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;     // передаем текст в созданный заголовок
        return appTitle;
    }

    //создаем и возвращаем форму для создания дела
    function createTodoItemForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');  // для стилизации кнопки
        let button = document.createElement('button');

        form.classList.add('input-group','mb-3');  // устанавливаем 2 класса для формы

        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';

        buttonWrapper.classList.add('inout-group-append');
        button.classList.add('btn','btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return{
            form,
            // input,
            // button,
        };
    }

    //создаем и возвращаем список элементов
    function createToDoList(){
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    document.addEventListener('DOMContentLoaded', function() {
        let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle('Список дел');
        let todoItemForm = createTodoItemForm();
        let todoList = createToDoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

    });

}) ();