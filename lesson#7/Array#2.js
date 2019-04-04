// 2. Напишите функцию summ, принимающую параметр-массив и возвращающую сумму его значений.

var arr = [2, 5, 15, 20];

function sum(arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

sum(arr);