// Se declaran las constantes para manipular los elementos
const expresion = document.getElementById('expresion');
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('[data-valor]');
const btnIgual = document.getElementById('igual');
const modoToggle = document.getElementById('modoToggle');


// Agregar números y operadores
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    expresion.textContent += boton.getAttribute('data-valor');
  });
});


// Calcular resultado
btnIgual.addEventListener('click', () => {
  try {
    const expr = expresion.textContent;
    if (/^[\d+\-*/.() ]+$/.test(expr)) {
      const res = Function('"use strict"; return (' + expr + ')')();
      resultado.textContent = new Intl.NumberFormat().format(res);
    } else {
      resultado.textContent = "Error";
    }
  } catch {
    resultado.textContent = "Error";
  }
});

// Borrar todo
function limpiar() {
  expresion.textContent = '';
  resultado.textContent = '0';
}

// Borrar último carácter
function borrarUltimo() {
  expresion.textContent = expresion.textContent.slice(0, -1);
}


// Modo claro/oscuro
modoToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});