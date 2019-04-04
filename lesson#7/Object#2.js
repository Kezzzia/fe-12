// Напишите функцию isACat, которая определяет, является ли переданный объект котом. 
// Объект является настоящим котом, если его имя — 'Garphield' или ему нравится молоко. Имя хранится в поле name. 
// Что нравится объекту, хранится в строке, в поле likes. 
// Объекту нравится молоко, если содержимое likes равно строке 'milk'.

var cat = {
    name:'Garphield',
    likes: 'milk'
};

function isACat(cat) {
    for (var key in cat) {
        if(cat[key] === 'Garphield'){
            return 'Its a cat!';
        }else if(cat[key] === 'milk'){
            return 'Its a cat!';
        }else 
            return 'its a dog!';
    }
}

isACat(cat);