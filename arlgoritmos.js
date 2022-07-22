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

// -------------------------------------------------------------


