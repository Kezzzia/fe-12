// 2. Если идёт дождь, гулять я не хожу. В этом случае длительность прогулки равняется 0. 
// А вот если дождя нет, всё зависит от температуры на улице:
// Во-первых, если температура от 10°C (включительно) до 15°C (не включая это значение), я гуляю 30 минут.
// Во-вторых, если температура от 15°C (включительно) до 25°C (не включая значение), я гуляю 40 минут.
// В-третьих, при температуре от 25°C (включительно) до 35°C (включительно), я гуляю 20 минут.
// В остальных случаях я никуда не выхожу: либо очень холодно, либо очень жарко.
// Результат программы – время прогулки. Его необходимо записать в переменную minutes.
// Температуру и идет ли дождь нужно спрашивать у пользователя.

function weather() {
    var rain = confirm("идет ли дождь?");
    var temperature = +prompt("какая температура на улице?");
    if (rain || temperature < 10 || temperature > 35){
        var minutes = 0;
        alert ("вы будете гулять " + minutes+ " минут");
    } else if (temperature >=10 && temperature <15){
        var minutes = 30;
        alert("вы будете гулять " + minutes + " минут");
    } else if (temperature >=15 && temperature <25){
        var minutes = 40;
        alert("вы будете гулять " + minutes + " минут");
    } else if (temperature >=25 && temperature <=35){
        var minutes = 20;
        alert("вы будете гулять " + minutes + " минут");
        } 
    }
weather();
