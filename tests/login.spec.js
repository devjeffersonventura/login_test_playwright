const { test, expect } = require('@playwright/test');

// Este teste espera que o login seja bem-sucedido com credenciais válidas.
test('credenciais válidas', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  
  const loginButtonSelector = '#btnLogin';
  await page.isVisible(loginButtonSelector);
  
  await page.fill('#user', 'alexandrepiresdasilva@gmail.com');
  await page.fill('#password', 'Alepds@1999');

  await page.click(loginButtonSelector);

  await expect(page.locator('#swal2-title')).toBeVisible();
});

// Este teste espera que o login falhe com usuário inválido.
test('usuário inválido', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  
  const loginButtonSelector = '#btnLogin';
  await page.isVisible(loginButtonSelector);
  
  await page.fill('#user', 'AL#$!)@gmail.com');
  await page.fill('#password', 'Alepds@1999');

  await page.click(loginButtonSelector);

  await expect(page.locator('#swal2-title')).toBeVisible();
});

// Este teste espera que o login falhe com entradas maliciosas.
test('sql injection', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/login');
  
  const loginButtonSelector = '#btnLogin';
  await page.isVisible(loginButtonSelector);
  
  await page.fill('#user', "' OR 1=1");
  await page.fill('#password', "'");

  await page.click(loginButtonSelector);

  await expect(page.locator('#swal2-title')).toBeVisible();
});