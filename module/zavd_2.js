document.getElementById("find-number").onclick = () => {
    let number = document.getElementById("car number").value;
    if ((number.charAt(0) == 'A' || number.charAt(1) == 'C') || (number.charAt(0) == 'B' || number.charAt(1) == 'K') (number.charAt(0) == 'B' || number.charAt(1) == 'C')){
        region = "Західна область";
    } else if ((number.charAt(0) == 'A' || number.charAt(1) == 'M') || (number.charAt(0) == 'A' || number.charAt(1) == 'A') (number.charAt(0) == 'A' || number.charAt(1) == 'I')){
        region = "Центральна область";
    } else if ((number.charAt(0) == 'A' || number.charAt(1) == 'X') || (number.charAt(0) == 'A' || number.charAt(1) == 'H') (number.charAt(0) == 'B' || number.charAt(1) == 'B')){
        region = "Східна область";
    } else if ((number.charAt(0) == 'B' || number.charAt(1) == 'H') || (number.charAt(0) == 'B' || number.charAt(1) == 'E') (number.charAt(0) == 'B' || number.charAt(1) == 'T')){
        region = "Південна область";
    } else{
        alert("Введіть правильний номер")
    }
    

    document.getElementById("region").value = region;
}