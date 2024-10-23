// immediately invoked function expression

// пример 1

// (()=>{
//     const divElements = document.querySelectorAll('div');
//     for(const el of divElements) el.style.border = '1px solid red';
// })();



// пример 2 DOMContentLoaded всместо immediately invoked function expression используется просто для надежности чтобы не зависить от defer в index.html

// document.addEventListener('DOMContentLoaded', ()=>{
//     const button = document.createElement('button');

//     let count = 0;

//     function increment(){
//         button.textContent = count++;
//     };

//     increment();

//     button.addEventListener('click', increment);
//     document.body.append(button);
// });



// пример 3

(()=>{
    const WAIT_TIME_MS = 300;
    const textInput = document.createElement('input');
    const display = document.createElement('div');
    let timeout;

    textInput.addEventListener('input', ()=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            display.textContent = textInput.value;
        }, WAIT_TIME_MS);
    });

    document.addEventListener('DOMContentLoaded', ()=>{
        document.body.append(textInput);
        document.body.append(display);

    });
})();
