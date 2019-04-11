// 1. Есть число, оно больше нуля, если число делится на 3 без остатка, то мы выводим Fizz. 
// Если число делится без остатка на 5, то выводим Buzz. Если число делится и на 3 и на 5 без остатка, 
// то выводим FizzBuzz. Число необходимо получать через prompt окно, приводить значение введенное 
// пользователем к числу и уже с ним выполнять операции по FizzBuzz

var userNumber = +prompt("enter your number");
    if(userNumber % 15 === 0){
        alert('FizzBuzz');
    }else if (userNumber % 5 === 0){
        alert('Buzz');
    }else if (userNumber % 3 === 0){
        alert('Fizz');
    }else{
        alert('Go away');
    }