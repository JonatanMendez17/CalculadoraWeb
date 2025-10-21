const expresion = document.getElementById('expresion');
const resultado = document.getElementById('resultado');
const botones = document.querySelectorAll('[data-valor]');
const btnIgual = document.getElementById('igual');
const modoAlternar = document.getElementById('modoAlternar');
const modoTexto = document.getElementById('modoTexto');

// Teclado
document.addEventListener("keydown", escucharTeclado);
btnIgual.addEventListener('click', calcular);

// Botones
botones.forEach(boton => {
  boton.addEventListener('click', () => {
    expresion.textContent += boton.getAttribute('data-valor');
  });
});

// Modo oscuro
modoAlternar.addEventListener('change', modoDinamico);

// Funciones 
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

function modoDinamico() {
  const oscuro = document.body.classList.toggle('dark');
  modoTexto.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
}
