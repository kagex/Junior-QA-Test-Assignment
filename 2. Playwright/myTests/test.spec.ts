import { test, expect } from '@playwright/test';

test('Проверка что заголовок соответствует ожидаемому значению', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  expect(title).not.toBe(null);
  expect(title).toContain('Playwright'); // Проверяем, что заголовок страницы содержит 'Playwright'
});