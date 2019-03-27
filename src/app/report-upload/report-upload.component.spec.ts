import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportUploadComponent } from './report-upload.component';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FileUploadModule} from 'ng2-file-upload';

describe('ReportUploadComponent', () => {
  let component: ReportUploadComponent;
  let fixture: ComponentFixture<ReportUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ReportUploadComponent
      ],
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatSelectModule,
        FileUploadModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
