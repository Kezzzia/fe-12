// Написать функцию, которая будет определять, является ли переданное 
// значение палиндромом.
palindrom(prompt(""));

function palindrom(userWord) {
    for (var i = userWord.length - 1, a = 0; i >= 0; a ++, i--) {
        if(userWord[i] !== userWord[a]){
            return false;
        }
    }
    return true;
}
