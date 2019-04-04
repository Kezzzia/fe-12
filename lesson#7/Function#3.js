// 3. Напишите функцию pedestrianFlowRate, которая определяет, сколько времени светофор, 
// управляющий движением пешеходов, позволяет пешеходам проходить через дорогу. 
// Первый параметр cycleLength — количество времени, в течение которого сигналы светофора 
// полностью повторяются (можно засечь от одного загорания зелёного сигнала, до следующего). 
// Второй параметр trafficLength — время, в течение которого движение пешеходов блокировано автотранспортом, 
// едущим перпендикулярно пешеходному переходу. Третий параметр turningLength — время, 
// в течение которого возможен проезд по пешеходному переходу транспорта, поворачивающего с параллельных направлений. 
// Функция должна возвращать значение в процентах.

function pedestrianFlowRate(cycleLength, trafficLength, turningLength) {
    if(turningLength > 0){
        return (cycleLength - trafficLength - turningLength) / cycleLength * 100 +"%";
    }else
        return (cycleLength - trafficLength) / cycleLength * 100 + '%';
}

pedestrianFlowRate(60, 30, 0);


