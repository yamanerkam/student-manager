import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule,
    TableModule,
    PanelModule,
    CardModule,
    CalendarModule,
  ],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent {

  lessonsLeft: number = 10

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
