import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-report-upload',
  templateUrl: './report-upload.component.html',
  styleUrls: ['./report-upload.component.scss']
})
export class ReportUploadComponent implements OnInit {

  constructor() { }

  public uploader: FileUploader = new FileUploader(
    {
      url: 'http://google.com', itemAlias: 'report'
    });

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('Report uploaded:', item, status, response);
      alert('54 records were uploaded successfully');
    };
  }
}
