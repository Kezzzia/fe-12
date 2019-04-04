// 1. Соединим несколько строк, взяв строку 'Hello', и добавим к ней, последовательно, пробел, 
// строку 'coding', пробел, 'in', пробел, 'javascript'. Для соединения строк используйте метод concat.

var a = "Hello";
var b = " ";
var c = "coding";
var d = "in";
var e = "javascript";

console.log(a.concat(b, c, b, d, b, e));