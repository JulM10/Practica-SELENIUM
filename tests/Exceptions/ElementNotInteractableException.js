const { Builder, By, until } = require('selenium-webdriver');

// Probar excepcion NoSuchElementException test
/*
  Test:
  - Navega a la página de excepciones.
  - Hace clic en el botón "Add Row".
  - Espera a que el elemento "row2" sea visible.
  - Verifica que el elemento sea interactuable.
  - Envía texto al input de "row2".
  - Hace clic en el botón "Save".
  - Imprime un mensaje de éxito o error.
*/
async function excepcion2Test() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://practicetestautomation.com/practice-test-exceptions/');
    await driver.findElement(By.id('add_btn')).click();
    const row2 = await driver.wait(until.elementLocated(By.id('row2')), 5000);
    
    await driver.wait(until.elementIsVisible(row2), 3000);

    await driver.wait(async () => {
      const enabled = await row2.isEnabled();
      return enabled;
    }, 3000);

    await row2.sendKeys('Texto de prueba');
    await driver.findElement(By.name('Save')).click();

    console.log('✅ [Excepción 2] Input interactuado correctamente.');
  } catch (err) {
    console.error('❌ [Excepción 2] Error:', err.name, '-', err.message);
  } finally {
    await driver.quit();
  }
}

module.exports = excepcion2Test;
