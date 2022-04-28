let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let visitors = Array();
for (let i = 0; i < days.length; i++){
    visitors.push(parseInt(prompt(`Введіть кількість відвідувачив в ${days[i]}`)));
}
let min = visitors[0];
let max = visitors[0];
for (let i = 1; i < visitors.length; i++){
    min = Math.min(visitors[i], min);
    max = Math.max(visitors[i], max);
}

let numbers1 = Array();
for (let i = 0; i < visitors.length; i++){
    if (visitors[i] < 20)
        numbers1.push(i+1);
}

let numbers2 = Array();
for (let i = 0; i < visitors.length; i++){
    if (visitors[i] == min)
        numbers2.push(i+1);
}

let numbers3 = Array();
for (let i = 0; i < visitors.length; i++){
    if (visitors[i] == max)
        numbers3.push(i+1);
}
let total1 = 0;
for (let i = 0; i < visitors.length-2; i++)
    total1 += visitors[i];

let total2 = 0;
    for (let i = 5; i < visitors.length; i++)
        total2 += visitors[i];

alert(`Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${numbers1}`);
alert(`Номери днів, коли кількість відвідувачів була мінімальною: ${numbers2}`);
alert(`Номери днів, коли кількість відвідувачів була максимальною: ${numbers3}`);
alert(`Загальна кількість клієнтів у робочі дні: ${total1}`);
alert(`Кількість клієнтів днів на вихідних: ${total2}`);