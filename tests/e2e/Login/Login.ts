import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('https://fb-clone-minnaingkoko.vercel.app/');
	await page.getByPlaceholder('Email address or phone number').click();
	await page.getByPlaceholder('Email address or phone number').fill('minnaingkoko2001@gmail.com');
	await page.getByPlaceholder('Password').click();
	await page.getByPlaceholder('Password').fill('092272mnkk');
	await page.getByRole('button', { name: 'Log In' }).click();
});
