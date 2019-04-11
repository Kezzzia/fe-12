// 2. Необходимо вычислить стоимость входа в клуб. Если человек младше 16 лет, 
// то мы его не пускаем вообще, если девушка, то стоимость входа будет 10 рублей, 
// если парень и возраст от 16 и до 18 лет, то стоимость входа будет составлять 13 рублей, 
// если 18 и старше, тогда он платит 15 рублей.

var ageVisitor = prompt("specify your age");

if (ageVisitor >= 16){
  var genderVisitor =  prompt("specify your gender");

  if (genderVisitor === "woman"){
    alert('cost of visiting the club 10$');
  } else if (genderVisitor === "man" && ageVisitor >= 16 && ageVisitor <18){
      alert('cost of visiting the club 13$');
  } else if (genderVisitor === "man" && ageVisitor >= 18){
      alert('cost of visiting the club 15$');
  }
} else {
  alert ("go away");
}