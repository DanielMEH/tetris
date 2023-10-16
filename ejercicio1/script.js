// Escribe un programa que acepte una lista de números enteros como entrada. Puedes elegir si deseas leer la 
// entrada desde la consola, definirla directamente en el código o utilizar cualquier otro método que prefieras.

// Luego, implementa un algoritmo que encuentre el número más grande en la lista.

// Muestra el número más grande encontrado como salida.

// Asegúrate de que el programa sea eficiente y pueda manejar listas de diferentes tamaños.

// Comenta tu código para explicar el enfoque que has utilizado.




let numberArrays = [1005,36,45,24,67,23,89,23,46,12,1,0,22,109]
const declareNumbers = (numbers)=> {
    let maxNumber = numbers[0]
    console.log(maxNumber)
    numbers.map(item=> item <= maxNumber? maxNumber= item:item)
    console.log(maxNumber)

}


declareNumbers(numberArrays)


// Problema: Suma y Promedio de Arreglo

// Escribe un programa que realice las siguientes operaciones en un arreglo de números:

// Ingresar datos: El programa debe permitir al usuario ingresar un arreglo de números.
// El usuario debe indicar cuántos números se ingresarán y luego ingresar cada número uno por uno.

// Calcular la suma: Calcula la suma de todos los números en el arreglo.

// Calcular el promedio: Calcula el promedio de los números en el arreglo.

// Encontrar el número máximo: Encuentra y muestra el número más grande en el arreglo.

// Encontrar el número mínimo: Encuentra y muestra el número más pequeño en el arreglo.

// Mostrar el arreglo ordenado: Muestra el arreglo original ordenado de menor a mayor.

// El programa debe mostrar los resultados de las operaciones.

// Puedes elegir cualquier lenguaje de programación con el que te sientas cómodo para resolver este problema. Asegúrate de manejar los casos de error, como cuando el usuario ingresa un número de elementos no válido. Esto te ayudará a practicar la lógica de programación, el manejo de arreglos y la interacción con el usuario.

// Una vez que hayas resuelto el problema, puedes realizar pruebas con diferentes arreglos de números para asegurarte de que tu programa funcione correctamente. ¡Buena suerte!


let arreglo = []

arreglo.push(3.5)
arreglo.push(4.0)
arreglo.push(5.0)

let sumaArray = arreglo.reduce((a,b) =>a+b,0)
console.log(sumaArray/arreglo.length)
let maxnumber = arreglo[0]
let max = arreglo.map(item => item > maxnumber ? maxnumber =item:item)

console.log(maxnumber)
console.log(arreglo.sort().reverse())

let sum=0

for (let i = 0; i < arreglo.length; i++) {
    sum += arreglo[i]
    
}
console.log(sum)

function matrices(A,B){
  const filasA = A.length;
  console.log("🚀 ~ file: script.js:76 ~ matrices ~ filasA:", filasA)
  const columnasA = A[0].length;
  console.log("🚀 ~ file: script.js:78 ~ matrices ~ columnasA:", columnasA)
  const filasB = B.length;
  console.log("🚀 ~ file: script.js:80 ~ matrices ~ filasB:", filasB)
  const columnasB = B[0].length;
  console.log("🚀 ~ file: script.js:82 ~ matrices ~ columnasB:", columnasB)
  const C = new Array(filasA);
  console.log("🚀 ~ file: script.js:84 ~ matrices ~ filasA:", filasA)
  for (let i = 0; i < filasA; i++) {
    C[i] = new Array(columnasB).fill(0);
  }
  console.log(C)

  // Realizar la multiplicación de matrices
  for (let i = 0; i < filasA; i++) {
    console.log("🚀 ~filasA:", filasA)
    console.log("🚀", i)
    
    for (let j = 0; j < columnasB; j++) {

      console.log("🚀 ~ file:", columnasB)

      for (let k = 0; k < columnasA; k++) {
        console.log("", columnasA)
        console.log(C)
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  console.log(C)

  return C;
}


const A = [[1, 2, 3], [4, 5, 6]]
const B = [[7, 8], [9, 10], [11, 12]]

matrices(A,B)




// Por supuesto, aquí tienes un ejercicio más sencillo relacionado con la serie de Fibonacci en JavaScript:

// Problema: Serie de Fibonacci

// Escribe un programa en JavaScript que genere y muestre los primeros "n" números de la serie de Fibonacci. 
// La serie de Fibonacci comienza con 0 y 1, y cada número posterior es la suma de los dos números anteriores.

// El programa debe pedir al usuario que ingrese un número "n" (la cantidad de números de Fibonacci que desea generar).

// Luego, genera y muestra los primeros "n" números de la serie de Fibonacci.

// Aquí tienes un ejemplo de cómo podrías hacer esto en JavaScript:

let numeros = 6

function fibonacci(n){
console.log("🚀 ~ file: script.js:136 ~ fibonacci ~ n):", n)

    let serie=[0,1]

    for (let i = 2; i < n; i++) {
        let newValue = serie[i -1] + serie[i - 2]
        serie.push(newValue)
        
    }
    return serie

}

let result = fibonacci(numeros)

console.log(result)



let matricesArray = [[[1,2,3,4]],[[1,2,3,4]]]

let c =[]

for (let i = 0; i < matricesArray.length; i++) {
    for (let j = 0; j < matricesArray[i].length; j++) {
       for (let k = 0; k < matricesArray[i][j].length; k++) {
          let data = matricesArray[i][j][k] **2
           c.push(data)
        }
    }
    
}
console.log(c)

matricesArray.forEach(matriz=>{
    matriz.forEach(submatriz=>{
        submatriz.forEach(element=>{
            c.push(element**2)
        })
    })
})
c = c.filter((value,indice,self) => self.indexOf(value) === indice)
console.log(c)