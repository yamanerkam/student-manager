import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubject, Observable } from 'rxjs';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { Student } from '../../components/student-card/student-card.component';

import { StudentCardComponent } from '../../components/student-card/student-card.component';
import * as studentData from '../../../assets/students.json'
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

type Grade = {
  Grade:number
}

@Component({
  selector: 'app-student-card-screen',
  standalone: true,
  imports: [StudentCardComponent,DropdownModule,FormsModule,CommonModule, ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule],
  templateUrl: './student-card-screen.component.html',
  styleUrl: './student-card-screen.component.css'
})
export class StudentCardScreenComponent implements OnInit {

  // add this to your library
  students: Student[] = (studentData as any).default
  studentsFiltered: Student[] = []
  searchTermTemp = ""
  grade: Grade | undefined;
  grades: Grade[] | undefined = [
    { Grade: 1 },
    { Grade: 2 },
    { Grade: 3 },
    { Grade: 4 },
    { Grade: 5 },
    { Grade: 6 },
    { Grade: 7 },
    { Grade: 8 },
    { Grade: 9 },
    { Grade: 10 },
    { Grade: 11 },
    { Grade: 12 },
  ];

  execute() {
    this.studentsFilter(this.searchTermTemp)
  }

  constructor() {
    this.studentsFiltered = this.students;
  }
  ngOnInit() {
    console.log(this.grades)
  }

  studentsFilter(name: string) {
    this.studentsFiltered = this.students.filter((stu) => stu.name.toLowerCase().includes(name.toLowerCase()));
    console.log(this.studentsFiltered);
  }

  studentsFilterByGrade(grade:Grade|undefined){
    this.studentsFiltered = this.students.filter((stu) => stu.grade == this.grade?.Grade);
    console.log(this.studentsFiltered); 
   


  }

}
