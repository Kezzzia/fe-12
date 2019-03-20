transferTempFahrenheit();

function transferTempFahrenheit() {
    var c = (prompt(""));
    var f = c * 1.8 + 32;
    if (Number.isNaN(f)) {
        alert(0);
    } else {
        alert(f);
    }
}

transferTempCelsius();

function transferTempCelsius() {
    var f = (prompt(""));
    var c = (f - 32) / 1.8;
    if (Number.isNaN(c)) {
        alert(0);
    } else {
        alert(c);
    }
}

// Написать две функции, первая переводит цельсии в фаренгейты,
// вторая наоборот переводит фаренгейты в цельсии.Обе функции принимают числа, 
// если переданы не числа, возвращать 0 градусов(в эквиваленте для каждой единицы измерения).
