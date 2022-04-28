let n = prompt("Введіть кількість предметів:");
let marks = Array();
for (let i = 0; i < n; i++){
    marks.push(parseInt(prompt("Введіть оцінку")));
}
marks.sort(function(a, b){return a - b})

let avarage = 0;
marks.forEach(el => {

    avarage += el

});

alert(`середній бал студента ${avarage / n}`)

switch (marks[0]) {
    case 1:
        alert("Двійочник")
        break;

    case 2:
        alert("Двійочник")
        break;

    case 3:
        alert("Трійочник")
        break;
    
    case 4:
        alert("Хорошист")
        break;
    
    default:
        alert("Відмінник")
}