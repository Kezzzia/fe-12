// Написать две функции, первая переводит цельсии в фаренгейты,
// вторая наоборот переводит фаренгейты в цельсии.Обе функции принимают числа, 
// если переданы не числа, возвращать 0 градусов(в эквиваленте для каждой единицы измерения).

transferTempFahrenheit();

function transferTempFahrenheit() {
    var c = (prompt(""));
    var f = c * 1.8 + 32;
    if (Number.isNaN(f)) {
        return 0;
    } else {
        return f;
    }
}

transferTempCelsius();

function transferTempCelsius() {
    var f = (prompt(""));
    var c = (f - 32) / 1.8;
    if (Number.isNaN(c)) {
        return 0;
    } else {
        return c;
    }
}