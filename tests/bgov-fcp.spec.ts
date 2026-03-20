import { test, expect } from '@playwright/test'
import { FCP } from '../pages/bgov-fcp'
import { BGovHome } from '../pages/bgov-home';

test.describe('Flood Control Projects E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        const home = new BGovHome(page);

        await home.goto()
        await home.navigateTo(home.fcpNavBar);
    });
    
    test('FCP-TC001', async ({ page }, testInfo) => {
        /* 
            Date Created: March 20, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC001
            Test Title: Verify end URL of BGovPH's Flood Control Projects Page
            Pre-requisites: none
        */
        const fcp = new FCP(page);
        
        // Assertion: URL ends with "/flood-control-projects"
        await expect(fcp.page.url().endsWith(fcp.endURL)).toBeTruthy()

        // Generate Test Evidence/s
        await page.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-page.png`
        })
    });
    test('FCP-TC002', async ({ page }, testInfo) => {
        /* 
            Date Created: March 20, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC002
            Test Title: Verify filters of BGovPH's Flood Control Projects Page
            Pre-requisites: none
        */
        const fcp = new FCP(page);
        
        // Assertion: Filters Form
        await expect(fcp.filtersForm).toBeVisible();
        // Assertion: Search Projects field
        fcp.verifyFilterSectionIfVisible(fcp.searchProjects,
                                        fcp.searchProjectsLabel,
                                        fcp.searchProjectsField);
        // Assertion: Infrastructure field
        fcp.verifyFilterSectionIfVisible(fcp.infrastructureYear, 
                                        fcp.infrastructureYearLabel,
                                        fcp.infrastructureYearDropdown);
        // Assertion: Region field
        fcp.verifyFilterSectionIfVisible(fcp.region, 
                                        fcp.regionLabel,
                                        fcp.regionDropdown);
        // Assertion: Province field
        fcp.verifyFilterSectionIfVisible(fcp.province, 
                                        fcp.provinceLabel,
                                        fcp.provinceDropdown);
        // Assertion: Type of Work field
        fcp.verifyFilterSectionIfVisible(fcp.typeOfWork, 
                                        fcp.typeOfWorkLabel,
                                        fcp.typeOfWorkDropdown);
        // Assertion: District Engineering Office (DEO) field
        fcp.verifyFilterSectionIfVisible(fcp.deo, 
                                        fcp.deoLabel,
                                        fcp.deoDropdown);
        // Assertion: Legistlative District field
        fcp.verifyFilterSectionIfVisible(fcp.legislativeDistrict, 
                                        fcp.legislativeDistrictLabel,
                                        fcp.legislativeDistrictDropdown);
        
        // Generate Test Evidence/s
        await fcp.filtersForm.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-form.png`
        });
        await fcp.searchProjects.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-search-projects.png`
        });
        await fcp.infrastructureYear.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-infrastructure-year.png`
        });
        await fcp.region.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-region.png`
        });
        await fcp.province.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-province.png`
        });
        await fcp.typeOfWork.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-type-of-work.png`
        });
        await fcp.deo.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-deo.png`
        });
        await fcp.legislativeDistrict.screenshot({
            path: `test-evidences/${testInfo.titlePath[2]}/fcp-filters-legislative-district.png`
        });
    });
    test('FCP-TC003', async ({ page }, testInfo) => {
        /* 
            Date Created: March 20, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC003
            Test Title: Verify search results to given filters of BGovPH's Flood Control Projects Page
            Pre-requisites: 
                Search Projects: 
        */

        const fcp = new FCP(page);

        // Provide values to filters
        await fcp.searchProjectsField.fill('Completion of Bagani Ubbog-San Juan-San Antonio Drainage Canal, Candon City, Ilocos Sur')
        
        // TODO: simplify implentation for dropdown
        await fcp.infrastructureYearDropdown.click()
        await fcp.page.getByRole('button', { name: '2021' }).click()
        // TODO: simplify implementation for combobox
        await fcp.regionDropdown.click()
        await fcp.page.getByPlaceholder('Search...').fill('Region I')
        await fcp.page.locator("//button/div/span[text()='Region I']").click()
        // TODO: simplify implementation for combobox
        await fcp.typeOfWorkDropdown.click()
        await fcp.page.getByPlaceholder('Search...').fill('Construction of Drainage Structure')
        await fcp.page.locator("//button/div/span[text()='Construction of Drainage Structure']").click()
        // TODO: simplify implementation for combobox
        await fcp.deoDropdown.click()
        await fcp.page.getByPlaceholder('Search...').fill('Ilocos Sur 2nd District Engineering Office')
        await fcp.page.locator("//button/div/span[text()='Ilocos Sur 2nd District Engineering Office']").click()
        // TODO: simplify implementation for combobox
        await fcp.legislativeDistrictDropdown.click()
        await fcp.page.getByPlaceholder('Search...').fill('ILOCOS SUR (SECOND LEGISLATIVE DISTRICT)')
        await fcp.page.locator("//button/div/span[text()='ILOCOS SUR (SECOND LEGISLATIVE DISTRICT)']").click()

        await page.evaluate(() => {
            window.scrollTo(0, 0)
        });
    });
});