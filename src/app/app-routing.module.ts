import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TopicslistsComponent } from './topicslists/topicslists.component';

const routes: Routes = [
  {path:'drag',component:DragAndDropComponent},
  {path:'',component:TopicslistsComponent},
  {path:'fileupload',component:FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
