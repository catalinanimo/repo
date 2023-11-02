// Java es una Programacion orientada a objetos


//declarando una variable

let a = 1;

let b = 2;

//modificando una variable

a = 5;


// hay distintos tipos de datos (primitivos):
/*
Number = int y float (ambos en un mismo tipo)

String = cadena de caracteres

Booolean = verdadero o falso
*/

let nombre = "Esteban"
let numer = 45.5
let profesoractivo = true

//print de python es: print ()

console.log (a+b)

// resta, suma, mult , div (cociente),  porcentaje (%), potencia (**)


// podes hacer cualquiera, ejemplo:

console.log ('hola'+1)
console.log ('11'-1) /* lo hace resta = 10*/
console.log ('hola'-1) /* esto da error*/

// NAN : Not a Number

// LA SUMA CONCATENA TAMBIEN

/*
Operadores logicos:
== igualda debil (compara solo el valor no el tipo de dato) , si hay string comparado con num y son iguales nos da true
=== igualdad estricta
!= distinto
> mayor
>= mayor o igual
< menor
<= menor o igual
*/

console.log (10>9)
console.log (10==10)


/* funciones:
def saludar ():
    print ("HOLA")

*/

function saludar () {
    console.log ('HOLA')
}

function sumar () {
    console.log (a + b)

}

function sumar (valor1, valor2){
    console.log (valor1 + valor2)
}

function espar (num){
    console.log (num%2 === 0)
}

// voy a tener una funcion para consologear

function consologear (resultado){
    console.log(resultado)
}

function esimpar (numero) {
    return (numero%2 === 1)
}
consologear (esimpar (2))



function IMC (peso,altura) {
    return (peso/altura** 2)

}

consologear (IMC(87,1.85))


// diferencia entre una variable y una constante, una constante no se puede cambiar bajo ningun conceoto
const pi = 3.1415

/* 
CamelCase : sumasIva (nostros USAMOS ESTE)
snake_case: sumar_iva
kebab_case: sumar-iva
l33t : sum4r_1v4
*/

/* Operadores logicos:
&& and
|| or
! not
*/


// array que son? ponele que listas */

let array = [1,2,3,4] // valores: 4 e igual que en python hay pos 0,1,2 y 3 EMPIEZAN EN CERO

console.log (array [3]) // asi selecciono una posicion

array [3] = (array [3]*2)
console.log (array [3])

// no se puede dejar una variable antimodificable ejemplo: */

const array2 = [0]
array2 [0] = (array2[0]+1)


// agregar al array:

const array1 = [2];
array1.push (1)
console.log (array1)

// saca del array el ultimo:

array.pop ()

// saca del array el primero:

array.shift ()

// listas con valores pares:

let estudiante1 = {nombre:'chiara', edad:'11',activo: true} // todos son propiedades de los objetos
console.log (estudiante1.nombre)


function cumplirAnios( ) {//metodo
    this.edad = this.edad + 1

}

array.pop ()

// crear objetos dentro de un array: 

const estudiantes = [ 
    estudiante1 = {nombre:'chiara',},
    estudiante2 = {nombre:'santuago',},
    estudiante3 = {nombre: 'Lautaro',},]

console.log (estudiantes[2].nombre)

// PARA MANDAR A LA BD POST Y PARA OBTENER DE AHI GET:

let profesor = {
    nombre: 'Esteban',
    edad: 30,
    actividad: true,

}

let profesorstring = JSON.stringify (profesor)  
let profesorobjeto = JSON.parse (profesorstring)