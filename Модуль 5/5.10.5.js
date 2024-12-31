const userAge = prompt('Введите свой возраст');


if (!isNaN(userAge) && userAge > 0 && userAge !== null && userAge !== '') {
    const age = Number(userAge);
    let maxCredit;

    if (age < 18) {
        maxCredit = 0;
        alert('Кредит не может быть выдан, так как вам меньше 18 лет');
    } else if (age <= 21) {
        maxCredit = 50000;
    } else if (age <= 35) {
        maxCredit = 400000;
    } else if (age <= 65) {
        maxCredit = 1000000;
    } else {
        maxCredit = 0;
        alert('Кредит не может быть выдан, так как вам больше 65 лет');
    }

    if (maxCredit > 0) {
        let creditAmount = prompt(`Мы можем вам выдать максимум ${maxCredit}.\nВведите сумму кратную 1000:`);
        creditAmount = Number(creditAmount);

        if (!isNaN(creditAmount) && creditAmount <= maxCredit && creditAmount % 1000 === 0 && creditAmount > 0) {
            alert(`Вам одобрен кредит на сумму ${creditAmount}`);
        } else {
            alert(`Введите корректную сумму кредита, кратную 1000 и не превышающую ${maxCredit} рублей.\nМы можем выдать ${maxCredit}.`)
        }
    }

} else {
    alert('Введите корректный возраст');
}