// Prueba de inicio de sesión con Selenium WebDriver
const { Builder, By, until } = require('selenium-webdriver');
/*
  Test:
  - Navega a la página de login.
  - Ingresa el usuario y contraseña.
  - Hace clic en el botón de login.
  - Espera a que se muestre el mensaje de éxito.
  - Imprime un mensaje de éxito o error.
*/
async function loginTest() {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://practicetestautomation.com/practice-test-login/');
    await driver.findElement(By.id('username')).sendKeys('student');
    await driver.findElement(By.id('password')).sendKeys('Password123');
    await driver.findElement(By.id('submit')).click();

    await driver.wait(until.elementLocated(By.xpath("//h1[contains(text(),'Logged In Successfully')]")), 3000);
    console.log('✅ [Login] Login exitoso');
  } catch (err) {
    console.error('❌ [Login] Falló el login:', err.message);
  } finally {
    await driver.quit();
  }
}

module.exports = loginTest;
