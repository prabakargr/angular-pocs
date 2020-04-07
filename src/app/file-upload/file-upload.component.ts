import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ApiService } from '../services/api.services';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  documentForm: FormGroup;
  title = 'XlToJsonUi';
  sampleData:any
  _files: any;
  formSubmitted: boolean = false;
  url:'https://qahmisgateway.oasyshealth.co/DEVHMIS-INVENTORY/v1/api/itemCategory/addItemCategoryBulk'
  // url:'http://localhost:7335/api/itemCategory/addItemCategoryBulk'

  constructor(
    private formBuilder: FormBuilder,
    private apiService:ApiService
  ) { }

  ngOnInit() {
  this.documentForm = this.formBuilder.group({
    uploadFile: ['', Validators.required],
  })
}
  getFileName(files){
    this._files = files;
    console.log(this._files);

    
    
  }

  addDocumentFiles() {
    this.formSubmitted = true;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
  }
      let formdata = new FormData();
      formdata.append("file", this._files[0], this._files[0].name);
      console.log(formdata);
      

      this.apiService.post('https://qahmisgateway.oasyshealth.co/DEVHMIS-INVENTORY/v1/api/itemCategory/addItemCategoryBulk', formdata
        ).toPromise().then((response: any) => {
          if (response.status == 200) {
            this.timeralert('Success', 'File Uploaded Successfully');

          }
  
        })

}
  timeralert(arg0: string, arg1: string) {
    throw new Error("Method not implemented.");
  }

}
