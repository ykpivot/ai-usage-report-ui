import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the report table', () => {
    page.navigateTo();

    expect(page.getTitleText()).toEqual('AI Usage Report');
    expect(page.getReportTableRowCount()).toBeGreaterThan(20);

    page.openReportDateOptions();
    page.getReportDateSelection('2017-11').click();

    expect(page.getReportTableRowCount()).toEqual(6);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
