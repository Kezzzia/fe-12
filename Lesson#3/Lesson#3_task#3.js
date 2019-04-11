// 3*. Есть два объекта, нужно проверить что объекты равны. Под равенством подразумевается, что у них одинаковое 
// количество свойств, свойства равны и их значения тоже равны.

function comparison() {
    var x = {a:1,b:1};
    var y = {a:1,b:1};
    // проверяем являются ли эти обьекты обьектами
    if(typeof x !== 'object' && typeof y !== 'object'){
        return false;
    }
    // считаем количество свойств в обьектах
    var counterX = 0;
        for (var key in x) {
            counterX++;
        }
    var counterY = 0;
        for (var key in y) {
            counterY++;
        }
        if (counterX !== counterY){
        return false;
    }
    // проверяем свойства обьектов
    for(var propName in x){
        if (! y.hasOwnProperty(propName)) {
                return false;
            }
    }
    // проверяем значения свойст обьектов
    var propValueResultX = "";
    for(var propValue in x){
        propValueResultX += x[propValue];
    }
    var propValueResultY = "";
    for(var propValue in y){
        propValueResultY += y[propValue];
    }
    if(propValueResultX !== propValueResultY){
        return false;
    }
return true;
}
comparison();