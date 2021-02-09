import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoyeeManagerComponentComponent } from './empoyee-manager-component.component';

describe('EmpoyeeManagerComponentComponent', () => {
  let component: EmpoyeeManagerComponentComponent;
  let fixture: ComponentFixture<EmpoyeeManagerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpoyeeManagerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoyeeManagerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
