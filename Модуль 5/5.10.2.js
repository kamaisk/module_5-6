let promoCodeInput = prompt('Введите промокод');
promoCodeInput = promoCodeInput.toLowerCase();
if (promoCodeInput === "скидка") {
  alert('Промокод применён');
} else {
  alert('Промокод не работает');
}