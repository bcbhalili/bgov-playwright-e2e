import { test, expect } from '@playwright/test'
import { FCP } from '../pages/bgov-fcp'
import { BGovHome } from '../pages/bgov-home';

test.describe('Scenario: Flood Control Projects E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        const home = new BGovHome(page);

        await home.goto()
        await home.navigateTo(home.fcpNavBar);
    });
    
    test('TC1: Verify Flood Control Projects page', async ({ page }) => {
        const fcp = new FCP(page);
        await expect(fcp.filtersForm).toBeVisible();

        fcp.verifyFilterSectionIfVisible(fcp.searchProjects,
                                        fcp.searchProjectsLabel,
                                        fcp.searchProjectsField);
        fcp.verifyFilterSectionIfVisible(fcp.infrastructureYear, 
                                        fcp.infrastructureYearLabel,
                                        fcp.infrastructureYearDropdown);

        await fcp.filtersForm.screenshot({ path: 'fcp-filters-form.png'});
        await fcp.searchProjects.screenshot({ path: 'fcp-filters-search-projects.png'});
        await fcp.infrastructureYear.screenshot({ path: 'fcp-filters-infrastructure-year.png'});
    });
});