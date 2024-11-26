let i = 2;
let u = 4;

let o = i+u;

console.log("result=" + o);


let condition = 'con3'

switch (condition){
    case 'con1':
        console.log('Условие1')
        break;
    case 'con2':
        console.log('Условие2')
        break;    
    case 'con3':
    case 'con4': 
    case 'con5':   
        console.log('Условие с 3 по 5ое')
        break;
    default:  
        console.log('Условие другое')
        break;     
}


let array = ['el1', 'el2', 'el3', 'el4', 'el5']

for(let i of array){
    console.log(i);
}

for(let i in array){
    // console.log(array[i]);
    console.log(`${parseInt(i) + 1} element: ${array[i]}`);
}

do {
    console.log('попытка')
} while (Math.random() > 0.2);

console.log('результаты');

let card = ['брать', 'не брать', 'брать', 'точно не брать'];
let hand = [];

for(let i of card){
    if (i !== 'не брать' && i !== 'точно не брать') 
        continue;
        hand.push(i);
    
}
console.log('не взяли: ' + hand);


let found = false;
for(let i of card){
    if (i === 'не брать'){
        found = true;
        break;
    }
}
console.log(found ? 'found' : 'not found');

console.log("------////2\\\\-------");
//классы ---------------------------------------------------------------------  1
printDay();
greet('hi');
greet2();
greet2('asd');
greet3('asd', 'asd');
console.log(generateRandomNumber(0, 100));

let dunLet = function() {
    console.log('hi');
}

dunLet();

function printDay(){
    let dayIndex = new Date().getDate();
    let days = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
    ]
    console.log(`сегодня: ${days[dayIndex-1]}`);
}


function greet(string){
    console.log(`greet ${string}`)
}

function greet2(string = 'значение по умолчанию'){
    console.log(`greet ${string}`)
}

function greet3(string, string2){
    console.log(`greet ${string} + ${string2}`)
}

function generateRandomNumber(n, m){
    let range = Math.abs(m-n);
    let numberRange = Math.round(Math.random() * range);
    let min = Math.min(n, m);

    return min + numberRange;
}

console.log("------////3\\\\-------");
//---------------------------------------------------------------------  2
let me = {
    name: 'Vasya',
    surname: 'ivanov', 
    occ: 'sis arkh',
    'св-во состоящие из спец символов': null,
    birthDate: { year: 1989, month: 5, day: 25 },

    //св-во-функция
    getAge(){
        let now = new Date();
        let born = new Date(
            this.birthDate.year,
            this.birthDate.month,
            this.birthDate.day
        );

        let diffInMillisecond = now.getTime() - born.getTime();
        return Math.floor(diffInMillisecond / 1000 / 60 / 60 / 24 / 365.25);
    } 
}

console.log(me.getAge());

//функция, если не знаем наименования св-ва заранее
function printObjProp(obj, propName){
    console.log(obj[propName])
}

printObjProp(me, 'occ')

//добавляем новое св-во
me.education = 'VSU';

// редактируем новое св-во
me.education = 'VGASU';

// редактируем св-во из спец символов
me['св-во состоящие из спец символов'] = "@asda22d adf ";

//удаляем
delete me.education

let name = me.name;

// пустой объект
let emptyObj = {};

let motherboard = {
    usbPortCount: 8,
    chipset: 'AMD X570'
}

let cpu = {
    coreCount: 12,
    socket: 'AM4'
}

// все св-ва из объекта motherboard и cpu перенесены в computer. ... - оператор "СПРЭД"
let computer = {
    price: 100000,
    ...motherboard,
    ...cpu
}

// все св-ва из объекта motherboard и cpu перенесены в computerWhithAssign. Object.assign тоже самое что и спрэд
let computerWhithAssign = Object.assign(
    {
        price: 100000
    },
    motherboard,
    cpu
)

console.log('computer.usbPortCount = ' + computer.usbPortCount + ' computerWhithAssign.usbPortCount = ' + computerWhithAssign.usbPortCount
)

// увидеть значения свойств, ключи и все вместе
console.log("Object.keys(computer) - " + Object.keys(computer));
console.log('Object.values(computer) - ' + Object.values(computer));
console.log('Object.entries(computer) - ' + Object.entries(computer));

let enteries = Object.entries(computer);

// деструктуризация 
for(let[key, values] of enteries){
    console.log(`key = ${key} - values = ${values}`)
}

console.log("------////4\\\\-------");
//---------------------------------------------------------------------  3
console.log( document.documentElement);
console.log( document.documentElement.children);



//!!!!!!!!!!!!!!!!!!!!!!! for F12 console !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let body1 = document.documentElement.children[1];
// let body2 = document.body;
// body2.children;
// body2.children[1].style.color = 'blue';

// let h1 = document.createElement('h1');
// h1.textContent = 'SomeText';
// document.body.append(h1)

// --   ддя этого нужно создать пустой html

// let ol = document.createElement('ol');
// document.body.append(ol);
// let list = [
//     document.createElement('li'),
//     document.createElement('li')
// ]
// list[0].textContent = 'first element';
// list[1].textContent = 'second elemrnt';
// ol.prepend(list[0]);
// ol.prepend(list[1]);

// let elBefor = document.createElement('li');
// elBefor.textContent = 'elBefor';
// list[0].before(elBefor);

// let replaceEl = document.createElement('li');
// replaceEl.innerHTML = '<strike>replaceEl</strike>';
// ol.children[0].replaceWith(replaceEl);

// ol.children[2].remove();

// ol.id = 'id123';
// ol.reversed = true;
// ol.start = 20;
// ol.removeAttribute('start');

// ol.classList.add('class1');
// ol.classList.remove('class1');
// ol.classList.toggle('class1');   // если убран, то добавиться и наоборот
// ol.classList.contains('class1'); // проверка, есть ли класс

// document.querySelector('#id123');
// document.querySelectorAll('.class1');
// document.getElementById('id123')



//--------------------------------------------------------------------- Работа с массивами
console.log("------////Работа с массивами\\\\-------");

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//метод удаляет из массива 1ый элемент и сразу его возвращает
const first = number.shift();
console.log(first); // 0
console.log(number); // 1,2,3 ...

//метод удаляет из массива последний элемент и сразу его возвращает
const last = number.pop();
console.log(last); // 9
console.log(number); // 1,2,3 ... 7, 8

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const middle = numbers.splice(4,2);
console.log(middle); // 4,5
console.log(numbers); // 0, 1, 2, 3 ... 6, 8

numbers.splice(100, 100); // [], исходный массив не изменится
numbers.splice(6); // [8, 9], вернутся и будут убраны из массива
console.log(numbers); // 0, 1, 2, 3, 6, 7

numbers.splice(4, 0, 4, 5);
console.log(numbers); // 0, 1, 2, 3, 4, 5, 6, 7


//--------------------------------------------------------------------- 4
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbersReversed = numbers2.reverse();
console.log(numbersReversed); // зеркалит

numbersReversed.sort(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbersReversed.push(10, 11);
numbersReversed.sort(); // [0, 1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9];

numbersReversed.sort((a, b) => a - b); // 0, 1, 2..11
numbersReversed.sort((a, b) => b - a); // 11, 10, 9..

numbers2.slice(); // полная копия массива
numbers2.slice(3); // копия массива от 3 эл-та
numbers2.slice(-5); // копия 5ти последних элементов
numbers2.slice(3, 5); // копия с 3его по 5ый
numbers2.slice(2,2); // копия с 3его по пред-пред-последний

//--------------------------------------------------------------------- 5

const students = [
    {name: 'Василий', age: '18'},
    {name: 'Геннадий', age: '23'},
    {name: 'Андрей', age: '17'},
    {name: 'Тимофей', age: '29'},
    {name: 'Иннокентий', age: '17'},
];

students.includes({name: 'Василий', age: '18'}); // false т.к. это не тот Василий

students.find(student => student.name === 'Василий' && student.age === 18); // вернет сам объект
students.findIndex(student => student.name === 'Василий' && student.age === 18); // вернет индекс объекта

students.every(student => student.age >= 18); // true 
students.some(student => student.age >19); // true

students.map(student => student.name); // массив только имен

students.forEach((student, index)=>{
    console.log(`студент№ ${index+1} имя ${student.name} и возраст ${student.age}`)
})



//--------------------------------------------------------------------- Работа с массивами и строками 2
console.log("------////Работа с массивами и строками 2\\\\-------");

    const str = `
    Тиунов Тимофей Сергеевич, системный архитектор, 
    Иванов Иван Иванович, frontend-разработчик
    `;

function parseEmployeesData(dataString){
    return dataString
    // разбиваем текст по строкам
    .split('\n')
    // убираем пустые строки с пробелами
    .filter(line=>line.trim().length > 0)
    // преобразуем каждую строку
    .map(line => {
        // через запятую выписаны ФИО и должность человека
            const [fullName, occupation] = line
            // разбиваем строку по запятой
                .split(',')
                // убираем лишние пробелы
                .map(str => str.trim())
                // убираем пустые строки
                .filter(text => text.length>0);
                // далее нам нужно разбить ФИО на составляющие
            const [surname, name, middleName] = fullName
            // ФИО в тесте написанно через пробул
                .split(' ')
                // убираем лишнее
                .filter(text=>text.length>0);
                // возвращаем объект
                return{
                    surname, name, middleName, occupation
                };
        })
}

console.log(parseEmployeesData(str));



//--------------------------------------------------------------------- Работа с запросами
console.log("------////Работа с запросами\\\\-------");


//!!!!!!!!!!!!!!!!!!!!!!! for F12 console !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// fetch('https://gorest.co.in/public/v2/users');

// // создаем пользователя
// fetch('https://gorest.co.in/public/v2/users', {
//     method: 'POST',
//     body: JSON.stringify({
//         "name":"Trunov Tr Tr", 
//         "gender":"male", 
//         "email":"tenali.ramakrishna@15ce.com", 
//         "status":"active"}     
//     ),
//     header: {
//         Authorization: 'Bearer 191d939aa2fe8f6fc813f6873bfd92c6825ebefaae57b62098e86cfc271fb9a3',
//         'Content-type': 'application/json'
//     }
// });


// async function f(){
//     const resp = await fetch('https://gorest.co.in/public/v2/users');
//     const data = await resp.json();

//     console.log(data);
// };

// // не ждем ответ самой функции, но внутри await выаполнится 
// f();
// // ждем ответ
// await f();

