import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AIReportElement, ReportService} from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ReportComponent implements OnInit {
  dataSource: AIReportElement[];
  columnsToDisplay = ['org', 'lowerEnvironmentMaxInstances', 'upperEnvironmentMaxInstances'];
  expandedElement: AIReportElement | null;
  reportDates: string[];
  selectedReportDate: string;

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
    this.getReportDates();
  }

  dateChanged(selectedDate) {
    this.selectedReportDate = selectedDate.value;
    this.getReportData(this.selectedReportDate);
  }

  downloadSummaryReport() {
    this.reportService.downloadSummaryReport(this.selectedReportDate)
      .subscribe(data => {
        this.downloadReport('summary', this.selectedReportDate, data);
      });
  }

  downloadDetailReport() {
    this.reportService.downloadDetailReport(this.selectedReportDate)
      .subscribe(data => {
        this.downloadReport('detail', this.selectedReportDate, data);
      });
  }

  getReportDates(): void {
    this.reportService.getReportAvailableDates()
      .subscribe(dates => {
        this.reportDates = dates;
        this.selectedReportDate = dates[0];
        this.getReportData(this.selectedReportDate);
      });
  }

  getReportData(date) {
    this.reportService.getReportData(date)
      .subscribe(data => {
        this.dataSource = data;
      });
  }

  private downloadReport(type: string, date: string, reportData: string) {
    const csvData = new Blob([reportData], {type: 'text/csv'});
    const downloadURL = window.URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = downloadURL;
    link.download = `ai-usage-${type}-report-${date}.csv`;
    link.click();
  }
}
