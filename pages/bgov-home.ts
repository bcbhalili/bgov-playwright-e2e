import { Page, Locator } from '@playwright/test'

export class BGovHome {
    // Declare Members
    readonly page: Page;
    readonly fcpNavBar: Locator;

    // Declare Constructor
    constructor(page: Page) {
        this.page = page;
        this.fcpNavBar = page.getByRole('link', { name: 'Flood Control Projects' }).first()
    }

    // Declare Methods
    async goto() {
        this.page.goto('https://bettergov.ph/');
    }
    async navigateTo(navbar:Locator) {
        await navbar.click();
    }
} 