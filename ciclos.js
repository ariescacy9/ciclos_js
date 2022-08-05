
function obtenerMayor(x, y) {
  let numx=parseInt(x); // "x" e "y" son números enteros (int).
  let numy=parseInt(y);
  if(numx>numy){
    return console.log (numx+' '+'es el numero mayor'); // Devuelve el número más grande
  } 
  else if(numy>numx){
    return console.log (numy+' '+'es el numero mayor');
  }
  else if(numx==numy){
    return console.log ((numx||numy)+' '+'son iguales'); // Si son iguales, devuelve cualquiera de los dos
  } else {
    return console.log ('no son numeros');
  }
}

obtenerMayor(0,3);

//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
function mayoriaDeEdad(edad) {
  numEdad = parseInt(edad);
  return console.log (numEdad >= 18 ? "Allowed" : "Not Allowed");
}

mayoriaDeEdad(18);

//Recibimos un estado de conexión de un usuario representado por un valor numérico.
//Devolver el estado de conexión de usuario en cada uno de los casos.
function conection(status) {
  numStatus = parseInt(status);
  switch (numStatus) {
    case 1:
      return console.log ("Online"); //Cuando el estado es igual a 1, el usuario está "Online"
      break;
    case 2:
      return console.log ("Away"); //Cuando el estado es igual a 2, el usuario está "Away"
      break;
    default:
      return console.log ("Offline"); //De lo contrario, presumimos que el usuario está "Offline"
      break;
  }
}

conection(1);

 // Devuelve un saludo en tres diferentes lenguajes:
function saludo(idioma) {
  switch (idioma) {
    case "aleman":
      return console.log ("Guten Tag!"); // Si "idioma" es "aleman", devuelve "Guten Tag!"
      break;
    case "mandarin":
      return console.log ("Ni Hao!"); // Si "idioma" es "mandarin", devuelve "Ni Hao!"
      break;
    case "ingles":
      return console.log ("Hello!"); // Si "idioma" es "ingles", devuelve "Hello!"
      break;
    default:
      return console.log ("Hola!"); // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
      break;
  }
}

saludo('aleman');


//La función recibe un color. Devolver el string correspondiente:
function colors(color) {
  switch (color) {
    case "blue":
      return console.log ("This is blue"); //En caso que el color recibido sea "blue", devuleve --> "This is blue"
      break;
    case "red":
      return console.log ("This is red"); //En caso que el color recibido sea "red", devuleve --> "This is red"
      break;
    case "green":
      return console.log ("This is green"); //En caso que el color recibido sea "green", devuleve --> "This is green"
      break;
    case "orange":
      return console.log ("This is orange"); //En caso que el color recibido sea "orange", devuleve --> "This is orange"
      break;
    default:
      return console.log ("Color not found"); //Caso default: devuelve --> "Color not found"
      break;
  }
}

colors('red');

// Devuelve "true" si "numero" es 10 o 5
// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
function esDiezOCinco(numero) {
  return console.log (numero === 10 || numero===5? "true" : "false");
}

esDiezOCinco(10);

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
function estaEnRango(numero) {
  return console.log (numero < 50 && numero > 20 ? "true" : "false");
}

estaEnRango(30);

// Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // `Math.floor` para redondear sirve
function esEntero(numero) {
  return console.log (Number.isInteger(numero));
}

esEntero(-0.3);


// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero
function fizzBuzz(numero) {
  if(numero%3===0 && numero%5===0){
    return console.log ("fizzbuzz");
  }
  else if(numero%5===0){
    return console.log ("buzz");
  }
  else if(numero%3===0){
    return console.log ("buzz");
  } else {
    return console.log (numero);
  }
}

fizzBuzz(30);

  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
function operadoresLogicos(num1, num2, num3) {
  if(num1>num2 && num1>num3 && num1>0) {
    return console.log ("Número 1 es mayor y positivo");
  }
  if(num1<0 || num2<0 || num3<0){
    return console.log ("Hay negativos");
  }
  if(num3>num2 && num3>num1) {
    num3++
    return console.log (num3);
  }
  if(num1===0 || num2===0 || num3===0){
    return console.log ("error");
  }else {
    return console.log ("falso");
  }
}

operadoresLogicos(3, 4, 1);

// Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
function esPrimo(numero) {
  if(numero ===2){
    return true;
  }else if(numero<2){
    return false;
  } for(let i=2; i<numero;i++){
    if(numero%i ===0){
      return false;
    }
  }
  return true;
}

esPrimo(25);

 //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
function esVerdadero(valor){
  if(valor ==='true'){
    console.log("Soy verdadero")
  }
  else if (valor ==='false') {
    console.log("Soy falso")
  }
}
esVerdadero("true");


//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
function tablaDelSeis(){
  let resultado = '';
  tablaFinal = [];
  for (let i = 0; i < 61; i++) {
    resultado = 6 * i;
    tabla = '6'+'*'+i+'='+ resultado;
    tablaFinal.push(tabla);
  }
  return console.log(tablaFinal);
}
tablaDelSeis();


//Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
function tieneTresDigitos(numero){
  return console.log ( 1000>numero && numero>99 ? "true" : "false");
}

tieneTresDigitos(123)

//Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
function doWhile(numero) {
  i=0;
  do{
    numero = numero + 5;
    i++
  } while(i<8);
  return console.log (numero);
}

doWhile(1);