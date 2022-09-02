let displayValue = '';
let queue = [];


function add(a,b)
{
    console.log(typeof a);
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a,b)
{
    return a * b;
}

function divide(a,b)
{
    if(b === 0)
    {
        return 'Cannot divide by 0';
    }
    else
    {
        return a / b;
    }
    
}

function operate(op, a, b)
{
    if(op === 'add')
    {
        
        return add(a,b);
    }
    else if(op === 'subtract')
    {
        return subtract(a,b);
    }
    else if(op === 'multiply')
    {
        return multiply(a,b);
    }
    else if(op === 'divide')
    {
        return divide(a,b);
    }

}

function updateDisplay(text, resetDisplay)
{
    
    if(resetDisplay)
    {
        displayValue = text + '';
        
    }
    else if(displayValue === '' && !resetDisplay)
    {
        displayValue = text + '';
    }
    else 
    {
        displayValue = displayValue + text;
    }
    const dis = document.querySelector('#display');
    dis.textContent = displayValue;
}

function clear()
{
    displayValue = '';
    updateDisplay(' ', true);
    queue = [];
}

function checkQueue()
{
    console.log(queue);
    if(queue.length >= 3)
    {
        let result = operate(queue[1], parseInt(queue[0]), parseInt(queue[2]));
        queue = queue.slice(2);
        
        queue[0] = result + '';
        console.log(queue);
        updateDisplay(result + '', true);
        displayValue = '';
    }
}

const buttons = document.querySelectorAll('.digit');

buttons.forEach( button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent, false);

    });

});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clear();
});

const addButton = document.querySelector('.add');
addButton.addEventListener('click', () => {
    if(queue.length === 0 || queue.length === 2)
    {
        queue.push(displayValue);
        displayValue = '';
    } 
    displayValue = '';
    queue.push('add');
    checkQueue();
});

const subtractButton = document.querySelector('.subtract');
subtractButton.addEventListener('click', () => {
    if(queue.length === 0 || queue.length === 2)
    {
        queue.push(displayValue);
        displayValue = '';
    } 
    displayValue = '';
    queue.push('subtract');
    checkQueue();
});

const multiplyButton = document.querySelector('.multiply');
multiplyButton.addEventListener('click', () => {
    if(queue.length === 0 || queue.length === 2)
    {
        queue.push(displayValue);
        displayValue = '';
    } 
    displayValue = '';
    queue.push('multiply');
    checkQueue();
});

const divideButton = document.querySelector('.divide');
divideButton.addEventListener('click', () => {
    if(queue.length === 0 || queue.length === 2)
    {
        queue.push(displayValue);
        displayValue = '';
    } 
    displayValue = '';
    queue.push('divide');
    checkQueue();
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    queue.push(displayValue);
    checkQueue();

});