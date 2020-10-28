import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchstudentComponent } from './batchstudent.component';

describe('BatchstudentComponent', () => {
  let component: BatchstudentComponent;
  let fixture: ComponentFixture<BatchstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
