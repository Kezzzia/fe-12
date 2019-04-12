// Написать функцию, которая принимает строку, а возвращает перевернутую строку.
// Пример: передаем aabbcc, функция должна вернуть ccbbaa

var userWord = prompt("");

function reverse(userWord) {
    result = "";
    for (var i = userWord.length - 1; i >= 0; i--) {
       result += userWord[i];
    }
    return result;
}

alert(reverse(userWord));