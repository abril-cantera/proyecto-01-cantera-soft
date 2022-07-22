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


