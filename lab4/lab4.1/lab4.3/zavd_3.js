let input_name = prompt("Введіть ім'я: ", "Юрій")
let list = ["Юрій", "Юрій", "Микола"]

alert(`Вказане користувачем ім’я зустрічається ${list.filter(el => el.toLowerCase() === input_name.toLowerCase()).length} разів`)