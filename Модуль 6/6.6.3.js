let userInput;

do {
    userInput = prompt('Введите любое число');
    userInput = userInput.trim();

    if (isNaN(userInput) || userInput === '') {
        alert('Вы ввели не число. Попробуйте еще раз.');
    }
    
} while (isNaN(userInput) || userInput === '');

userInput = Number(userInput);

let arr = [];

for (let i = 0; i <= userInput; i += 1) {
    arr.push(i)
}

console.log(arr);