// 3. Необходимо написать функцию, которая принимает на вход массив 
// и возвращает true или false.True - возвращаем, если все элементы 
// в массиве числа.False - если хотя бы один элемент не число.

checkForNumber([43, 43, 55, "flexbox"]);

function checkForNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== "number") {
            return false;
        }
    } return true;
}