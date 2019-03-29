import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  API_URL = 'https://usage-data.cf.grogscave.net/v1/';

  constructor(private http: HttpClient) {
  }

  getReportData(date: string): Observable<AIReportElement[]> {
    return this.http.get<AIReportElement[]>(`${this.API_URL}report/${this.convertDateFormat(date)}`);
  }

  getReportAvailableDates(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}report/availabledates`);
  }

  downloadSummaryReport(date: string): Observable<string> {
    return this.downloadReport('billing', date, this.API_URL);
  }

  downloadDetailReport(date: string): Observable<string> {
    return this.downloadReport('detail', date, this.API_URL);
  }

  private downloadReport(type: string, date: string, apiUrl): Observable<string> {
    const requestOptions: object = {
      responseType: 'text'
    };
    return this.http.get<string>(`${apiUrl}download/${type}/${this.convertDateFormat(date)}`, requestOptions);
  }

  private convertDateFormat(date: string): string {
    return date.replace('-', '/');
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
