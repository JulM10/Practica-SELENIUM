// Descripción: Este script utiliza Selenium WebDriver para realizar pruebas automatizadas.
// Requisitos: Asegúrate de tener instalado Node.js, Selenium WebDriver y el driver del navegador (ej. ChromeDriver).
// Crear test en la carpeta tests y luego llamar la funcion desde este archivo.

const googleSearch = require('./tests/googleSearch');
const loginTest = require('./tests/loginTest');
const excepcion1Test = require('./tests/NoSuchElementException');

(async () => {
  console.log('🚀 Iniciando test suite...\n');

  await googleSearch();
  await loginTest();
  await excepcion1Test();

  console.log('\n✅ Todos los tests terminaron.');
})();