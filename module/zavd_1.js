let n = prompt("Введіть кількість елементів");
let arr = new Array();
for (let i = 0; i < n; i++){
    arr.push( Math.round( Math.random() * 100 ));

}
alert(`Перший масив: ${arr}`);
var arr2 = arr.filter((x, i, arr) => arr[i] > arr[0]);
alert(`Другий масив: ${arr2}`);