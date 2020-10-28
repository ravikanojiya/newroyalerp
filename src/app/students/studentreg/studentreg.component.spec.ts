import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentregComponent } from './studentreg.component';

describe('StudentregComponent', () => {
  let component: StudentregComponent;
  let fixture: ComponentFixture<StudentregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
