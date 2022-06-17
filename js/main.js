/*
Programa para conocer el promedio de edad de una cantidad específica de estudiantes.
1- Se captura el número de personas a evaluar.
2- Se captura la edad de cada una de las personas.
3- Se muestra el promedio de todas las edades.

*/

let numero1 = parseInt(prompt("Vamos a promediar las edades de la clase ¿Cuántos alumnos son?"));
let suma = 0;

/*Es un número fijo pero preferí preguntar al usuario la cantidad de alumnos. */
for (i=0; i<numero1; i++){
    let numero2 = parseInt(prompt("¿Edad del estudiante #"+(i+1)+' : '));
    suma= suma+numero2;
}
alert("El promedio de edad de los "+numero1+' alumnos es de : '+parseInt(suma/numero1)+' años.');

/*
Programa para deletrear un nombre o palabra
 */
prompt("Instrucciones : \n1- Captura letra por letra tu nombre.\n2- Al finalizar captura 'ESC'.\n...presiona ENTER para iniciar.");
let letra = prompt("Ingresa la primer letra ('ESC' para finalizar)");
let cadena = letra;
let textoConcatenar = " ";

while (textoConcatenar != "ESC") {
    textoConcatenar = prompt("Ingresa la siguiente letra ('ESC' para finalizar)");
    if (textoConcatenar != "ESC") {
        cadena = cadena+textoConcatenar;
    }    
}

prompt("El nombre capturado es: "+cadena+"\nENTER para salir.");
