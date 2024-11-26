(function () {
    //создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;     // передаем текст в созданный заголовок
        return appTitle;
    }

    //создаем и возвращаем форму для создания дела 
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');  // для стилизации кнопки
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');  // устанавливаем 2 класса для формы

        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';

        buttonWrapper.classList.add('inout-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    //создаем и возвращаем список элементов
    function createToDoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    // добавляем кнопки
    function createTodoItemElement(todoItem, {onDone, onDelete}) {
        const doneClass = 'list-group-item-success';

        let item = document.createElement('li');
        //кнопки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // устанавливаем стили для клкментов списка, а также для размещения кнопок
        // в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        if (todoItem.done){
            item.classList.add(doneClass);
        }
        item.textContent = todoItem.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        // добавляем обработчик на кнопки
        doneButton.addEventListener('click', () => {
            onDone({todoItem: todoItem, element: item});
            item.classList.toggle(doneClass, todoItem.done);
        });
        deleteButton.addEventListener('click', () => {
            onDelete({todoItem: todoItem, element: item});
            // if (confirm('Вы уверены?')) {
            //     item.remove();
            // };
        });

        // вкладываем кнопки в отдельный элемент, чтобы они объеденились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return item;
    }

    async function createTodoApp(container, title = 'Список дел') {
        // let container = document.getElementById('todo-app');

        const todoAppTitle = createAppTitle(title);
        const todoItemForm = createTodoItemForm();
        const todoList = createToDoList();
        const handlers = {
            onDone({todoItem}) {
                todoItem.done = !todoItem.done;
                fetch(`http://localhost:3000/api/todos/${todoItem.id}`,{
                    headers: { 'Content-Type': 'application/json' },
                    method: 'PATCH',
                    body: JSON.stringify({done: todoItem.done})
                });
            },
            onDelete({todoItem, element}){
                if(!confirm('Are you sure?')){
                    return;
                }
                element.remove();
                fetch(`http://localhost:3000/api/todos/${todoItem.id}`,{
                    headers: { 'Content-Type': 'application/json' },
                    method: 'DELETE'
                });                
            }
        }


        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        // для примера добавления элементов
        // let todoItems = [createTodoItem('первый'), createTodoItem('второй')];
        // todoList.append(todoItems[0].item);
        // todoList.append(todoItems[1].item);

        const response = await fetch('http://localhost:3000/api/todos');
        const todoItemList = await response.json();

        todoItemList.forEach(todoItem => {
            const todoItemElement = createTodoItemElement(todoItem, handlers);
            todoList.append(todoItemElement);
        });

        //браузер создает событие submit на форме при нажатии на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', async e => {
            //эта строчка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае, мы не ходим, чтобы страница перезагружалась при отправке формы  
            e.preventDefault();

            //игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) {
                return;
            }

            const response = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: todoItemForm.input.value,
                    owner: 'Mock'
                })
            });

            // console.log("asd");     

            const todoItem = await response.json();

            // // создаем и добавляем в список новое дело с названием из поля для ввода || просто добавляем элемент в список, для примера
            // todoList.append(createTodoItem(todoItemForm.input.value).item);

            const todoItemElement = createTodoItemElement(todoItem, handlers);

            // создаем и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItemElement);

            // обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';
        });
    }

    // document.addEventListener('DOMContentLoaded', function() {
    //     createTodoApp(document.getElementById('my-todos'), 'Мои дела');
    //     createTodoApp(document.getElementById('dad-todos'), 'Дела папы');
    //     createTodoApp(document.getElementById('mom-todos'), 'Дела мамы');
    // });


    window.createTodoApp = createTodoApp;

})();

