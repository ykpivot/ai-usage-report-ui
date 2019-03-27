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
    this.getReportData(selectedDate.value);
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
}
