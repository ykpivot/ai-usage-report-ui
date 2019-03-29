import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {
  }

  getReportData(date: string): Observable<AIReportElement[]> {
    return this.http.get<AIReportElement[]>(`${environment.apiUrl}report/${this.convertDateFormat(date)}`);
  }

  getReportAvailableDates(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}report/availabledates`);
  }

  downloadSummaryReport(date: string): Observable<string> {
    return this.downloadReport('billing', date, environment.apiUrl);
  }

  downloadDetailReport(date: string): Observable<string> {
    return this.downloadReport('detail', date, environment.apiUrl);
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
