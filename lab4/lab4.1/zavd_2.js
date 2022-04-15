let price1 = prompt("Введіть ціну товару");
let number1 = prompt("Введіть кількість товару");
let price2 = prompt("Введіть ціну товару");
let number2 = prompt("Введіть кількість товару");

let cost1 = price1 * number1;
let cost2 = price2 * number2;

alert(`Вартість першого товару: ${cost1}`);
alert(`Вартість другого товару: ${cost2}`);
alert(`Загальна вартість: ${cost1 + cost2}`);