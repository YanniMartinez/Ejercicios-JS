/**
 * Crear una funcion que reciba por parametros 2 numeros y lo sume, que regrese el resultado
 * Imprimir por consola 5 sumas diferentes.
 * Nosotros definimos los datos , no será necesario usar el prompt
 */

 function sumaNumeros(num1, num2){
    var resultado = num1 + num2;
    console.log('El resultado fue: '+resultado);
}

sumaNumeros(1,3);
sumaNumeros(6,5);
sumaNumeros(24,46);
sumaNumeros(53,120);
sumaNumeros(100,20);


/**Crear un arreglo de los meses y los vamos a imprimir por console */
var meses = new Array();
meses = ["Enero", "Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);
console.log(meses[3]);
console.log(meses[4]);
console.log(meses[5]);
console.log(meses[6]);
console.log(meses[7]);
console.log(meses[8]);
console.log(meses[9]);
console.log(meses[10]);
console.log(meses[11]);
/**Crear un ciclo en donde se impriman los meses. */
for(var i=0; i<12; i++){
    console.log(meses[i]);
}


/**API OTAKU */
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
/**Consumiremos la API de Animechan:  https://animechan.vercel.app/
 * Tiene un API de que al hacer una consulta de algo random, nos devuelve el nombre del anime, el personaje y la frase
 * Podemos hacerlo mediante Promesas y mediante VIAWAY
*/

/**Codigo de Ejemplo del uso de FETCH */
//fetch('http://example.com/movies.json')
//  .then(response => response.json())
//  .then(data => console.log(data));

/**Empleando el FETCH */
fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(data => console.log(data));

/**Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola. 
 * El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) 
 * y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.
 * 
 * Esto es, por supuesto, una respuesta HTTP no el archivo JSON. 
 * Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json() 
 * (definido en el mixin de Body, el cual está implementado por los objetos Request y Response). */

/**Más opciones de usar el Fetch para obtener otra información: https://animechan.vercel.app/guide */
/**Obteniendo 10 citas aleatorias: */
fetch('https://animechan.vercel.app/api/quotes')
      .then(response => response.json())
      .then(quotes => console.log(quotes));//Lo que aqui cambia es la dirección a la que apunta el FETCH

/** Obteniendo cita mediante el titulo del anime*/
fetch('https://animechan.vercel.app/api/quotes/anime?title=dragonball')
      .then(response => response.json())
      .then(quotes => console.log(quotes));

//Obteniendo cita por personaje
fetch('https://animechan.vercel.app/api/quotes/character?name=saitama')
      .then(response => response.json())
      .then(quotes => console.log(quotes));
