// Se declaran las constantes para manipular los elementos
const display = document.getElementById('display');
const botones = document.querySelectorAll('[data-valor]');
const btnIgual = document.getElementById('igual');
const btnLimpiar = document.getElementById('limpiar');


// Agrega el valor del boton presionado al contenido actual del display
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        display.value += boton.getAttribute('data-valor');
    });
});

// Realiza la operación mediante una función
btnIgual.addEventListener('click', () => {
    const resultado = calcular(display.value);
    display.value = resultado;

    // Si hay error, desactiva los botones
    if (resultado === 'error') {
        botones.forEach(boton => boton.disabled = true);
        btnIgual.disabled = true;
    }
});

// Limpia el contenido del display
btnLimpiar.addEventListener('click', () => {
    display.value = '';

    // Reactiva todos los botones
    botones.forEach(boton => boton.disabled = false);
    btnIgual.disabled = false;
})

// funcion para realizar operacion aritmetica
function calcular(expresion) {
    try {
        if (/^[\d+\-*/.() ]+$/.test(expresion)) {
            return Function('"use strict"; return (' + expresion + ')')();
        } else {
            return 'error';
        }
    } catch {
        return 'error';
    }
}

function borrarUltimo() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Si es input
  }
  