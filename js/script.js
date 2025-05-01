const display = document.getElementById('display');
const botones = document.querySelectorAll('[data-valor]');
const btnIgual = document.getElementById('igual');
const btnLimpiar = document.getElementById('limpiar');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        display.value += boton.getAttribute('data-valor');
    });
});

btnIgual.addEventListener('click', () => {
    try{
        display.value = eval(display.value);
    } catch {
        display.value = 'error';
    }
});

btnLimpiar.addEventListener('click', () => {
    display.value = '';
})