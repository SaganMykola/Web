let n = parseInt(prompt("Введіть початкове число "));
let m = parseInt(prompt("Введіть кінцеве число "));
var arr = new Array();
c = 0;

for (var i = n; i < m; i++){
        arr[i] = i;
}

for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 1){
        c += 1;
    }
}
alert(c);