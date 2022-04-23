let n = prompt("Введіть ціле число");
let num = new Array();
for (let i = 1; i < n; i++){
    if (Math.pow(i, 2) < n)
        num[i] = Math.pow(i, 2);
    else
        break;
}

alert(num);