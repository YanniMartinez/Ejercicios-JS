/*** Diferencias entre Objetos y arreglos
 * Arreglos: Se inician con Corchetes "[]"
 * Objetos: Se inician con llaves "{}"
 */
var producto = new Object();
var producto = {};

var producto = {
    nombre: "Manzana",
    categoria: "Frutas",
    precio: 1.99
}
console.log(producto);

/**Podemos acceder a una propiedad usando el punto 
 * o la notación cuadrada
 */
console.log(producto.nombre);
//"Manzana"

console.log(producto["nombre"]);
//Manzana

var persona = {
    nombre: ["Bob","Smith"],
    edad: 32,
    genero: "Masculino",
    intereses: ["Música", "Esqui"],
    bio: function () {
        alert(this.nombre[0] + " " + this.nombre[1] + " Tiene " 
        + this.edad + " años. Le gusta "+ this.intereses[0] + " y "+
        this.intereses[1] + ".");
    },
    saludo: function(){
        alert("Hola, soy" + this.nombre[0] + ". ");
    }

}

/**Aplicando el objeto anterior */
persona.nombre
persona.nombre[0]
persona.edad
persona.intereses[1]
persona.bio()
persona.saludo()
/**El método FETCH es el nuevo standar, es lo que se está utilizando más
 * actualmente en JS, es similar a JQuery y AJAX o mediante XHRequest.
 * El FETCH es el método hacia el que se están declinando los programadores
 * debido a su sencilles y lo fácil que es de usar.
 * El método FETCH envia peticiones al Protocolo HTTP.
 */

/******************************************************* 
/ ******************EJERCICIOS ************************
*  ******************************************************
*/


/**
 * ******************EJERCICIOS DE OBJETOS *************** 
 * */

/**Crear un objeto que se llame persona, el ejemplo debe tener 
un nombre, sus apellidos, edad y debe tener un método para saludar. Otro método donde diga su edad.
En consola imprimir el resultado de ambos métodos*/
console.log("\n" + "Ejercicio 1: " );
var personaEjercicio = {
    nombre: "Yann",
    apellidos: "Martinez Martinez",
    edad: 21,
    genero: "Masculino",
    saludar: function(){
        console.log("Hola, soy " + this.nombre + ". ");
    },
    decir_edad: function(){
        console.log("Hola, mi edad es: " + this.edad + ". ");
    }
}

personaEjercicio.saludar();
personaEjercicio.decir_edad();

/**Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.
 */
console.log("\n" + "Ejercicio 2: " );
function llenarObjeto(Nombre, Apellidos, Edad){
    var persona ={
        nombre: Nombre,
        apellidos: Apellidos,
        edad: Edad
    }
    return persona;
}
console.log(llenarObjeto("Ivan","Martinez Martinez",23));


/** *************EJERCICIOS DE API'S ************ */

/** Recuperaremos los datos de la API
en una etiqueta img mostrar la imagen

Documentación:
https://dog.ceo/dog-api/
https://docs.thecatapi.com/

Función general:
En una estructura HTML habrá un botón que diga “Elegir perro o Elegir gato”, al presionar el botón lanzará la petición y mostrará la imagen recopilada.

Aqui consulté cosas del Fetch: https://lenguajejs.com/javascript/peticiones-http/fetch/
*/

