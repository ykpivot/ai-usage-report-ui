import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {
  }

  getReportData(dateRange: string): Observable<AIReportElement[]> {
    return this.http.get<AIReportElement[]>(`https://backend.cf.com/v1/report/${dateRange}`);
  }

  getReportAvailableDates(): Observable<string[]> {
    return this.http.get<string[]>('https://backend.cf.com/v1/availabledates');
  }
}

export class AIReportElement {
  org: string;
  lowerEnvironmentMaxInstances: number;
  upperEnvironmentMaxInstances: number;
  lowerDetails: AIReportDetailElement[];
  upperDetails: AIReportDetailElement[];
}

export class AIReportDetailElement {
  foundation: string;
  space: string;
  app: string;
  instances: number;
}
