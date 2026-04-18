import { Locator, Page } from "@playwright/test";

export class FCP_Map {
    // Properties
    readonly page: Page;
    readonly heading: Locator;
    readonly tab: Locator

    // Declare Constructor
    constructor(page: Page) {
        this.page = page
        this.heading = page.getByRole('heading', { name: 'Flood Control Projects Map'})
        this.tab = page.getByRole('link', { name: 'Map', exact: true })
    }
} 