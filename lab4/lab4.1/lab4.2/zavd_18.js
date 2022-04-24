let title = prompt("Введіть заголовок: ");
let image = prompt("Введіть посилання на зображення: ");
let passing = prompt("Введіть посилання для переходу: ");
function banner(title, image, passing){
    document.write(`<h1>${title}</h1>`);
    document.write(`<a href='${passing}'><img src='${image}'></img></a>`);
}

banner(title, image, passing)
