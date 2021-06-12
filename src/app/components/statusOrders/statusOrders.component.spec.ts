import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOrdersComponent } from './statusOrders.component';

describe('StatusOrdersComponentt', () => {
  let component: StatusOrdersComponent;
  let fixture: ComponentFixture<StatusOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
