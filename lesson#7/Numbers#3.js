// Работник пришёл к хозяину получить премию. И попросил сущую мелочь: несколько арбузов, 
// чтобы расположить по сторонам света вокруг своего дома. Чтобы на восток у него был один арбуз, 
// на север — в два раза больше чем на восток и так далее, пока стороны света не кончатся. 
// Всего сторон света — четыре. Выбраны были арбузы весом по 5 кг. 
// Сколько будет весить мешок, который загрузят этими арбузами? Запишите выражение.

    var weight = 5;
    var east = 1;
    var north = east*2;
    var south = north*2;
    var west = south*2;
    
    console.log ((east + north + south + west)*weight);
