let input_name = prompt("Введіть ім'я: ", "Юрій");
let list = ["Юрій", "Юрій", "Микола"];
let num = 0;
for (let i = 0; i < list.length; i++)
    if (list[i].toLowerCase() == input_name.toLowerCase())
        num++ ;

alert(`Вказане користувачем ім’я зустрічається ${num} разів`);
