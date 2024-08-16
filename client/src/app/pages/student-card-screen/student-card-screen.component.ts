import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Student } from '../../components/student-card/student-card.component';

import { StudentCardComponent } from '../../components/student-card/student-card.component';
import * as studentData from '../../../assets/students.json'
@Component({
  selector: 'app-student-card-screen',
  standalone: true,
  imports: [StudentCardComponent, CommonModule],
  templateUrl: './student-card-screen.component.html',
  styleUrl: './student-card-screen.component.css'
})
export class StudentCardScreenComponent {

  // add this to your library
  students: Student[] = (studentData as any).default




}
