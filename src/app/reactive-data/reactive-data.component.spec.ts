import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDataComponent } from './reactive-data.component';

describe('ReactiveDataComponent', () => {
  let component: ReactiveDataComponent;
  let fixture: ComponentFixture<ReactiveDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
