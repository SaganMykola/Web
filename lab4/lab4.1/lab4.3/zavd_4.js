let list = Array();
let used = Array();

for (let i = 0; i < 5 ; i++)
    list.push(parseInt(Math.random() * 1000) - 500);

let prise = 0;

while(true){
    var n = prompt("Введіть номер елемента або 'stop' щоб відмовитись від подальшої гри ", "Від 0 до 4");
    if (used.length == list.length || n == "stop")
        break;
    else
    {
        if (used.includes(n))
            alert("Ви вже використали цей номер");

        else
        {
            used.push(n);
            prise += list[n];
            alert(`Сумарний виграш: ${prise}`);
        }
    }
}
alert(`Ваш виграш: ${prise}`)
