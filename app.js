// Muestra una ventana con un mensaje de bienvenida.
alert('¡Bienvenido al Juego Número Secreto!');
console.log('¡Bienvenido al Juego Número Secreto!');

// La forma adecuada de declarar variables es usando 'camelCase' y que el nombre sea lo más explicativo/declarativo posible.
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0; // Empieza siendo 0, ya que este número no es un intento válido inicial.
let intentos = 1;

// Math.random() -> Genera números aleatorios entre 0 y 1 (excluyendo el 1).
// Ej: {0.8006550730686252; 0.292232544510477; 0.611261976074407}

// Math.random() * 10; -> Multiplica el resultado por 10, generando números entre 0 y 10 (excluyendo el 10).
// Ej: {1.0679064551805872; 5.211550308126379; 7.676938002606498}

// Math.floor() -> Devuelve el máximo entero menor o igual a un número.

/*
Ejemplo completo:

    - Math.random(); -> 0.3564000128948549
    - 0.3564000128948549 * 10; -> 3.564000128948549
    - Math.floor(3.564000128948549); -> 3

    Hasta acá vamos a conseguir un número entre 0 y 9.
    Lo que tendremos que hacer para que sea entre 1 y 10 es sumarle 1.

    - 3 + 1; -> 4
*/

let nombre = prompt('¿Cuál es tu nombre?');
// Este console.log revela el número secreto. Es útil para depurar, pero podrías querer eliminarlo en la versión final.
let mensaje = `¡${nombre}! El número secreto era el: ${numeroSecreto}.`;
console.log(mensaje);

while (numeroUsuario != numeroSecreto) { // Repetimos el pedido del número hasta que el usuario acierte.
    
    // Pedimos un número y se lo asignamos a numeroUsuario.
    numeroUsuario = prompt('Ingresa un número entre 1 y 10:');

    // Visualizamos el tipo de dato recibido.
    console.log(`El tipo de dato recibido es de un formato: ${typeof(numeroUsuario)}`);

    // Convertimos el string recibido en un entero.
    numeroUsuario = parseInt(numeroUsuario);

    console.log(`El tipo de dato se convierte en formato: ${typeof(numeroUsuario)}`);

    // Forma para ver resultados por consola:
    console.log(numeroUsuario);

    // Este código realiza una comparación entre el número que el usuario ingresó y el número secreto.
    // Si el número del usuario es igual al número secreto, se muestra un mensaje de éxito.
    // El "if" es el método de comparación condicional por defecto en la mayoría de los lenguajes.
    if (numeroUsuario === numeroSecreto) { // Si la condición es verdadera, o si se cumple, ejecuta lo siguiente.
        // ¡Acertaste! Se cumplió la condición.
        alert(`¡Felicitaciones ${nombre}, acertaste!\nEl número secreto es el: ${numeroUsuario}\nY lo hiciste en ${intentos} ${(intentos == 1) ? 'intento.' : 'intentos.'}`);
        console.log(`¡Felicitaciones ${nombre}, acertaste!\nEl número secreto es el: ${numeroUsuario}\nY lo hiciste en ${intentos} ${(intentos == 1) ? 'intento.' : 'intentos.'}`);
    } else { // Si la condición es falsa, o si no se cumple, se ejecuta lo siguiente.
        // No acertaste, no se cumplió la condición.
        if (numeroUsuario < numeroSecreto) {
            alert('El número secreto es "Mayor" que el número ingresado.');
            console.log('El número secreto es "Mayor" que el número ingresado.');
        } else {
            alert('El número secreto es "Menor" que el número ingresado.');
            console.log('El número secreto es "Menor" que el número ingresado.');
        }

        // JavaScript tiene varias formas de incrementar un contador.
        // Incrementamos el contador cuando el usuario no acierta.
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++;

        // Los intentos sirven como un grado de dificultad para mejorar la usabilidad y añadir
        // un punto de complejidad al juego.
        if (intentos > 3) {
            alert('¡Llegaste al número máximo de intentos permitidos!');
            console.log('¡Llegaste al número máximo de intentos permitidos!');
            // La sentencia 'break' permite salir de forma forzada del bucle 'while'.
            break;
        }
    }

    // En JavaScript se pueden usar cadenas de texto con comillas simples o comillas dobles, pero no se pueden mezclar.
    // Pero también se pueden usar comillas invertidas (backticks) para crear
    // cadenas de texto que pueden incluir variables y expresiones dentro de ellas.
    // A este método se le llama "template string" o "interpolación de cadenas".
    // Ejemplo de uso de comillas invertidas:
}