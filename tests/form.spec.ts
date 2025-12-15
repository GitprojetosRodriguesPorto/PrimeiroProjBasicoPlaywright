import { test, expect } from '@playwright/test';
import { FormSelectors } from '../utils/selectors';

const FORM_URL = 'https://divi-contact-form.divi-seo.com/';

const dados = {
  nome: 'Rayssa Christina Rodrigues',
  email: 'rayssa.teste@example.com',
  mensagem: 'Preenchimento de teste automático via Playwright.'
};

test('Preenchimento de formulário com Playwright', async ({ page }) => {
  await page.goto(FORM_URL);

  await page.fill(FormSelectors.name, dados.nome);
  await page.fill(FormSelectors.email, dados.email);
  await page.fill(FormSelectors.message, dados.mensagem);
  await page.click(FormSelectors.submit);

  await expect(page.locator(FormSelectors.success)).toBeVisible({ timeout: 8000 });
});
