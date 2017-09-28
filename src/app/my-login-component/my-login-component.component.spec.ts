import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoginComponentComponent } from './my-login-component.component';

describe('MyLoginComponentComponent', () => {
  let component: MyLoginComponentComponent;
  let fixture: ComponentFixture<MyLoginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLoginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
