import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHeadlessDemoComponent } from './sidebar-headless-demo.component';

describe('SidebarHeadlessDemoComponent', () => {
  let component: SidebarHeadlessDemoComponent;
  let fixture: ComponentFixture<SidebarHeadlessDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarHeadlessDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarHeadlessDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
