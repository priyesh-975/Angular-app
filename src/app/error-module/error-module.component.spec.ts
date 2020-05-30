import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModuleComponent } from './error-module.component';

describe('ErrorModuleComponent', () => {
  let component: ErrorModuleComponent;
  let fixture: ComponentFixture<ErrorModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
