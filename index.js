// Descripción: Este script utiliza Selenium WebDriver para realizar pruebas automatizadas.
// Requisitos: Asegúrate de tener instalado Node.js, Selenium WebDriver y el driver del navegador (ej. ChromeDriver).
// Crear test en la carpeta tests y luego llamar la funcion desde este archivo.

const googleSearch = require('./tests/googleSearch');
const loginTest = require('./tests/loginTest');
const excepcion1Test = require('./tests/Exceptions/NoSuchElementException');
const excepcion2Test = require('./tests/Exceptions/ElementNotInteractableException');

// funcion para ejecutar cada test y medir su tiempo de ejecución
async function runTest(nombre, testFn) {
  console.log(`🔹 Iniciando ${nombre}...`);
  const start = Date.now();
  await testFn();
  const end = Date.now();
  const duracion = ((end - start) / 1000).toFixed(2);
  console.log(`🕒 ${nombre} finalizó en ${duracion} segundos\n`);
}

// Función principal para ejecutar todos los tests
(async () => {
  console.log('🚀 Iniciando test suite...\n');

  await runTest('Test Case 1: googleSearch', googleSearch);
  await runTest('Test Case 2: Logintest', loginTest);
  await runTest('Test Case 3: NoSuchElementException', excepcion1Test);
  await runTest('Test Case 4: ElementNotInteractableException',excepcion2Test);

  console.log('\n✅ Todos los tests terminaron.');
})();