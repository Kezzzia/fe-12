// Написать функцию, которая принимает 2 строки в виде параметров и 
// проверяет оканчивается ли первая строка второй строкой, если оканчивается, 
// то возвращает true, иначе false.Строки регистро независимые, т.е.End эквивалентна 
// END

function endOfStrings(firstWord, secondWord){
    var firstWordLower = firstWord.toUpperCase();
    var secondWordLower = secondWord.toUpperCase();
    var a = firstWordLower.length-1;

    for(var i = secondWordLower.length-1; i >= 0; i--){
      if(secondWordLower[i] !== firstWordLower[a]){
    return false
      }
      a--;
    }
    return true
  }
endOfStrings("new york", "ORK");