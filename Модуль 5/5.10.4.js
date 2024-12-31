const userName = prompt('Введите свое имя');
const userBirthYear = Number(prompt('Введите свой год рождения'));
const currentYear = new Date().getFullYear();

if (!isNaN(userBirthYear) && userBirthYear > 0 && userBirthYear <= currentYear) {
    const age = currentYear - userBirthYear;
    let ageWord;
    const remainder = age % 10;
    if (remainder === 1) {
        ageWord = 'год';
    } else if (remainder >= 2 && remainder <= 4) {
        ageWord = 'года';
    } else {
        ageWord = 'лет';
    }
    alert(`${userName}: ${age} ${ageWord}`);
} else {
    alert('Год должен быть числом!');
}
