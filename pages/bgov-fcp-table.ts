import { Locator, Page } from "@playwright/test";
import { FCP } from "../templates/bgov-fcp"

export class FCP_Table extends FCP {
    // Properties
    readonly infrastructureYearLabel: Locator;
    readonly appliedFilters: Locator;
    readonly filterText: Locator;

    // Declare Constructor
    constructor(page: Page) {
        super(page)
        this.infrastructureYearLabel = this.infrastructureYear.getByText('Year').first()
        this.appliedFilters = page.locator("//div[@class='p-6']")
        this.filterText = this.appliedFilters.getByRole('heading')
    }
} 