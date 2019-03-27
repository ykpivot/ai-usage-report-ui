import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  API_URL = 'https://usage-data.cf.grogscave.net/v1/';

  constructor(private http: HttpClient) {
  }

  getReportData(date: string): Observable<AIReportElement[]> {
    return this.http.get<AIReportElement[]>(`${this.API_URL}report/${date.replace('-', '/')}`);
  }

  getReportAvailableDates(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}report/availabledates`);
  }
}

export class AIReportElement {
  organizationName: string;
  lowerEnvironmentMaxInstances: number;
  upperEnvironmentMaxInstances: number;
  lowerDetails: AIReportDetailElement[];
  upperDetails: AIReportDetailElement[];
}

export class AIReportDetailElement {
  platform: string;
  spaceName: string;
  appName: string;
  maxInstances: number;
}
