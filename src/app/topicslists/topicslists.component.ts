import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topicslists',
  templateUrl: './topicslists.component.html',
  styleUrls: ['./topicslists.component.css']
})
export class TopicslistsComponent implements OnInit {

  files: any[]=[];

  constructor(
  ){}
  ngOnInit(){
  }
  
    onFileDropped($event) {
      
      console.log($event);
      
      var file=$event[0]
      if($event.length > 1){
        alert('Multi unavailabe')
      }
      else if (['xls', 'xlsx','csv'].indexOf(file.name.split('.')[file.name.split('.').length - 1]) === -1) {
        alert('please select CSV file only');
      }
      else if(file.size>1024){
        alert('Valid file size')
      }
      else{
        this.prepareFilesList($event);
      }
    }
  
    /**
     * handle file from browsing
     */
    fileBrowseHandler(files) {
      this.prepareFilesList(files);
    }
  
    /**
     * Delete file from files list
     * @param index (File index)
     */
    deleteFile(index: number) {
      this.files.splice(index, 1);
    }
  
    prepareFilesList(files: Array<any>) {
      for (const item of files) {
        item.progress = 0;
        this.files.push(item);
      }
      this.uploadFilesSimulator(0);
    }
  
      /**
     * Simulate the upload process
     */
    uploadFilesSimulator(index: number) {
      setTimeout(() => {
        if (index === this.files.length) {
          return;
        } else {
          const progressInterval = setInterval(() => {
            if (this.files[index].progress === 100) {
              clearInterval(progressInterval);
              this.uploadFilesSimulator(index + 1);
            } else {
              this.files[index].progress += 5;
            }
          }, 200);
        }
      }, 1000);
    }
  
    formatBytes(bytes, decimals) {
      if (bytes === 0) {
        return '0 Bytes';
      }
      const k = 1024;
      const dm = decimals <= 0 ? 0 : decimals || 2;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

}
