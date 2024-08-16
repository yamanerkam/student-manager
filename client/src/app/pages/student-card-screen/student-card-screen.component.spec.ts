import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardScreenComponent } from './student-card-screen.component';

describe('StudentCardScreenComponent', () => {
  let component: StudentCardScreenComponent;
  let fixture: ComponentFixture<StudentCardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCardScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
