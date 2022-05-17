// CLASE 4 - Tarea 4 - Viernes 29 de abril 2022
// Estructura de Control - Selección

// Ejercicio – Aumento de Sueldo

/* • Una empresa desea premiar a sus empleados con un aumento de 
sueldo. Este aumento se ajusta a la siguiente tabla:
Actual Sueldo con Aumento
0 - 15.000 $ 20%
15.001 - 20.000 $ 10%
20.001 - 25.000 $ 5%
Más de 25.000 $ No hay aumento

• Desarrolle un algoritmo dado el salario actual de un empleado
 determine el aumento de sueldo a aplicar y se lo muestre */

let dato = document.getElementById("dato");

rotulo.innerHTML = "Ingrese el salario actual del empleado: ";

let nuevoSueldo: number = 0;

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  let sueldoActual: number = Number(dato.value);

  if (0 < sueldoActual && sueldoActual <= 15000) {
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Ud. tiene un aumento de 20%. Nuevo Sueldo: $" + nuevoSueldo);
  } else if (15001 < sueldoActual && sueldoActual <= 20000) {
    nuevoSueldo = sueldoActual * 1.1;
    console.log("Ud. tiene un aumento de 10%. Nuevo Sueldo: $" + nuevoSueldo);
  } else if (20001 < sueldoActual && sueldoActual <= 25000) {
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Ud. tiene un aumento de 5%. Nuevo Sueldo: $" + nuevoSueldo);
  } else {
    nuevoSueldo = sueldoActual;
    console.log("Ud. no tiene aumento");
  }
});

//FILMINAS Ejercicio – Aumento de Sueldo -PAG.70
//… funcionalidad de ingreso de datos …
/*rotulo.innerHTML = "Ingrese el salario actual del empleado: ";
let sueldoActual : number = dato.value;
let nuevoSueldo : number = 0;
if ( 0 < sueldoActual && sueldoActual <= 15000 ) {
nuevoSueldo = sueldoActual*1.2;
console.log("Ud. tiene un aumento de 20%");
} else if ( 15001 < sueldoActual && sueldoActual <= 20000 ) {
nuevoSueldo = sueldoActual*1.1;
console.log("Ud. tiene un aumento de 10%");
} else if ( 20001 < sueldoActual && sueldoActual <= 25000 ) {
nuevoSueldo = sueldoActual * 1.05;
console.log("Ud. tiene un aumento de 5%");
} else {
nuevoSueldo = sueldoActual;
console.log("Ud. no tiene aumento");
}*/

/*Ejercicio revisado en el sitio Web CodeSandbox 
 Repositorio prof. Carlos Daniel Tonelli
https://codesandbox.io/s/github/daniel-tonelli/Repositorio
*/
