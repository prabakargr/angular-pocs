import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators,FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { DndDirective } from './dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { TopicslistsComponent } from './topicslists/topicslists.component';

@NgModule({
  declarations: [
    AppComponent,
    DndDirective,
    ProgressComponent,
    FileUploadComponent,
    DragAndDropComponent,
    TopicslistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
