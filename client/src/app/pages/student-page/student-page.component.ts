import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import * as student from '../../../assets/students.json'

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [
    FormsModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,
    CalendarModule,
    DialogModule
  ],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent implements OnInit {
  id: string = ''
  students = (student as any).default
  realStudent: any;

  constructor(private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID:', this.id);
      this.realStudent = this.students.filter((sto: any) => sto.id == this.id)[0]
      console.log(this.realStudent)

    });
  }





  visibleDeletePopUp: boolean = false
  visibleAddPopUp: boolean = false
  lessonsAdded!: number | null;
  paidMoney!: number | null;
  lessonsDeleted!: number | null;
  reasonForCancellation!: string | null;
  lessonsLeft: number = 10


  showDeletePopUp() {
    this.visibleDeletePopUp = true
  }

  showAddPopUp() {
    this.visibleAddPopUp = true
  }

  addLessons() {
    if (this.lessonsAdded && this.paidMoney) {
      this.lessonsLeft = this.lessonsLeft + this.lessonsAdded
      this.lessonsAdded = null
      this.paidMoney = null
    }
  }

  deleteLessons() {
    if (this.lessonsDeleted) {
      console.log('delete lessons')
      this.lessonsLeft = this.lessonsLeft - this.lessonsDeleted
      this.lessonsDeleted = null
      this.reasonForCancellation = null
    }
  }

  lessonManaging(operation: string) {
    if (this.lessonsLeft >= 0) {
      if (operation === '+') {
        this.lessonsLeft = this.lessonsLeft + 1
      } else if (operation === '-' && this.lessonsLeft != 0) {
        this.lessonsLeft = this.lessonsLeft - 1
      }
    } else {
      console.log('nope')
      return
    }


  }

}
