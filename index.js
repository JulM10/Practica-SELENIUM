// Descripción: Este script utiliza Selenium WebDriver para realizar pruebas automatizadas.
// Requisitos: Asegúrate de tener instalado Node.js, Selenium WebDriver y el driver del navegador (ej. ChromeDriver).
// Crear test en la carpeta tests y luego llamar la función desde este archivo.

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import googleSearch from './tests/googleSearch.js';
import loginTest from './tests/loginTest.js';
import excepcion1Test from './tests/Exceptions/NoSuchElementException.js';
import excepcion2Test from './tests/Exceptions/ElementNotInteractableException.js';

// Resolver __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Array para almacenar resultados
const resultados = [];

// Función para ejecutar cada test y medir su tiempo de ejecución
async function runTest(nombre, testFn) {
  console.log(`🔹 Iniciando ${nombre}...`);
  const start = Date.now();

  let estado = 'ok';
  try {
    await testFn();
  } catch (err) {
    estado = 'error';
    console.error(`❌ Error en ${nombre}:`, err.message);
  }

  const end = Date.now();
  const duracion = ((end - start) / 1000).toFixed(2);
  resultados.push({ nombre, estado, duracion });

  console.log(`🕒 ${nombre} finalizó en ${duracion} segundos\n`);
}

// Función principal para ejecutar todos los tests
(async () => {
  console.log('🚀 Iniciando test suite...\n');

  await runTest('Test Case 1: googleSearch', googleSearch);
  await runTest('Test Case 2: loginTest', loginTest);
  await runTest('Test Case 3: NoSuchElementException', excepcion1Test);
  await runTest('Test Case 4: ElementNotInteractableException', excepcion2Test);

  //verifica si existe el directorio de reporte, si no lo crea
  const reporteDir = join(__dirname, 'reporteTest');
  
  if (!existsSync(reporteDir)) {
    mkdirSync(reporteDir);
  }

  // Guardar resultados en archivo JSON
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const archivo = join(reporteDir, `resultados-${timestamp}.json`);

  writeFileSync(archivo, JSON.stringify(resultados, null, 2));
  console.log(`📄 Reporte generado: ${archivo}`);

  console.log('\n✅ Todos los tests terminaron.');
})();
