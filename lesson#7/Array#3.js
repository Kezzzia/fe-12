// 3. Напишите функцию evens, принимающую массив чисел и возвращающую массив только чётных чисел из 
// исходного массива, в том порядке, в котором они находились в исходном массиве.

var arr = [1,2,3,4,5,6];

function evens(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i]);
        }
    }
    return result;
}
evens(arr);