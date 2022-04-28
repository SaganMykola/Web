let list = Array();
for (let i = 0; i < 5; i++)
    list.push(parseInt(Math.random() * 1000) - 500);
alert(list);

let prise = 0;

while(true){
    let n = prompt("Введіть номер елемента або стоп щоб відмовитись від подальшої  ", "Від 0 до 4");
    prise += list[n];
    alert(`Сумарний виграш: ${prise}`)
    list.splice(n, 1, 0);
    let a = list.reduce(function(x, y){ 
        return x + y;
    });

    let m = confirm("Хочете продовжити гру?")
    if (a == 0 || m == false){
        break
    }

    else
        continue
}
alert(`Ваш виграш: ${prise}`)