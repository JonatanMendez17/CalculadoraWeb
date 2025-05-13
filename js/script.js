// ============= Seleccion de elementos ====================
const expresion = document.getElementById('expresion');
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('[data-valor]');
const btnIgual = document.getElementById('igual');
const modoToggle = document.getElementById('modoToggle');
const modoTexto = document.getElementById('modoTexto');


// ================ Listeners ===============
// Teclado
document.addEventListener("keydown", escucharTeclado);

btnIgual.addEventListener('click', calcular);

// Click en botones
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    expresion.textContent += boton.getAttribute('data-valor');
  });
});

// Modo oscuro
modoToggle.addEventListener('change', modoDinamico);

// =========== Funciones =============

function limpiar() {
  expresion.textContent = '';
  resultado.textContent = '0';
}

function borrarUltimo() {
  expresion.textContent = expresion.textContent.slice(0, -1);
}

function calcular() {
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
}

function escucharTeclado(e){
  const tecla = e.key;

  if ("0123456789+-*/().".includes(tecla)) {
    expresion.textContent += tecla;
  }

  if (tecla === "Enter") {
    e.preventDefault();
    calcular();
  }

  if (tecla === "Backspace") {
    borrarUltimo();
  }

  if (tecla === "Escape") {
    limpiar();
  }
}

function modoDinamico(){
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    modoTexto.textContent = 'Modo claro';
  } else {
    modoTexto.textContent = 'Modo oscuro';
  }
}