import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReportComponent} from './report.component';
import {AppRoutingModule} from '../app-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {ReportUploadComponent} from '../report-upload/report-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {AIReportElement, ReportService} from './report.service';
import {Observable, of} from 'rxjs';

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
        { provide: ReportService, useClass: MockReportService }
      ],
      imports: [
        AppRoutingModule,
        NoopAnimationsModule,
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

  it('should populate report date dropdown', () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('hello');
  });

});

class MockReportService {
  public getReportAvailableDates(): Observable<AIReportElement[]> {

    const reportElement = new AIReportElement();
    reportElement.org = 'MyOrg';
    reportElement.lowerEnvironmentMaxInstances = 3;
    reportElement.upperEnvironmentMaxInstances = 2;

    return of([reportElement]);
  }
}
