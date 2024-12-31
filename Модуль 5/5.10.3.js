const userName = prompt('Введите свое имя');
const userBirthYear = Number(prompt('Введите свой год рождения'));
const currentYear = new Date().getFullYear();

if (!isNaN(userBirthYear) && userBirthYear > 0 && userBirthYear <= currentYear) {
    const age = currentYear - userBirthYear;
    alert(`${userName}: ${age}`);
} else {
    alert('Введите корректный год рождения');
}