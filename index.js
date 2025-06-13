const { Builder, By, until } = require('selenium-webdriver');

(async function helloSelenium() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Ir a Google
    await driver.get('https://www.google.com');

    // Esperar que aparezca el input y escribir "Selenium"
    const input = await driver.findElement(By.name('q'));
    await input.sendKeys('Selenium');

    // Esperar a que se cargue la sugerencia y presionar Enter
    await input.submit();

    // Esperar los resultados
    await driver.wait(until.titleContains('Selenium'), 1000);

    console.log('🚀 Búsqueda completada.');
  } finally {
    // Cerrar el navegador
    await driver.quit();
  }
})();