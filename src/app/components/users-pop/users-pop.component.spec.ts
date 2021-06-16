import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPopComponent } from './users-pop.component';

describe('UsersPopComponent', () => {
  let component: UsersPopComponent;
  let fixture: ComponentFixture<UsersPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});