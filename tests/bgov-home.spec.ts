import { test, expect, Page, BrowserContext } from '@playwright/test';

// Asynchronous function to fill the searchbar and click the first result of a specific search term
async function searchAndClickFirstResult(page: Page, 
                                         context: BrowserContext,
                                         searchTerm: string) {
    // Create a constant for searchbar
    const searchBar = await page.getByPlaceholder('Search for services, directory items...')
    // Fill BGov searchbar with the term "NBI Clearance"
    await searchBar.fill(searchTerm);

    // Click on the first result of search term "Apply for NBI Multipurpose Clearance"
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: searchTerm }).click()
    ]);

    // Wait until the page is rendered and switch to new tab
    await newPage.waitForLoadState()

    return newPage;
}
// Asynchronous function to click a specific popular service tile
async function clickPopularServiceTile(page: Page, serviceText: string) {
    const citizenshipAndIDTile = await page.getByRole('link').filter({ hasText: serviceText });
    await citizenshipAndIDTile.click();
}

test.beforeEach(async ({ page }) => {
    // Go to the BGov home page
    await page.goto('https://bettergov.ph/')
});

test.describe('Scenario 1: BGov Home Page Quick Search Tests', () => {
    test('S1_TC1: Validate apply for NBI Multipurpose Clearance using BGov homepage quick search', async ({ page, context }) => {
        // Call the function to fill the searchbar and
        // click the first result of search term: "Apply for NBI Multipurpose Clearance"
        const newPage = await searchAndClickFirstResult(page, context, 'Apply for NBI Multipurpose Clearance')

        // Assertion steps:
        // 1. NBI Clearance website has the title: "NBI Clearance"
        // 2. NBI Clearance website has the url: "https://clearance.nbi.gov.ph/"
        await expect(newPage).toHaveTitle("NBI CLEARANCE");
        await expect(newPage).toHaveURL("https://clearance.nbi.gov.ph/")
    });
    test('S2_TC2: Validate renew NBI Multipurpose Clearance using BGov homepage quick search', async ({ page, context }) => {
        // Call the function to fill the searchbar and
        // click the first result of search term: "Renew NBI Multipurpose Clearance"
        const newPage = await searchAndClickFirstResult(page, context, 'Renew NBI Multipurpose Clearance')

        // Assertion steps:
        // 1. NBI Clearance website has the title: "NBI Clearance"
        // 2. NBI Clearance website has the url: "https://clearance.nbi.gov.ph/"
        await expect(newPage).toHaveTitle("NBI CLEARANCE");
        await expect(newPage).toHaveURL("https://clearance.nbi.gov.ph/")
    });
});
test.describe('Scenario 2: BGov Home Page Popular Services Tests', () => {
    test('S2_TC1: Validate Get a Postal ID service using Popular Services', async ({page, context}) => {
        const POPULAR_SERVICE = "Citizenship & ID"
        const SERVICE = 'Get a Postal ID'
        
        await clickPopularServiceTile(page, POPULAR_SERVICE)

        const regions = await page.locator('article.h-full')

        // Click on the first result of search term "Apply for NBI Multipurpose Clearance"
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            regions.filter({ hasText: SERVICE }).getByRole('button', { name: 'View Service'}).click()
        ]);

        // Wait until the page is rendered and switch to new tab
        await newPage.waitForLoadState()

        // Assertion steps:
        // 1. Postal ID Application website has the title: "HOW TO APPLY"
        // 2. Postal ID Application website has the url: "https://www.postalidph.com/how-to-apply.html"
        await expect(newPage).toHaveTitle("HOW TO APPLY");
        await expect(newPage).toHaveURL("https://www.postalidph.com/how-to-apply.html")
    });
});
