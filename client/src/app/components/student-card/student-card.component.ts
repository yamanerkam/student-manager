import { Component, input, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLinkActive, RouterLink } from '@angular/router';

export interface Student {
  id: number;
  name: string;
  grade: number;
  lessonsLeft: number;
  job: string;
}

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLinkActive, RouterLink],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student!: Student;
  @Input() justTry!: string;


}
