/*
  6 INSTRUCCIONES:
  1. Dado un numero par llamado 'contador'
  Imprimir los numeros del 1 a la mitad del contador.

  Por ejemplo:
  Dado 50, imprimir los numeros del 1 al 25.
  Dado 100, imprimir los numeros del 1 al 50.
*/

for (let i = 0; i <= 100; i++) {
  if (i==51) {
    break;
  }
  console.log(i);
}
  


/*
  INSTRUCCIONES:
  1. Dado un numero par llamado 'contador'
  Imprimir los numeros del 1 a la mitad del contador.

  Por ejemplo:
  Dado 50, imprimir los numeros del 1 al 25.
  Dado 100, imprimir los numeros del 1 al 50.
*/

function imprimirMitadDeNumeros(contador) {
  // INSERTE CODIGO AQUI
  for (i=0; i<=contador; i++)
  {
      console.log(i);
  }    

}
imprimirMitadDeNumeros(25)
