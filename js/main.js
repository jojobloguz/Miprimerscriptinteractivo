const nombre = prompt("Ingrese su nombre:");
console.log(nombre)
const anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
console.log(anioNacimiento)
const anioActual = parseInt(prompt("Ingrese el año actual:"));
console.log(anioActual)
const edad = anioActual - anioNacimiento;
console.log("Su edad es: " + edad)
const integrantesFamilia = parseInt(prompt("Ingrese la cantidad de integrantes de su familia:"));
console.log(integrantesFamilia)
const mensajeFinal = "Hola " + nombre + ", usted tiene " + edad + " años y su familia tiene " + integrantesFamilia + " integrantes.";
console.log(mensajeFinal)
alert(mensajeFinal)

