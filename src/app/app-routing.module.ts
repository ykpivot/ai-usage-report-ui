import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { ReportUploadComponent } from './report-upload/report-upload.component';

const routes: Routes = [
  { path: 'report', component: ReportComponent },
  { path: 'report-upload', component: ReportUploadComponent },
  { path: '', redirectTo: '/report', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
