import {inject, TestBed} from '@angular/core/testing';

import {ReportService} from './report.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ReportServiceService', () => {

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
            org: 'Some org',
            lowerEnvironmentMaxInstances: 12,
            upperEnvironmentMaxInstances: 8,
            lowerDetails: [
              {
                foundation: 'Dev',
                space: 'Test Space',
                app: 'Test App',
                instances: 3
              }
            ],
            upperDetails: [
              {
                foundation: 'STAG',
                space: 'Real Space',
                app: 'TheTrueApp',
                instances: 2
              },
              {
                foundation: 'STAG',
                space: 'OuterSpace',
                app: 'RealApp',
                instances: 1
              }
            ]
          }
        ];

        service.getReportData('2019-3').subscribe(response => {
          expect(response.length).toBe(1);
          expect(response[0].org).toBe('Some org');
        });

        const req = httpMock.expectOne('https://backend.cf.com/v1/report/2019-3');
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

        const req = httpMock.expectOne('https://backend.cf.com/v1/availabledates');
        expect(req.request.method).toEqual('GET');

        req.flush(stubReponse);
      })
  );
});
