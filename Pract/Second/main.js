
// let countDisplay = document.querySelector('.count-display');
// let incrermentButton = document.querySelector('.increment-button');


// function incrementCount(){
//     let currentCount = parseInt(countDisplay.textContent)
//     countDisplay.textContent = currentCount + 1;
// }

// incrermentButton.addEventListener('click', incrementCount);




// // если не прописать defer в <script>, нужно использовать DOMContentLoaded 
// // принято совмещать DOMContentLoaded и defer          

document.addEventListener('DOMContentLoaded', function(){
    let countDisplay = document.querySelector('.count-display');
    let incrermentButton = document.querySelector('.increment-button');


    function incrementCount(){
        let currentCount = parseInt(countDisplay.textContent)
        countDisplay.textContent = currentCount + 1;
    }

    incrermentButton.addEventListener('click', incrementCount);

    console.log("------////\\\\-------");
//---------------------------------------------------------------------  

    let colorInput = document.querySelector('.сolor-input');
    let clearButton = document.querySelector('.clear-color-button');
    let colorBlock = document.querySelector('.color-block');

    function paintBlock(){
        colorBlock.style.backgrourndColor = colorInput.value;
        console.log(colorBlock.style.backgrourndColor = colorInput.value)
    }

    colorInput.addEventListener('input', paintBlock);

    paintBlock();

    clearButton.addEventListener('click', function(){
        colorBlock.style.removeProperty('background-color');
        colorInput.value='';
    })
})
