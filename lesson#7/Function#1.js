// 1. Напишите функцию seconds, принимающую числовой параметр total 
// и возвращающую остаток от деления числа total на 60.

function second(total) {
    return Number(total % 60);
}

second(574254534);