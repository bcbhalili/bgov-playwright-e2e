import { Locator, Page } from "@playwright/test";
import { FCP } from "../templates/bgov-fcp"

export class FCP_Visual extends FCP {
    // Properties
    readonly filtersForm: Locator;
    readonly infrastructureYearLabel: Locator;

    // Declare Constructor
    constructor(page: Page) {
        super(page)
        this.filtersForm = page.locator('//div[@class="bg-gray-50"]/div/div/div[1]')
        this.infrastructureYearLabel = this.infrastructureYear.getByText('Infrastructure Year')
    }
} 