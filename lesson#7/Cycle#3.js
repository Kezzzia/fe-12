// 3. Напишите функцию digitSumm, вычисляющую сумму цифр числа. 
// Первый параметр функции — number. Для получения цифр используйте операцию получения остатка от деления %.

function digitSumm(number) {
    var sum = 0;
    var tmp = 0;
    while(number){
        tmp = number % 10;
        number = (number - tmp) / 10;
        sum += tmp;
    }
    return sum;
}

digitSumm(3279);