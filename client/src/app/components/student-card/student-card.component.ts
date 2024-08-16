import { Component, input, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() name!: string;
  @Input() job!: string;
  @Input() grade!: number;
  @Input() lessonsLeft!: number;

}
