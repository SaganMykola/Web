let monday = ["Дискретна математика", " Програмування", " Основи WEB-програмування"];
let tuesday = ["Основи WEB-програмування", " Дискретна математика", " Програмування"];
let wednesday = ["Програмування", " Математичний аналіз", " Історія та культура України"];
let thursday = ["Алгебра і геометрія", " Історія та культура України", " Алгебра і геометрія"];
let friday = ["Математичний аналіз", " Ділова українська мова", " Основи WEB-програмування"];
let day = prompt("Введіть день: ");
let timetable = function(monday, tuesday, wednesday, thursday, friday){
    if (day.toLowerCase() == "понеділок")
        return monday;
    
    else if (day.toLowerCase() == "вівторок")
        return tuesday;

    else if (day.toLowerCase() == "середа")
        return wednesday;    

    else if (day.toLowerCase() == "четвер")
        return thursday;
    
    else if (day.toLowerCase() == "п'ятниця")
        return friday;
    
    else
        return "Вихідний";    
}

alert(timetable(monday, tuesday, wednesday, thursday, friday));