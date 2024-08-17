import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';


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
export class StudentPageComponent {
  visibleDeletePopUp: boolean = false
  visibleAddPopUp: boolean = false
  lessonsAdded!: number | null;
  paidMoney!: number | null;
  lessonsLeft: number = 10


  showDeletePopUp() {
    this.visibleDeletePopUp = true
  }

  showAddPopUp() {
    this.visibleAddPopUp = true
  }

  addLessons() {
    if (this.lessonsAdded) {
      this.lessonsLeft = this.lessonsLeft + this.lessonsAdded
      this.lessonsAdded = null
      this.paidMoney = null
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
