import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebatchComponent } from './managebatch.component';

describe('ManagebatchComponent', () => {
  let component: ManagebatchComponent;
  let fixture: ComponentFixture<ManagebatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
