import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServiceHttpComponent } from './demo-service-http.component';

describe('DemoServiceHttpComponent', () => {
  let component: DemoServiceHttpComponent;
  let fixture: ComponentFixture<DemoServiceHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoServiceHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoServiceHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
