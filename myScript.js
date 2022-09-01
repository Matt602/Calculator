let displayValue = '0';


function add(a,b)
{
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
    return a / b;
}

function operate(op, a, b)
{
    if(op === 'add')
    {
        add(a,b);
    }
    else if(op === 'subtract')
    {
        subtract(a,b);
    }
    else if(op === 'multiply')
    {
        multiply(a,b);
    }
    else if(op === 'divide')
    {
        divide(a,b);
    }

}

function updateDisplay(text)
{
    if(displayValue === '0')
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

function clearDisplay()
{
    displayValue = '0';
    updateDisplay(' ');
}

const buttons = document.querySelectorAll('.digit');

buttons.forEach( button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);

    });

});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clearDisplay();
});