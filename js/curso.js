'use sctrict'
console.log('JS Cargado');

//Objetos
let objeto = {
  atributo1: 78,
  nombre: 'Perico Palotes',
  parejas: ['María', 'Pedro', 'Macario'],
  metodo2: function(num) {
    console.log('Método 2: ' + num * 2);
  }
}

console.log(objeto);
console.log('Me llamo ' + objeto.nombre);
console.log('Una de mis parejas es ' + objeto.parejas[1]);

function funcion1(){
  document.write('Me encanta JavaScript <br />');
}
funcion1()
let num = 7
num = funcion1


num()

objeto.metodo = funcion1

objeto.metodo()
objeto.metodo2(88)

//Parametros de funciones
function suma(a, b){
  return a+b;
}

console.log(suma(5, 8));
console.log(suma(2));
console.log(suma());
function ejecuta(callback) {
  console.log('Ejecutando...');
  callback()
}

ejecuta(funcion1)

//Excepciones
try {
  let nombre = 42
  console.log(nombre.substr(2, 4));
} catch (e) {
  console.log(e);
} finally {
  console.log('Ejecuto el finally');
}


//Arrays

let vector = [1,2,2]
let guarreria = [1,2,'asdad',function(){console.log('PFFF');},true]
let matriz = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(matriz[1][2]);

//Recorrer un Array

for(let i=0; i < vector.length;i++) {
  console.log(vector[i]);
}

for( let elemento of vector) {
  console.log(elemento);
}

for( let atributo in objeto) {
  console.log('El atributo \'' + atributo + '\' vale ' + objeto[atributo]);
}


let matriz2 = [
  [1, 2, 3],
  [4, 5, 14, 78],
  [7, 8]
]

for(let fila in matriz2) {
  console.log(fila);
}
