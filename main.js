// alert('javaScript funcionando correctamente')
let variableSinValor
let boolean1 = true
let boolean2 = false
const PI = 3.14;
const TAU = 3.14 * 2;
console.log(TAU);
const miNombre = "Víctor"
let miNumFav = 8
console.log(miNumFav)
const GPT = true
console.log(miNombre.length)
console.log(typeof miNumFav)
console.log(`Mi nombre es ${miNombre} y mi número favorito es el ${miNumFav}`)
const texto = "seré un crack en JavaScript al terminar el bootcamp"
console.log(texto.toUpperCase())
const texto2 = "Hola soy un crack"
console.log(texto2.substring(0, 4))
miNumFav = "8"
console.log(typeof miNumFav)
// No entiendo este ejercicio
const tau2 = "3.14"
console.log(tau2.substring(0, 4)) //por qué hasta el 4,¿no sería 3?

//Arrays

const arrayVacío = []
console.log(arrayVacío)
const arrayNúmeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayNúmeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const arrayNúmerosPares = [0, 2, 4, 6, 8,]
console.log(arrayNúmeros)
const arrayNúmerosNegativos = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
const holaMundo = ['Hola', 'Mundo']
console.log(holaMundo)

const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

console.log(loGuardoTodo)

const arrayDeArrays = [[756, 'victor'], [225, 'navarro'], [298, 'direccion']]
console.log(loGuardoTodo.length)

loGuardoTodo.push("telefono")
console.log(loGuardoTodo)

console.log(loGuardoTodo[1])

loGuardoTodo.unshift("Euralio")
console.log(loGuardoTodo)

//Objetos
let Coche = {
    marca: "bmw",
    modelo: "M4",
    matricula: 2424,
}
console.log(Coche)


let Casa = {
    codPostal: '46009',
    calle: 'Quart',
    portal: 28,
    piso: 8,
}
console.log(Casa.calle)
// diferencia comillas simples y dobles

let FullStackDeveloper = {
    lenguajes: ["javascript", "css", "php"],
    proyectos: ["mi página personal", "formularios", "carta"]
}

let Perro = {
    nombre: "Cuca",
    raza: "Schnauzer",
    color: "Sal y pimienta",
    edad_: 18,
}

let Noticia = {
    titular: "Toda la tarde haciendo este ejercicio",
    cuerpo: "la increíble historia de un chico que estuvo 3 horas haciendo el ejercicio y se quedó a medias",
}

let Persona = {
    nombre:"victor",
    apellidos: "navarro pons",
    edad: 38,
}
console.log(Persona.nombre)

console.log(FullStackDeveloper.lenguajes[0])

let Portatil = {
    marca: 'HP' 
}
console.log(Portatil.marca)
console.log(Portatil["marca"])

let Concierto = {
    grupos: [],
}
console.log(Concierto.grupos)

let Led = {
    lampara1: 'rojo',
    lampara2:'verde',
    lampara3:'azul',
    arrayRGB: ['Rojo','Verde','Azul'],
}
console.log(Led.arrayRGB)

const O_Error = {
   Código: "any", 
}
console.log(O_Error.Código)

let Grupo = {
    integrantes: ['Juanito','Pepito','Menganito'],
}
console.log(Grupo.integrantes[2])

const Impresora = {
    rojo: 100,   
    verde: 80,
    azul: 60,
}






