//busqueda en google de la palabra "Selenium"
const { Builder, By, until } = require('selenium-webdriver');
/*
  Test:
  - Navega a Google.
  - Ingresa "Selenium" en el campo de búsqueda.
  - Envía la búsqueda.
  - Espera a que el título de la página contenga "Selenium".
  - Imprime un mensaje de éxito o error.
*/
async function googleSearch() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com');
    const input = await driver.findElement(By.name('q'));
    await input.sendKeys('Selenium');
    await input.submit();
    await driver.wait(until.titleContains('Selenium'), 3000);
    console.log('✅ [Google] Búsqueda de Selenium exitosa.');
  } catch (err) {
    console.error('❌ [Google] Falló la búsqueda:', err.message);
  } finally {
    await driver.quit();
  }
}

module.exports = googleSearch;