const { Builder, By, until } = require('selenium-webdriver');

// Probar excepcion NoSuchElementException test
async function excepcion1Test() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://practicetestautomation.com/practice-test-exceptions/');
    await driver.findElement(By.id('add_btn')).click();
    const row2 = await driver.wait(until.elementLocated(By.id('row2')), 5000);
    
    await driver.wait(until.elementIsVisible(row2), 3000);

    console.log('✅ [Excepcion] Elemento encontrado correctamente.');
  }catch (err) {
        console.error('❌ [Excepcion] Falló encontrar Row 2:', err.name, '-', err.message);
  }finally {
    await driver.quit();
  }
}

module.exports = excepcion1Test;