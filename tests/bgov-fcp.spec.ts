import { test, expect } from '@playwright/test'
import { FCP_Visual } from '../pages/bgov-fcp-visual';
import { BGovHome } from '../pages/bgov-home';
import { FCP_Table } from '../pages/bgov-fcp-table';

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
        const fcp = new FCP_Visual(page);
        const testID = testInfo.title

        // Assertion: URL ends with "/flood-control-projects"
        await expect(fcp.page.url().endsWith(fcp.endURL)).toBeTruthy()
        // Assertion: Verify if Visual, Table, Contractors, and Map are visible
        await expect(fcp.visualTab).toBeVisible();
        await expect(fcp.tableTab).toBeVisible();
        await expect(fcp.contractorsTab).toBeVisible();
        await expect(fcp.mapTab).toBeVisible();
        
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
            Date Created: March 20, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC004
            Test Title: Verify search results to given filters of BGovPH's Flood Control Projects Page in Visual tab
            Pre-requisites: 
                Search Projects: Completion of Bagani Ubbog-San Juan-San Antonio Drainage Canal, Candon City, Ilocos Sur
                Infrastructure Year: 2021
                Region: Region I
                Type of Work: Construction of Drainage Structure
                District Engineering Office: Ilocos Sur 2nd District Engineering Office
                Legislative District: ILOCOS SUR (SECOND LEGISLATIVE DISTRICT)
        */

        const fcp = new FCP_Visual(page)
        const testID = testInfo.title
        const project = 'Completion of Bagani Ubbog-San Juan-San Antonio Drainage Canal, Candon City, Ilocos Sur'
        const year = 2021
        const region = 'Region I'
        const province = 'ILOCOS SUR'
        const work = 'Construction of Drainage Structure'
        const deo = 'Ilocos Sur 2nd District Engineering Office'
        const district ='ILOCOS SUR (SECOND LEGISLATIVE DISTRICT)'
        
        // Navigate to Visual tab
        await fcp.visualTab.click();
        // Provide values to filters
        await fcp.searchProjectsField.fill(project)
        await fcp.selectItemFromDropdown(fcp.infrastructureYearDropdown, String(year))
        await fcp.selectItemFromCombobox(fcp.regionDropdown, region)
        await fcp.selectItemFromCombobox(fcp.provinceDropdown, province)
        await fcp.selectItemFromCombobox(fcp.typeOfWorkDropdown, work)
        await fcp.selectItemFromCombobox(fcp.deoDropdown, deo)
        await fcp.selectItemFromCombobox(fcp.legislativeDistrictDropdown, district)
        await page.evaluate(() => {
            window.scrollTo(0, 0)
        });

        // Assert entered filters to be visible in header
        const filterText = await page.locator("//div[@class='flex-1']/h1").textContent()
        expect(filterText).toContain(`Search: "${project}"`)
        expect(filterText).toContain(`Year: ${year}`)
        expect(filterText).toContain(`Province: ${province}`)
        expect(filterText).toContain(`Region: ${region}`)
        expect(filterText).toContain(`Type of Work: ${work}`)
        expect(filterText).toContain(`District Engineering Office: ${deo}`)
        expect(filterText).toContain(`Legislative District: ${district}`)

        // Generate Test Evidence/s
        await page.screenshot({
            path: `test-evidences/${testID}/fcp-results.png`
        });
    });
    test('FCP-TC005', async ({ page }, testInfo) => {
        /* 
            Date Created: March 28, 2026
            Automation Engineer: Biendroid
            Test ID: FCP-TC005
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
        const project = 'Completion of Bagani Ubbog-San Juan-San Antonio Drainage Canal, Candon City, Ilocos Sur'
        const year = 2021
        const province = 'ILOCOS SUR'
        const region = 'Region I'
        const work = 'Construction of Drainage Structure'
        const deo = 'Ilocos Sur 2nd District Engineering Office'
        const district ='ILOCOS SUR (SECOND LEGISLATIVE DISTRICT)'
        
        // Navigate to Table tab
        await fcp.tableTab.click();
        // Provide values to filters
        await fcp.searchProjectsField.fill(project)
        await fcp.selectItemFromDropdown(fcp.infrastructureYearDropdown, String(year))
        await fcp.selectItemFromCombobox(fcp.regionDropdown, region)
        await fcp.selectItemFromCombobox(fcp.provinceDropdown, province)
        await fcp.selectItemFromCombobox(fcp.typeOfWorkDropdown, work)
        await fcp.selectItemFromCombobox(fcp.deoDropdown, deo)
        await fcp.selectItemFromCombobox(fcp.legislativeDistrictDropdown, district)
        await page.evaluate(() => {
            window.scrollTo(0, 0)
        });

        // Get filter text heading and filter tags
        const filterText = await fcp.appliedFilters.getByRole('heading').textContent()
        const searchTagText = await fcp.appliedFilters.getByText(new RegExp(project)).last().textContent()
        const yearTagText = await fcp.appliedFilters.getByText(new RegExp(String(year))).last().textContent()
        const regionTagText = await fcp.appliedFilters.getByText(new RegExp(region)).last().textContent()
        const provinceTagText = await fcp.appliedFilters.getByText(new RegExp(province)).nth(1).textContent()
        const typeOfWorkTagText = await fcp.appliedFilters.getByText(new RegExp(work)).last().textContent()
        const deoTagText = await fcp.appliedFilters.getByText(new RegExp(deo)).last().textContent()
        const legislativeDistrictTagText = await fcp.appliedFilters.getByText(new RegExp(province)).last().textContent()

        // const searchTagText = await fcp.appliedFilters.locator("//div/span[1]").textContent()
        // const yearTagText = await fcp.appliedFilters.locator("//div/span[2]").textContent()
        // const regionTagText = await fcp.appliedFilters.locator("//div/span[3]").textContent()
        // const provinceTagText = await fcp.appliedFilters.locator("//div/span[4]").textContent()
        // const typeOfWorkTagText = await fcp.appliedFilters.locator("//div/span[5]").textContent()
        // const deoTagText = await fcp.appliedFilters.locator("//div/span[6]").textContent()
        // const legislativeDistrictTagText = await fcp.appliedFilters.locator("//div/span[7]").textContent()

        // Assert according to filter text heading
        expect(filterText).toContain(`Search: "${project}"`)
        expect(filterText).toContain(`Year: ${year}`)
        expect(filterText).toContain(`Region: ${region}`)
        expect(filterText).toContain(`Province: ${province}`)
        expect(filterText).toContain(`Type of Work: ${work}`)
        expect(filterText).toContain(`District Engineering Office: ${deo}`)
        expect(filterText).toContain(`Legislative District: ${district}`)
        // Assert according to filter tags
        expect(searchTagText).toEqual(`Search: "${project}"`)
        expect(yearTagText).toEqual(`Year: ${year}`)
        expect(regionTagText).toEqual(`Region: ${region}`)
        expect(provinceTagText).toEqual(`Province: ${province}`)
        expect(typeOfWorkTagText).toEqual(`Type of Work: ${work}`)
        expect(deoTagText).toEqual(`District Engineering Office: ${deo}`)
        expect(legislativeDistrictTagText).toEqual(`Legislative District: ${district}`)

        // Generate Test Evidence/s
        await page.screenshot({
            path: `test-evidences/${testID}/fcp-results.png`
        });
    });
});