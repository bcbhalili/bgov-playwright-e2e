import { test, expect } from '@playwright/test'
import { FCP_Contractors } from '../pages/bgov-fcp-contractors'
import { BGovHome } from '../pages/bgov-home';
import * as XLSX from 'xlsx'    // Imported XLSX for excel functions
import path from 'path';        // Imported path for directory functions

// Specify data types in excel
interface TestData {
    contractor: string;
}
// Find the target test data file ('fcp-data.xlsx')
const testDataFile = path.join(__dirname, '../test-data/fcp-contractors.xlsx')
// Read excel file
const workbook = XLSX.readFile(testDataFile)
// Specify excel sheet
const worksheet = workbook.Sheets['FCP-TD']
// Get entries and convert to JSON
const sheetToJSON = XLSX.utils.sheet_to_json<TestData>(worksheet)

test.describe('Flood Control Projects E2E Data-Driven Tests - Contractors', () => {
    test.beforeEach(async ({ page }) => {
        /*
            Date Created: April 25, 2026
            Automation Engineer: Biendroid
            Description: 
                This is a before each hook where it performs going to BetterGovPH's
                homepage then navigating to their Flood Control Projects Page.
            BDD Steps:
                Given that the user is in the BetterGovPH homepage
                When the navigates to the Flood Control Projects page
                Then Flood Control Projects header should be visible
                And Filters section should be visible
                And the user should be in the Visual tab
        */
        const home = new BGovHome(page);
    
        await home.goto()
        await home.navigateTo(home.fcpNavBar);
    });
    sheetToJSON.forEach((row, index) => {
        test(`FCP-DDT-C-TC001-${index + 1}`, async ({ page }, testInfo) => {
            /* 
                Date Created: April 25, 2026
                Automation Engineer: Biendroid
                Base Test ID: FCP-DDT-C-TC001
                Test Title: Verify search results to given filters of BGovPH's Flood Control Projects Page in Contractors tab
                Test Data: fcp-contractors.xlsx
            */

            const fcp = new FCP_Contractors(page)
            const testID = testInfo.title

            // Navigate to Contractors tab
            await fcp.tab.click();  

            // Provide value to search field
            await fcp.searchField.fill(row.contractor)
            // Click the result that contains lone projects (no collaborations with co-contractors)
            await fcp.page.getByTitle(row.contractor, { exact: true }).click()

            // Not recommended, but needed in this scenario
            await fcp.page.waitForTimeout(2000)

            // Assert entered filters to be visible in header
            await expect(fcp.page.getByRole('heading', { name: `Projects by ${row.contractor}` })).toBeVisible()
            await expect(fcp.totalProjectsTile).toBeVisible()
            await expect(fcp.totalContractCostTile).toBeVisible()
            await expect(fcp.averageProjectCostTile).toBeVisible()

            // Generate Test Evidence/s
            await page.screenshot({
                path: `test-evidences/${testID}/fcp-contractors-${index + 1}.png`
            });
        });
    });
});
    