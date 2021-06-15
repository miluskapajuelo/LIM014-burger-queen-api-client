import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersTableComponent } from './manageUsers-table.component';

describe('ManageUsersTableComponent', () => {
  let component: ManageUsersTableComponent;
  let fixture: ComponentFixture<ManageUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageUsersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
