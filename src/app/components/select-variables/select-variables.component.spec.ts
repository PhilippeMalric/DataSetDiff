import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVariablesComponent } from './select-variables.component';

describe('SelectVariablesComponent', () => {
  let component: SelectVariablesComponent;
  let fixture: ComponentFixture<SelectVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
