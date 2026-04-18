import { Locator, Page } from "@playwright/test";

export class FCP_Contractors {
    // Properties
    readonly page: Page;
    readonly tab: Locator;
    readonly heading: Locator;
    readonly searchField: Locator;

    // Declare Constructor
    constructor(page: Page) {
        this.page = page
        this.tab = page.getByRole('link', { name: 'Contractors', exact: true })
        this.heading = page.getByRole('heading', { name: 'Flood Control Projects by Contractor'})
        this.searchField = page.getByPlaceholder("Search contractors...")
    }
} 