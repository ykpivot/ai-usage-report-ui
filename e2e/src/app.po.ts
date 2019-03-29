import {$$, browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h5')).getText() as Promise<string>;
  }

  getReportTableRowCount() {
    return $$('.report-element-row').count();
  }

  openReportDateOptions() {
    element(by.css('.mat-select')).click();
  }

  getReportDateSelection(date) {
    return element.all(by.cssContainingText('span.mat-option-text', date));
  }
}
