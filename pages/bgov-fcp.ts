import { expect, Page, Locator } from '@playwright/test'

export class FCP {
    // Declare Members
    readonly page: Page;
    readonly filtersForm: Locator;
    readonly searchProjects: Locator;
    readonly searchProjectsLabel: Locator;
    readonly searchProjectsField: Locator;
    readonly infrastructureYear: Locator;
    readonly infrastructureYearLabel: Locator;
    readonly infrastructureYearDropdown: Locator;

    // Declare Constructor
    constructor(page: Page) {
        this.page = page;
        // Locate the filters form (base webelement)
        this.filtersForm = page.locator('//div[@class="bg-gray-50"]/div/div/div[1]/div');
        // Locate the Search Projects div that has a text
        // containing (by the use of regex) "Search Projects" 
        // and locate also the label and field
        this.searchProjects = this.filtersForm.locator('div', { hasText: /\bSearch Projects\b/ });
        this.searchProjectsLabel = this.searchProjects.getByText('Search Projects');
        this.searchProjectsField = this.searchProjects.getByPlaceholder('Projects, contractors, municipality, province, region...');
        // Locate the Infrastructure Year div that has a text
        // containing (by the use of regex) "Search Projects" 
        // and locate also the label and field
        this.infrastructureYear = this.filtersForm.locator('//div[2]/div[2]')
        this.infrastructureYearLabel = this.infrastructureYear.getByText('Infrastructure Year');
        this.infrastructureYearDropdown = this.infrastructureYear.getByRole('button', { name: 'Select Year'})
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
    };
} 