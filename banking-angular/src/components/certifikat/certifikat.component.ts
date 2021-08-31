import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CertifikatService} from "../../services/certifikat.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-certifikat',
  templateUrl: './certifikat.component.html',
  styleUrls: ['./certifikat.component.scss']
})
export class CertifikatComponent implements OnInit {

  currentFile?: File;
  progress = 0;
  message = '';
  password: string;

  fileName = 'Select File';
  fileInfos?: Observable<any>;

  constructor(private certifikatService: CertifikatService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  upload(): void {
    this.progress = 0;
    this.message = '';

    if (this.currentFile) {
      this.certifikatService.uploadCertificate(this.currentFile, this.password).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = 'Upload success';
          }
        },
        (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        });
    }

  }

}
