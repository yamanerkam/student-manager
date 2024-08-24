import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

type newStudent = {
  profilePictureURL:string,
  studentName:string,
  studentEmail:string,
  studentJob:string,
  studentGrade?:number
}
@Component({
  selector: 'app-new-student-page',
  standalone: true,
  imports: [CardModule,PanelModule,FormsModule,InputNumberModule,ToastModule,InputTextModule,InputTextareaModule,FileUploadModule],
  templateUrl: './new-student-page.component.html',
  styleUrl: './new-student-page.component.css',
  providers:[MessageService]
})
export class NewStudentPageComponent {

  
student:newStudent={
  profilePictureURL: "",
  studentName: "",
  studentEmail : "",
  studentJob: "",
}




  constructor(private messageService: MessageService) {}

  onUpload(event:any) {
    console.log(event.files[0].objectURL.changingThisBreaksApplicationSecurity)
    this.student.profilePictureURL=event.files[0].objectURL.changingThisBreaksApplicationSecurity
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
 }

  onSubmit(){
    if(this.student.studentName && this.student.studentEmail && this.student.studentJob && this.student.profilePictureURL && this.student.studentGrade){
        console.log(this.student)
    }else{
      console.log("what are you doing?")
    }
  }
}
