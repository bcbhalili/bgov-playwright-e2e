import { test, expect } from '@playwright/test'
import { FCP_Visual } from '../pages/bgov-fcp-visual';
import { FCP_Table } from '../pages/bgov-fcp-table';
import { FCP_Contractors } from '../pages/bgov-fcp-contractors';
import { BGovHome } from '../pages/bgov-home';
import { FCP_Map } from '../pages/bgov-fcp-map';

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
            Test Title: Verify end URL and tabs of BGovPH's Flood Control Projects Page
            Pre-requisites: none
        */
        const fcp = new FCP_Visual(page)
        const fcp_c = new FCP_Contractors(page)
        const fcp_m = new FCP_Map(page)
        const testID = testInfo.title

        // Assertion: URL ends with "/flood-control-projects"
        await expect(fcp.page.url().endsWith(fcp.endURL)).toBeTruthy()
        // Assertion: Verify if Visual, Table, Contractors, and Map are visible
        await expect(fcp.visualTab).toBeVisible();
        await expect(fcp.tableTab).toBeVisible();
        await expect(fcp_c.tab).toBeVisible();
        await expect(fcp_m.tab).toBeVisible();

        // Generate Test Evidence/s
        await page.screenshot({
            path: `test-evidences/${testID}/fcp-page.png`
        })
    });
    test('FCP-TC002', async ({ page }, testInfo) => {
        /* 
            Date Created: March 20, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC002
            Test Title: Verify Visual tab filters of BGovPH's Flood Control Projects Page
            Pre-requisites: none
        */
        const fcp = new FCP_Visual(page);
        const testID = testInfo.title

        // Navigate to Visual Tab
        await fcp.visualTab.click()
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
            path: `test-evidences/${testID}/fcp-filters-form.png`
        });
        await fcp.searchProjects.screenshot({
            path: `test-evidences/${testID}/fcp-filters-search-projects.png`
        });
        await fcp.infrastructureYear.screenshot({
            path: `test-evidences/${testID}/fcp-filters-infrastructure-year.png`
        });
        await fcp.region.screenshot({
            path: `test-evidences/${testID}/fcp-filters-region.png`
        });
        await fcp.province.screenshot({
            path: `test-evidences/${testID}/fcp-filters-province.png`
        });
        await fcp.typeOfWork.screenshot({
            path: `test-evidences/${testID}/fcp-filters-type-of-work.png`
        });
        await fcp.deo.screenshot({
            path: `test-evidences/${testID}/fcp-filters-deo.png`
        });
        await fcp.legislativeDistrict.screenshot({
            path: `test-evidences/${testID}/fcp-filters-legislative-district.png`
        });
    });
    test('FCP-TC003', async ({ page }, testInfo) => {
        /* 
            Date Created: March 20, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC003
            Test Title: Verify Table tab filters of BGovPH's Flood Control Projects Page
            Pre-requisites: none
        */
        const fcp = new FCP_Table(page);
        const testID = testInfo.title

        // Navigate to Table Tab
        await fcp.tableTab.click()
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
            path: `test-evidences/${testID}/fcp-filters-form.png`
        });
        await fcp.searchProjects.screenshot({
            path: `test-evidences/${testID}/fcp-filters-search-projects.png`
        });
        await fcp.infrastructureYear.screenshot({
            path: `test-evidences/${testID}/fcp-filters-infrastructure-year.png`
        });
        await fcp.region.screenshot({
            path: `test-evidences/${testID}/fcp-filters-region.png`
        });
        await fcp.province.screenshot({
            path: `test-evidences/${testID}/fcp-filters-province.png`
        });
        await fcp.typeOfWork.screenshot({
            path: `test-evidences/${testID}/fcp-filters-type-of-work.png`
        });
        await fcp.deo.screenshot({
            path: `test-evidences/${testID}/fcp-filters-deo.png`
        });
        await fcp.legislativeDistrict.screenshot({
            path: `test-evidences/${testID}/fcp-filters-legislative-district.png`
        });
    });
    test('FCP-TC004', async ({ page }, testInfo) => {
        /* 
            Date Created: April 18, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC004
            Test Title: Verify Contractors tab filters of BGovPH's Flood Control Projects Page
            Pre-requisites: none
        */

        const contractor = new FCP_Contractors(page)

        // Click "Contractor" tab
        await contractor.tab.click()
        // Assertions
        // - Heading is visible
        // - Search Field is visible
        await expect(contractor.heading).toBeVisible()
        await expect(contractor.searchField).toBeVisible()

        // Generate Test Evidence/s
        await page.screenshot({
            path: `test-evidences/${testInfo.title}/fcp-contractors-page.png`
        })
    });
    test('FCP-TC005', async ({ page }, testInfo) => {
        /* 
            Date Created: April 18, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC005
            Test Title: Verify Map tab filters of BGovPH's Flood Control Projects Page
            Pre-requisites: none
        */

        const map = new FCP_Map(page)

        // Click "Contractor" tab
        await map.tab.click()
        // Assertions
        // - Heading is visible
        // - Search Field is visible
        await expect(map.heading).toBeVisible()

        // Generate Test Evidence/s
        await page.screenshot({
            path: `test-evidences/${testInfo.title}/fcp-map-page.png`
        })
    });   
});