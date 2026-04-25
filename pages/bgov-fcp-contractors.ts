import { Locator, Page } from "@playwright/test";

export class FCP_Contractors {
    // Properties
    readonly page: Page;
    readonly tab: Locator;
    readonly heading: Locator;
    readonly searchField: Locator;
    readonly mainTile: Locator;
    readonly totalProjectsTile: Locator;
    readonly totalContractCostTile: Locator;
    readonly averageProjectCostTile: Locator;

    // Declare Constructor
    constructor(page: Page) {
        this.page = page
        this.tab = page.getByRole('link', { name: 'Contractors', exact: true })
        this.heading = page.getByRole('heading', { name: 'Flood Control Projects by Contractor'})
        this.searchField = page.getByPlaceholder("Search contractors...")
        this.mainTile = page.locator("//div[@class='bg-white p-4 rounded-lg shadow-sm mb-4']/div[2]")
        this.totalProjectsTile = this.mainTile.locator("//div[1]")
        this.totalContractCostTile = this.mainTile.locator("//div[2]")
        this.averageProjectCostTile = this.mainTile.locator("//div[3]")
    }
} 