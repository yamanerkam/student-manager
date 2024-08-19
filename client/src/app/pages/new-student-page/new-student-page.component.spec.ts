import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentPageComponent } from './new-student-page.component';

describe('NewStudentPageComponent', () => {
  let component: NewStudentPageComponent;
  let fixture: ComponentFixture<NewStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStudentPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
