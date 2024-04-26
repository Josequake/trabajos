/*1)
let array= [5,56,34,8,3,45]
let numeroMayor=0;
function elementoMayor(array,numeroMayor){
    
  for (i = 0; i <= array.length; i++) {
    if (array[i] > numeroMayor) {
        numeroMayor=array[i];
    }
  }
  return numeroMayor;
}


console.log(elementoMayor(array, numeroMayor));
*/


/*2)
array = ["Jose", "Luis", "Carlos", "Maria", "pedro", "oscar"]
array2 = []

function invertirArreglo(array,array2){
    cont = array.length;
    for (i = 0; i<=array.length-1; i++) {
      
      array2[cont-1]= array[i];
      
      cont--;
        
    }

    return array2;
    
}
console.log(invertirArreglo(array,array2))
*/

/*3)
array = [1,2,3,4,5]
elemento=0;
function elementoExiste(array,elemento){
  for (let i = 0; i <= array.length; i++) {
  if (array[i]==elemento) {
    return true
    
  }
  continue
  
}
  return false
}
console.log(elementoExiste(array,0))
*/

/*4)
function eliminarElemento(array,elemento){
  for (let i = 0; i <= array.length; i++) {
  if (array[i]==elemento) {
    return array[i]-elemento;
    
  }
}

}
console.log(eliminarElemento([1,2,3,4,5],1))
*/


/*5)
function sumarArreglo(array){
  for (let i = 0; i <= array.length; i++) {
    suma+=array[i]
}
  return suma
}
console.log(elementoExiste(1,2,3,4,5))
*/

/*6)
function esPalindrome(textoOriginal){

  let vueltaTexto = textoOriginal.split("").reverse().join("")
  if (textoOriginal === vueltaTexto) {
    console.log(" La palabra " , textoOriginal ," es palindroma ")
  }
  else{
    console.log(" La palabra " , textoOriginal ," no es palindroma ")
  }
};

let textoOriginal = "ana"

console.log(esPalindrome(textoOriginal))
*/