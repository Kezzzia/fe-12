// 1. Будем создавать человека. Необходимо с помощью prompt() опросить пользователя о его имени, 
// фамилии, возрасте, поле, росте(дробном виде), весе, женат/замужем ли (булево), есть ли дети(булево), 
// если дети есть, тогда задать вопрос о количестве и их именах. Из собранных данные необходимо 
// сформировать объект и вывести его.

function collectingUserInformation() {
    var user = {};
        user.firstName = prompt("Ваше имя?");
        user.secondName = prompt("Ваша фамилия?");
        user.age = +prompt("Ваш возраст");
        user.gender = prompt("Укажите Ваш пол");
        user.growth = +prompt("Укажите Ваш рост");
        user.weight = +prompt("Укажите вес");
        user.married = confirm("Вы женаты или замужем?");
        user.status = user.married ? 'yes' : 'no';
        user.childs = confirm("У вас есть дети");
        user.haveChild = user.childs ? "yes" : "no";
        if(user.childs){
            user.childrenQuantity = +prompt("сколько у вас детей");
            if(user.childrenQuantity){
                user.childrenNames = [];
                for (i = 0; i < user.childrenQuantity; i++) {
                    user.childrenNames.push(prompt("напишите имя/имена детей"));
                }
            }      
        }
    }
collectingUserInformation();