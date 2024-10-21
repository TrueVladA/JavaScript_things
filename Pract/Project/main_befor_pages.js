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
            input,
            button,
        };
    }

    //создаем и возвращаем список элементов
    function createToDoList(){
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    // добавляем кнопки
    function createTodoItem(name){
        let item = document.createElement('li');
        //кнопки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
    
        // устанавливаем стили для клкментов списка, а также для размещения кнопок
        // в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;
    
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';
    
        // вкладываем кнопки в отдельный элемент, чтобы они объеденились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);
    
        return{
            item,
            doneButton,
            deleteButton
        }
    
    }

    function createTodoApp(container, title = 'список дел'){
        // let container = document.getElementById('todo-app');

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createToDoList();
        

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        // для примера добавления элементов
        // let todoItems = [createTodoItem('первый'), createTodoItem('второй')];
        // todoList.append(todoItems[0].item);
        // todoList.append(todoItems[1].item);

        //браузер создает событие submit на форме при нажатии на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e){
            //эта строчка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае, мы не ходим, чтобы страница перезагружалась при отправке формы  
            e.preventDefault();

            //игнорируем создание элемента, если пользователь ничего не ввел в поле
            if(!todoItemForm.input.value){
                return;
            }
            // // создаем и добавляем в список новое дело с названием из поля для ввода || просто добавляем элемент в список, для примера
            // todoList.append(createTodoItem(todoItemForm.input.value).item);

            let todoItem = createTodoItem(todoItemForm.input.value);

            // добавляем обработчик на кнопки
            todoItem.doneButton.addEventListener('click', function(){
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function(){
                if(confirm('Вы уверены?')){
                todoItem.item.remove()};
            });

            // создаем и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item);

            // обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        createTodoApp(document.getElementById('my-todos'), 'Мои дела');
        createTodoApp(document.getElementById('my-todos'), 'Мои дела');
        createTodoApp(document.getElementById('my-todos'), 'Мои дела');
    });

}) ();

