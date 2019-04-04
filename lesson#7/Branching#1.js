// 1. Напишите фунцию iGoToNorth, которая принимает параметр number и определяет, 
// подходит ли нам переданное число. Число подходит если оно больше 10, меньше 30 и кратно 7.

function iGoToNorth(number) {
   return number > 10 && number < 30 && number % 7 === 0 ? true : false;
}

iGoToNorth(14);