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

// Convierte el valor del display en una operacion aritmetica
btnIgual.addEventListener('click', () => {
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'error';
    }
});

// Limpia el contenido del display
btnLimpiar.addEventListener('click', () => {
    display.value = '';
})