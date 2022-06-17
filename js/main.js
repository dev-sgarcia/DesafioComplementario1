/*
Programa para conocer el promedio de edad de una cantidad específica de estudiantes.
1- Se captura el número de personas a evaluar.
2- Se captura la edad de cada una de las personas.
3- Se muestra el promedio de todas las edades.

*/

let numero1 = parseInt(prompt("¿Cuántos alumnos son?"));
let suma = 0;

/*Es un número fijo pero preferí preguntar al usuario la cantidad de alumnos. */
for (i=0; i<numero1; i++){
    let numero2 = parseInt(prompt("¿Edad del estudiante #"+(i+1)+' : '));
    suma= suma+numero2;
}

alert("El promedio de edad de los "+numero1+' alumnos es de : '+parseInt(suma/numero1)+' años.');

