let nombre= "Jose";
let numero1=45;
let numero2=55;

function sumarDosNumeros(numero1,numero2){

    return numero1+numero2;
}
console.log(sumarDosNumeros(3,46));


function restarDosNumeros(numero1,numero2){

    return numero2-numero1;
}
console.log(restarDosNumeros(50,45));


function multiplicarDosNumeros(numero1,numero2){

    return numero1*numero2;
}
console.log(multiplicarDosNumeros(40,90));


function dividirDosNumeros(numero1,numero2){

    return numero1/numero2;
}
console.log(dividirDosNumeros(40,20));


function saludo(nombre){

    return "hola como vas" + nombre
}
console.log(saludo(" jose"));


function esPar(numero1){
    if (numero1 % 2 == 0 ) {
        return true
    }else{
        return false
    }
}
console.log(esPar(46));

