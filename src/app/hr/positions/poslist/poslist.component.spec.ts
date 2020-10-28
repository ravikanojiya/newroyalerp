import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslistComponent } from './poslist.component';

describe('PoslistComponent', () => {
  let component: PoslistComponent;
  let fixture: ComponentFixture<PoslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
