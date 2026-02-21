import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    // Go to the bgov home page
    await page.goto('https://bettergov.ph/')
})

test('TC1: bgov home page', async ({ page }) => {
    // Expect the title to contain "BetterGov.ph"
    await expect(page).toHaveTitle(/BetterGov.ph/);
    // Expect the heading to be visible    
    await expect(page.getByRole('heading', { name: 'BetterGov.ph' })).toBeVisible();
});
test('TC2: direct to NBI clearance website using searchbar of BGov home page', async ({ page, context }) => {
    // Test data
    const SEARCH_TERM = 'Apply for NBI Multipurpose Clearance'
    
    // Create a constant for searchbar
    const searchBar = await page.getByPlaceholder('Search for services, directory items...')
    // Fill BGov searchbar with the term "NBI Clearance"
    await searchBar.fill(SEARCH_TERM);

    // Click on the first result of search term "Apply for NBI Multipurpose Clearance"
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: SEARCH_TERM }).click()
    ]);

    // Wait until the page is rendered and switch to new tab
    await newPage.waitForLoadState()

    // Assertion steps:
    // 1. NBI Clearance website has the title: "NBI Clearance"
    // 2. NBI Clearance website has the url: "https://clearance.nbi.gov.ph/"
    await expect(newPage).toHaveTitle("NBI CLEARANCE");
    await expect(newPage).toHaveURL("https://clearance.nbi.gov.ph/")
});