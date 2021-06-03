//alert('Hola mundo'); //Permite generar una alerta en la parte superior del navegador
var nombre= 'Yanni';
var apellidos = 'Martinez Martinez';
var edad = 21;
//console.log(nombre + apellidos);
console.log(nombre + ' ' + apellidos);
console.log(nombre,apellidos); //Otra alternativa para no tener que poner el espacio
console.log('Mi edad es: ' + edad);

var numero = 11; //Tipo de dato entero
var otrmoNumero = '11'; //Tipo de dato String

console.log(typeof(numero));
console.log(typeof(otroNumero));

/**
 * En java Script las variables toman el tipo de valor de inmediato
 * EL promp es como el input en JS o el Scanner en Java y viene asigna
 * a las variables un tipo de dato string
 * parseInt() Permite el Casteo de tipo de datos.
*/
/*var base = prompt('Escribe la base del triángulo');
var altura = prompt('Escribe la altura del triángulo');
var resultado = (base + altura) /2 ;

alert('EL área del triángulo es: ' + resultado);*/
//var nombre = prompt('¿Cual es tu nombre?');
//console.log(nombre);
/**
 * Esto es un comentario de varias lineas
 * NaN significa "Not an Number"
 */

//Hacer un codigo que le pida al usuario 2 numeros a traves del prompt, estos numeros los vamos a Sumar, restar multiplicar y dividir. Al final mostrar el resultado.
console.log(' ');
console.log('Ejercicio 1');

var num1 = parseInt(prompt('Ingrese el primer número: '));
var num2 = parseInt(prompt('Ingrese el segundo número: '));
console.log('Su primer número ingresado es: '+ num1);
console.log('Su segundo número ingresado es: '+ num2);
var suma = num1 + num2;
var resta = num1 - num2;
var multiplicar = num1 * num2;

console.log('El resultado de la suma es: ' + suma);
console.log('El resultado de la resta es: ' + resta);
console.log('El resultado de la multiplicación es: ' + multiplicar);
if (num2 !=0){
    var division = num1 / num2;
    console.log('El resultado de la división es: ' + division);
}else{
    console.log('No se puede hacer una división entre 0');
}

/***
 * Hacer un programa en javascript en donde se le pregunte la edad al usuario 
 * y si el usuario tiene 18 años o mas y menos de 29 años, le impriman por consola 
 * que ha sido aceptado en el programa de generation, en caso de no ser así mostrar un 
 * mensaje indicando que no cumple los requisitos del programa
 */ 
console.log(' ');
console.log('Ejercicio 2');

var edad = parseInt(prompt('Ingrese su edad: '));
if (edad >= 18 && edad <29){
    console.log('Usted fué aceptado en Generation :D');
}else{
    console.log('Usted no cumple los requisitos para entrar al programa :,( ');
}

/** 
 * Calcular el salario bruto y neto mensual y quincenal de una persona, 
 * el salario diario debe ser ingresado por el usuario a traves de promt (pago por día), 
 * los descuentos para calcular el sueldo netos serán sueldo bruto - ISR(30%)  - IMSS(10)
 * El salario bruto es lo que pagan pero sin descuentos
 * Neto implica los impuestos
 */
console.log(' ');
console.log('Ejercicio 3');
var pagoDia = parseInt(prompt('Ingrese el salario por día: '));
var quincenal = pagoDia * 14;
var mensual = quincenal *2;
console.log('Su salario bruto quincenal es: ' + quincenal);
console.log('Su salario bruto mensual es: ' + mensual);

quincenal = quincenal - (quincenal * 0.30) - (quincenal * 0.1);
mensual = mensual - (mensual * 0.3) - (mensual * 0.1);

console.log('Su salario neto quincenal es: ' + quincenal);
console.log('Su salario neto mensual es: ' +mensual);

/**Este es el ejemplo de una función:
 * en este caso especifíco suma 2 números.
 * Siendo los parámetros: num1 y num2. */ 
function sumaNumeros(num1, num2){
    var resultado = num1 + num2;
    console.log('El resultado fue: '+resultado);
}

/**Mandamos a llamar a la función. 
 * NOTA: Siempre debemos definir la función antes de 
 * mandarla a llamar.
 */
sumaNumeros(1,3);
sumaNumeros(6,5);

/**Los objetos en JS se llaman JSON = Java Script Object Notation 
 * Un Scope es un bloque de código declarado entre llaves, todo lo declarado 
 * en ese espacio sólo vive en ese espacio.
 * JS también utiliza variables gobales y locales. Dentro de la función pasan valores por copia.
*/

/**En JS los arreglos son dinámicos 
 * En este caso .length es una propiedad y no un método como .sort() y .reverse() */
var equipos = ["Real Madrid", "Manchester Utd", "Bayern Munich","Juventus"];
equipos.sort();
equipos.reverse();
console.log(equipos.length);
/**Este es un ejemplo de multiples dimensiones */
//var arrayMuchasDimensiones = [1, ["hola", "que", "tal", ["estas", "estamos", "estoy"], ["bien", "mal"], "acabo"], 2, 5];


/**Ciclos: Permiten repetir instrucciones de forma automatizada:
 * Para que no coloquemos la misma instrucción muchas veces de forma manual
 */
for(var i=0; i < 10; i++){
    console.log("Hola mundo :D");
}

/**En JS el "let" es equivalente a "var" pero let tiene mejor eficiencia en memoria
 * Las constantes se declaran con "const"
 */