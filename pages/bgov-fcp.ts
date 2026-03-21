import { expect, Page, Locator } from '@playwright/test'

export class FCP {
    // Declare Members
    readonly page: Page;
    readonly endURL: string;
    readonly visualTab: Locator;
    readonly tableTab: Locator;
    readonly contractorsTab: Locator;
    readonly mapTab: Locator;
    readonly filtersForm: Locator;
    readonly searchProjects: Locator;
    readonly searchProjectsLabel: Locator;
    readonly searchProjectsField: Locator;
    readonly infrastructureYear: Locator;
    readonly infrastructureYearLabel: Locator;
    readonly infrastructureYearDropdown: Locator;
    readonly region: Locator;
    readonly regionLabel: Locator;
    readonly regionDropdown: Locator;
    readonly province: Locator;
    readonly provinceLabel: Locator;
    readonly provinceDropdown: Locator;
    readonly typeOfWork: Locator;
    readonly typeOfWorkLabel: Locator;
    readonly typeOfWorkDropdown: Locator;
    readonly deo: Locator;
    readonly deoLabel: Locator;
    readonly deoDropdown: Locator;
    readonly legislativeDistrict: Locator;
    readonly legislativeDistrictLabel: Locator;
    readonly legislativeDistrictDropdown: Locator;

    // Declare Constructor
    constructor(page: Page) {
        this.page = page
        this.endURL = '/flood-control-projects'
        this.visualTab = page.getByRole('link', { name: 'Visual', exact: true })
        this.tableTab = page.getByRole('link', { name: 'Table', exact: true })
        this.contractorsTab = page.getByRole('link', { name: 'Contractors', exact: true })
        this.mapTab = page.getByRole('link', { name: 'Map', exact: true })
        // Locate the filters form (base webelement)
        this.filtersForm = page.locator('//div[@class="bg-gray-50"]/div/div/div[1]/div')
        // Locate the Search Projects div that has a text
        // containing (by the use of regex) "Search Projects" 
        // and locate also the label and field
        this.searchProjects = this.filtersForm.locator('div', { hasText: /\bSearch Projects\b/ });
        this.searchProjectsLabel = this.searchProjects.getByText('Search Projects')
        this.searchProjectsField = this.searchProjects.getByPlaceholder('Projects, contractors, municipality, province, region...');
        // Locate the Infrastructure Year div that has a text
        // containing (by the use of regex) "Infrastructure Year" 
        // and locate also the label and field
        this.infrastructureYear = this.filtersForm.locator('//div[2]/div[2]')
        this.infrastructureYearLabel = this.infrastructureYear.getByText('Infrastructure Year')
        this.infrastructureYearDropdown = this.infrastructureYear.getByRole('button', { name: 'Select Year'})
        // Locate the Region div that has a text
        // containing (by the use of regex) "Region" 
        // and locate also the label and field
        this.region = this.filtersForm.locator('//div[2]/div[3]')
        this.regionLabel = this.region.getByText('Region').first()
        this.regionDropdown = this.region.getByRole('button', { name: 'Select Region'})
        // Locate the Province div that has a text
        // containing (by the use of regex) "Province" 
        // and locate also the label and field
        this.province = this.filtersForm.locator('//div[2]/div[4]')
        this.provinceLabel = this.province.getByText('Province').first()
        this.provinceDropdown = this.province.getByRole('button', { name: 'Select Province'})
        // Locate the Type of Work div that has a text
        // containing (by the use of regex) "Type of Work" 
        // and locate also the label and field
        this.typeOfWork = this.filtersForm.locator('//div[2]/div[5]')
        this.typeOfWorkLabel = this.typeOfWork.getByText('Type of Work').first()
        this.typeOfWorkDropdown = this.typeOfWork.getByRole('button', { name: 'Select Type of Work'})
        // Locate the Type of District Engineering Office div that has a text
        // containing (by the use of regex) "District Engineering Office" 
        // and locate also the label and field
        this.deo = this.filtersForm.locator('//div[2]/div[6]')
        this.deoLabel = this.deo.getByText('District Engineering Office')
        this.deoDropdown = this.deo.getByRole('button', { name: 'Select DEO'})
        // Locate the Type of Legislative District div that has a text
        // containing (by the use of regex) "Legislative District" 
        // and locate also the label and field
        this.legislativeDistrict = this.filtersForm.locator('//div[2]/div[7]')
        this.legislativeDistrictLabel = this.legislativeDistrict.getByText('Legislative District').first()
        this.legislativeDistrictDropdown = this.legislativeDistrict.getByRole('button', { name: 'Select Legislative District'})
    }

    // Declare Methods
    async verifyFilterSectionIfVisible(div:Locator, label: Locator, input: Locator) {
        /*
        * This asynchronous method verifies a particular filter section if visible:
        *   1. Section div
        *   2. Label/Heading
        *   3. Inputs: dropdowns, text fields, etc. 
        */

        await expect(div).toBeVisible();
        await expect(label).toBeVisible();
        await expect(input).toBeVisible();
    }
    async selectItemFromDropdown(dropdown: Locator, item: string) {
        /*
        * This asynchronous method selects an
        * option/item from a specific dropdown.
        */

        await dropdown.click()
        await this.page.getByRole('button', { name: item }).click()
    }
    async selectItemFromCombobox(dropdown: Locator, item: string) {
        /*
        * This asynchronous method searches and selects an
        * option/item from a specific combobox.
        */

        await dropdown.click()
        await this.page.getByPlaceholder('Search...').fill(item)
        await this.page.locator(`//button/div/span[text()='${item}']`).click()
    }
} 