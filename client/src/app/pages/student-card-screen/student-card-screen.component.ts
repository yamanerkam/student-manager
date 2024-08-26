import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { Student } from '../../components/student-card/student-card.component';

import { StudentCardComponent } from '../../components/student-card/student-card.component';
import * as studentData from '../../../assets/students.json'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-card-screen',
  standalone: true,
  imports: [StudentCardComponent, FormsModule, CommonModule, ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule],
  templateUrl: './student-card-screen.component.html',
  styleUrl: './student-card-screen.component.css'
})
export class StudentCardScreenComponent {

  // add this to your library
  students: Student[] = (studentData as any).default
  studentsFiltered: Student[] = []
  searchTerm: string = '';

  constructor() {
    this.studentsFiltered = this.students; // Display all students initially
  }

  studentsFilter(name: string) {
    this.studentsFiltered = this.students.filter((stu) => stu.name.toLowerCase().includes(name.toLowerCase()));
    console.log(this.studentsFiltered);
  }




}
