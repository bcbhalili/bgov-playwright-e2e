import { test, expect } from '@playwright/test'

test.describe('Scenario: Flood Control Projects E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://bettergov.ph/')
    });
    
    test('TC1: Verify Flood Control Projects page', async ({ page }) => {
        const fcpNavbar = await page.getByRole('link', { name: 'Flood Control Projects' }).first();
        fcpNavbar.click();
        const filterForm = await page.locator('//div[@class="bg-gray-50"]/div/div/div[1]/div');
        await expect(filterForm).toBeVisible();
        await expect(filterForm.getByRole('heading', { name: 'Filters' })).toBeVisible();
        await expect(filterForm.getByRole('heading', { name: 'Search Projects' })).toBeVisible();
        await expect(filterForm.getByPlaceholder('Projects, contractors, municipality, province, region...')).toBeVisible();
        await expect(filterForm.filter({ hasText: "Infrastructure Year" })).toBeVisible();
        await expect(filterForm.getByRole('button', { name: 'Select Year'})).toBeVisible();
        await expect(filterForm.filter({ hasText: "Region" })).toBeVisible();
        await expect(filterForm.getByRole('button', { name: 'Select Region'})).toBeVisible();
        await expect(filterForm.filter({ hasText: "Province" })).toBeVisible();
        await expect(filterForm.getByRole('button', { name: 'Select Province'})).toBeVisible();
        await expect(filterForm.filter({ hasText: "Type of Work" })).toBeVisible();
        await expect(filterForm.getByRole('button', { name: 'Select Type of Work'})).toBeVisible();
        await expect(filterForm.filter({ hasText: "District Engineering Office" })).toBeVisible();
        await expect(filterForm.getByRole('button', { name: 'Select DEO'})).toBeVisible();
        await expect(filterForm.filter({ hasText: "Legislative District" })).toBeVisible();
        await expect(filterForm.getByRole('button', { name: 'Select Legislative District'})).toBeVisible();
    });
});