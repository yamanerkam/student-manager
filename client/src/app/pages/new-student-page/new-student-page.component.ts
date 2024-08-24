import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-new-student-page',
  standalone: true,
  imports: [CardModule,PanelModule,FormsModule,InputNumberModule,InputTextModule,InputTextareaModule],
  templateUrl: './new-student-page.component.html',
  styleUrl: './new-student-page.component.css'
})
export class NewStudentPageComponent {



}
