/*var a = 2;
var b = 3;
var c = a + b;

alert(c);*/

var name, lastname, age;

name = "Pablo";
lastname = "Goulart";
age = 21;

people = name + " " + lastname + " " + age;

document.getElementById("text").innerHTML = people;

//let = não permite redeclarar variavel dentro do mesmo escopo

let x = 10;

{
    let x = 20;
}

alert(x);

//const = nunca muda