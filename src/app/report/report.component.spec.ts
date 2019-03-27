import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportComponent} from './report.component';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {ReportUploadComponent} from '../report-upload/report-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {AIReportElement, ReportService} from './report.service';
import {Observable, of} from 'rxjs';
import {FormsModule} from '@angular/forms';

describe('ReportComponent', () => {
  let component: ReportComponent;
  let reportService: ReportService;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReportComponent,
        ReportUploadComponent
      ],
      providers: [
        ReportComponent,
        {provide: ReportService, useClass: MockReportService}
      ],
      imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        FileUploadModule
      ]
    });

    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    reportService = TestBed.get(ReportService);
  }));

  it('should populate the report date dropdown', () => {
    fixture.detectChanges();

    expect(component.selectedReportDate).toBe('2019-3');
    expect(component.dataSource.length).toBe(1);
    expect(component.dataSource[0].organizationName).toBe('SOME-ORG');
  });

  it('should update the report data when selecting different date', () => {
    component.dateChanged('2019-2');
    expect(component.dataSource[0].organizationName).toBe('ANOTHER-ORG');
  });

});

class MockReportService {
  public getReportAvailableDates(): Observable<string[]> {
    const dates = [
      '2019-3',
      '2019-2'
    ];

    return of(dates);
  }

  public getReportData(date: string): Observable<AIReportElement[]> {
    const reportElement = new AIReportElement();

    if (date === '2019-3') {
      reportElement.organizationName = 'SOME-ORG';
    } else {
      reportElement.organizationName = 'ANOTHER-ORG';
    }
    reportElement.lowerEnvironmentMaxInstances = 3;
    reportElement.upperEnvironmentMaxInstances = 2;

    return of([reportElement]);
  }
}
