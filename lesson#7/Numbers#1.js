// 1. На курсах по изучению javascript занималось 80 студентов. Половина студентов дошла до выполнения 
// финального проекта. Из них четверо свой проект сдать не смогли. Третья часть сдавших студентов сдала 
// свой проект на 100%. Составьте выражение, 
// вычисляющее количество студентов, сдавших свой проект не на 100%.

var allStudents = 80
var finalProjectStudents = allStudents / 2 - 4
var notSuccessStudents = finalProjectStudents - (finalProjectStudents / 3)

console.log(notSuccessStudents);