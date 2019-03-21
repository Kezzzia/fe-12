// Написать функцию, которая принимает 2 строки в виде параметров и 
// проверяет оканчивается ли первая строка второй строкой, если оканчивается, 
// то возвращает true, иначе false.Строки регистро независимые, т.е.End эквивалентна 
// END

function endOfStrings(firstTest, secondTest) {
    for (var i = firstTest.lenght-1,b = secondTest.lenght-1; i >= 0; i--, b--) {
        if(firstTest[i] !== secondTest[b]){
            return false;
        }
    }
    return true;
} 
endOfStrings("new york", "orqedasd");

