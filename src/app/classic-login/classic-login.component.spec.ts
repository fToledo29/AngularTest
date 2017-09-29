import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLoginComponent } from './classic-login.component';

describe('ClassicLoginComponent', () => {
  let component: ClassicLoginComponent;
  let fixture: ComponentFixture<ClassicLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
