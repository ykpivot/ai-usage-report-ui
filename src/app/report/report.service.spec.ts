import {inject, TestBed} from '@angular/core/testing';

import {ReportService} from './report.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ReportService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should get report data by date specified',
    inject([HttpTestingController, ReportService],
      (httpMock: HttpTestingController, service: ReportService) => {

        const stubReponse = [
          {
            organizationName: 'Some org',
            lowerEnvironmentMaxInstances: 12,
            upperEnvironmentMaxInstances: 8,
            lowerDetails: [
              {
                platform: 'Dev',
                spaceName: 'Test Space',
                appName: 'Test App',
                maxInstances: 3
              }
            ],
            upperDetails: [
              {
                platform: 'STAG',
                spaceName: 'Real Space',
                appName: 'TheTrueApp',
                maxInstances: 2
              },
              {
                platform: 'STAG',
                spaceName: 'OuterSpace',
                appName: 'RealApp',
                maxInstances: 1
              }
            ]
          }
        ];

        service.getReportData('2019-3').subscribe(response => {
          expect(response.length).toBe(1);
          expect(response[0].organizationName).toBe('Some org');
        });

        const req = httpMock.expectOne('https://usage-data.cf.grogscave.net/v1/report/2019/3');
        expect(req.request.method).toEqual('GET');

        req.flush(stubReponse);
      })
  );

  it('should get available dates',
    inject([HttpTestingController, ReportService],
      (httpMock: HttpTestingController, service: ReportService) => {

        const stubReponse = [
          '2019-03',
          '2019-02'
        ];

        service.getReportAvailableDates().subscribe(response => {
          expect(response.length).toBe(2);
          expect(response[0]).toBe('2019-03');
          expect(response[1]).toBe('2019-02');
        });

        const req = httpMock.expectOne('https://usage-data.cf.grogscave.net/v1/report/availabledates');
        expect(req.request.method).toEqual('GET');

        req.flush(stubReponse);
      })
  );

  it('should get a summary report for download',
    inject([HttpTestingController, ReportService],
      (httpMock: HttpTestingController, service: ReportService) => {

        const stubReponse = 'report,data,in,cvs,format';

        service.downloadSummaryReport('2018-12').subscribe(response => {
          expect(response).toBe('report,data,in,cvs,format');
        });

        const req = httpMock.expectOne('https://usage-data.cf.grogscave.net/v1/download/billing/2018/12');
        expect(req.request.method).toEqual('GET')
        expect(req.request.responseType).toEqual('text');

        req.flush(stubReponse);
      })
  );

  it('should get a detail report for download',
    inject([HttpTestingController, ReportService],
      (httpMock: HttpTestingController, service: ReportService) => {

        const stubReponse = 'detail,report,data,in,cvs,format';

        service.downloadDetailReport('2018-12').subscribe(response => {
          expect(response).toBe('detail,report,data,in,cvs,format');
        });

        const req = httpMock.expectOne('https://usage-data.cf.grogscave.net/v1/download/detail/2018/12');
        expect(req.request.method).toEqual('GET');
        expect(req.request.responseType).toEqual('text');

        req.flush(stubReponse);
      })
  );
});
