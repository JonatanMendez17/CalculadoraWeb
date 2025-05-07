// Se declaran las constantes para manipular los elementos
const display = document.getElementById('display');
const botones = document.querySelectorAll('[data-valor]');
const btnIgual = document.getElementById('igual');
const btnLimpiar = document.getElementById('limpiar');
document.addEventListener("keydown", manejarTecla);


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
  
function manejarTecla(evento) {
    const tecla = evento.key;
    const display = document.getElementById("display");
  
    // Si es un número o un operador válido, lo agregamos
    if ("0123456789+-*/.".includes(tecla)) {
      display.value += tecla;
    }
  
    // Si es Enter o =, evalúa
    if (tecla === "Enter" || tecla === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
  
    // Si es Backspace, borra el último carácter
    if (tecla === "Backspace") {
      display.value = display.value.slice(0, -1);
    }
  
    // Si es Escape, borra todo
    if (tecla === "Escape") {
      display.value = "";
    }
  }
  