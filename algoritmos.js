//ejercicio de suma
var numero1=0;
var numero2=0;
var resultado = 0;
var respuesta= "";
function suma(n1,n2){
    return n1+n2;
}
function pedirnumero(orden){
    return parseInt(prompt(`Ingrese el ${orden} valor`));
}
do {
    numero1= pedirnumero("primero");
    numero2= pedirnumero("segundo");

    resultado = suma (numero1, numero2);
    //console.log(`El valor de la suma es ${resultado}`)
    // alert(`El valor de la suma es ${resultado}`)
    respuesta= prompt(`El valor de la suma es ${resultado}\n
    Desea seguir sumando? (si para continuar)`);
    
} while (respuesta=="si");
alert(`Operacion finalizada`);



// --------------------------------------------------


// Ejercicio de multiplicacion
numero1=0;
numero2=0;
resultado=0;
respuesta="";
function multiplicacion(num1,num2){
    return num1 * num2;
}
while (respuesta!="no") {
    numero1= pedirnumero("primer");
    numero2= pedirnumero("segundo");
    resultado = multiplicacion(numero1 , numero2);
    respuesta= prompt(`El valor de la multiplicacion es ${resultado}\n
    Desea seguir multiplicando? (no para salir)`);
}
alert(`Operacion finalizada`);


// -------------------------------------------------------------

//Ejercicio de resta
 numero1=5;
 numero2=25;
 function resta(num1,num2) {
    return num1 - num2;
 }
 if (numero1==numero2) {
    resultado=0;
 } else if (numero1>numero2) {
    resultado=resta(numero1,numero2)
 } else { resultado=resta(numero2,numero1)};
 console.log (`el resultado es ${resultado}`)

 //-----------------------------------------------------------

//Ejercicio Division

 var dividendo= 25;
 var divisor= 5;
 function divicion(num1,num2) {
    return num1 / num2;
 }
 if (dividendo==divisor) {
    resultado=1;
 }
 else if (divisor==0) {
    resultado="Error";
 }
 else {
    resultado=divicion(dividendo,divisor);
 }
 if (resultado=="Error") {
    console.log ("El divisor debe ser mayor a 0");
 }
 else {
    console.log (`El valor de la division es ${resultado}`)
 }

//-----------------------------------------------------------


//Ejercicio de sacar Promedio

var nombre;
var matematica, lengua, quimica, promedio;

nombre = prompt("Cual es tu nombre? ");

matematica = parseInt(prompt(`hola ${nombre} Cual es tu nota de matematica?`));

lengua = parseInt(prompt("Cual es tu nota de lengua? "));

quimica = parseInt(prompt("Cual es tu nota de quimica? "));

function promediar(lengua, matematica, quimica) {
  return (matematica + lengua + quimica) / 3;
}

promedio = promediar(lengua, matematica, quimica);

if (promedio >= 6) {
  console.log(`FELICIDADES ${nombre} tu promedio es: ${promedio}`);
} else {
  console.log(`Tu promedio es ${promedio}`);
}
