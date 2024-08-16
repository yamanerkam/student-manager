import { Component } from '@angular/core';
import { StudentCardComponent } from '../../components/student-card/student-card.component';
@Component({
  selector: 'app-student-card-screen',
  standalone: true,
  imports: [StudentCardComponent],
  templateUrl: './student-card-screen.component.html',
  styleUrl: './student-card-screen.component.css'
})
export class StudentCardScreenComponent {

}
