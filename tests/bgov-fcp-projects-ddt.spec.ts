import { test, expect } from '@playwright/test'
import { FCP_Visual } from '../pages/bgov-fcp-visual';
import { FCP_Table } from '../pages/bgov-fcp-table';
import { BGovHome } from '../pages/bgov-home';
import * as XLSX from 'xlsx'    // Imported XLSX for excel functions
import path from 'path';        // Imported path for directory functions

// Specify data types in excel
interface TestData {
    project: string;
    year: string;
    region: string;
    province: string;
    work: string;
    deo: string;
    district: string;
}
// Find the target test data file ('fcp-data.xlsx')
const testDataFile = path.join(__dirname, '../test-data/fcp-data.xlsx')
// Read excel file
const workbook = XLSX.readFile(testDataFile)
// Specify excel sheet
const worksheet = workbook.Sheets['FCP-TD']
// Get entries and convert to JSON
const sheetToJSON = XLSX.utils.sheet_to_json<TestData>(worksheet)

test.describe('Flood Control Projects E2E Data-Driven Tests - Projects', () => {
    test.beforeEach(async ({ page }) => {
        /*
            Date Created: April 18, 2026
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
        test(`FCP-DDT-P-TC001-${index + 1}`, async ({ page }, testInfo) => {
            /* 
                Date Created: April 18, 2026
                Automation Engineer: Biendroid
                Base Test ID: FCP-DDT-P-TC001
                Test Title: Verify search results to given filters of BGovPH's Flood Control Projects Page in Visual tab
                Test Data: fcp-data.xlsx
            */

            const fcp = new FCP_Visual(page)
            const testID = testInfo.title

            // Navigate to Visual tab
            await fcp.visualTab.click();

            // Provide values to filters
            await fcp.searchProjectsField.fill(row.project)
            await fcp.selectItemFromDropdown(fcp.infrastructureYearDropdown, row.year)
            await fcp.selectItemFromCombobox(fcp.regionDropdown, row.region)
            await fcp.selectItemFromCombobox(fcp.provinceDropdown, row.province.toUpperCase())
            await fcp.selectItemFromCombobox(fcp.typeOfWorkDropdown, row.work)
            await fcp.selectItemFromCombobox(fcp.deoDropdown, row.deo)
            await fcp.selectItemFromCombobox(fcp.legislativeDistrictDropdown, row.district)
            await page.evaluate(() => {
                window.scrollTo(0, 0)
            });

            // Assert entered filters to be visible in header
            const filterText = await page.locator("//div[@class='flex-1']/h1").textContent()
            expect(filterText).toContain(`Search: "${row.project}"`)
            expect(filterText).toContain(`Year: ${row.year}`)
            expect(filterText).toContain(`Province: ${row.province.toUpperCase()}`)
            expect(filterText).toContain(`Region: ${row.region}`)
            expect(filterText).toContain(`Type of Work: ${row.work}`)
            expect(filterText).toContain(`District Engineering Office: ${row.deo}`)
            expect(filterText).toContain(`Legislative District: ${row.district}`)

            // Generate Test Evidence/s
            await page.screenshot({
                path: `test-evidences/${testID}/fcp-projects-${index + 1}.png`
            });
        });
    });
    sheetToJSON.forEach((row, index) => {
        test(`FCP-DDT-P-TC002-${index + 1}`, async ({ page }, testInfo) => {
            /* 
                Date Created: March 28, 2026
                Automation Engineer: Biendroid
                Base Test ID: FCP-DDT-P-TC002
                Test Title: Verify search results to given filters of BGovPH's Flood Control Projects Page in Table tab
                Pre-requisites: 
                    Search Projects: Completion of Bagani Ubbog-San Juan-San Antonio Drainage Canal, Candon City, Ilocos Sur
                    Infrastructure Year: 2021
                    Region: Region I
                    Type of Work: Construction of Drainage Structure
                    District Engineering Office: Ilocos Sur 2nd District Engineering Office
                    Legislative District: ILOCOS SUR (SECOND LEGISLATIVE DISTRICT)
            */

            const fcp = new FCP_Table(page)
            const testID = testInfo.title
            // const project = 'Completion of Bagani Ubbog-San Juan-San Antonio Drainage Canal, Candon City, Ilocos Sur'
            // const year = 2021
            // const province = 'ILOCOS SUR'
            // const region = 'Region I'
            // const work = 'Construction of Drainage Structure'
            // const deo = 'Ilocos Sur 2nd District Engineering Office'
            // const district = 'ILOCOS SUR (SECOND LEGISLATIVE DISTRICT)'

            // Navigate to Table tab
            await fcp.tableTab.click();
            // Provide values to filters
            await fcp.searchProjectsField.fill(row.project)
            await fcp.selectItemFromDropdown(fcp.infrastructureYearDropdown, row.year)
            await fcp.selectItemFromCombobox(fcp.regionDropdown, row.region)
            await fcp.selectItemFromCombobox(fcp.provinceDropdown, row.province.toUpperCase())
            await fcp.selectItemFromCombobox(fcp.typeOfWorkDropdown, row.work)
            await fcp.selectItemFromCombobox(fcp.deoDropdown, row.deo)
            await fcp.selectItemFromCombobox(fcp.legislativeDistrictDropdown, row.district)
            await page.evaluate(() => {
                window.scrollTo(0, 0)
            });

            // Get filter text heading and filter tags
            const filterText = await fcp.appliedFilters.getByRole('heading').textContent()
            const searchTagText = await fcp.appliedFilters.getByText(new RegExp(row.project)).last().textContent()
            const yearTagText = await fcp.appliedFilters.getByText(new RegExp(String(row.year))).last().textContent()
            const regionTagText = await fcp.appliedFilters.getByText(new RegExp(row.region)).last().textContent()
            const provinceTagText = await fcp.appliedFilters.getByText(new RegExp(row.province.toUpperCase())).nth(1).textContent()
            const typeOfWorkTagText = await fcp.appliedFilters.getByText(new RegExp(row.work)).last().textContent()
            const deoTagText = await fcp.appliedFilters.getByText(new RegExp(row.deo)).last().textContent()
            const legislativeDistrictTagText = await fcp.appliedFilters.getByText(new RegExp(row.province.toUpperCase())).last().textContent()
            console.log(legislativeDistrictTagText)

            // Assert according to filter text heading
            expect(filterText).toContain(`Search: "${row.project}"`)
            expect(filterText).toContain(`Year: ${row.year}`)
            expect(filterText).toContain(`Region: ${row.region}`)
            expect(filterText).toContain(`Province: ${row.province.toUpperCase()}`)
            expect(filterText).toContain(`Type of Work: ${row.work}`)
            expect(filterText).toContain(`District Engineering Office: ${row.deo}`)
            expect(filterText).toContain(`Legislative District: ${row.district}`)
            // Assert according to filter tags
            expect(searchTagText).toEqual(`Search: "${row.project}"`)
            expect(yearTagText).toEqual(`Year: ${row.year}`)
            expect(regionTagText).toEqual(`Region: ${row.region}`)
            expect(provinceTagText).toEqual(`Province: ${row.province.toUpperCase()}`)
            expect(typeOfWorkTagText).toEqual(`Type of Work: ${row.work}`)
            expect(deoTagText).toEqual(`District Engineering Office: ${row.deo}`)
            expect(legislativeDistrictTagText).toEqual(`Legislative District: ${row.district}`)

            // Generate Test Evidence/s
            await page.screenshot({
                path: `test-evidences/${testID}/fcp-projects-${index + 1}.png`
            });
        });
    });
});
    