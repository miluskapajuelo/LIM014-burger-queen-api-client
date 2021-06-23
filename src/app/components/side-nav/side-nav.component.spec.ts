import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthApiService } from "../../services/auth-api.service"
import { SideNavComponent } from './side-nav.component';

describe('SidenNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }
  let mockAuth = {
    logOut: jasmine.createSpy('logOut')
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideNavComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthApiService, useValue: mockAuth }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGM5MmMxM2NjNTMzNTBmMzkwNDk5ZGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwiaWF0IjoxNjIzNzk2ODg0LCJleHAiOjE2MjM4MDA0ODR9.8tDX3i4afFU7TAFfvg11ngvIJOYgZZ2oQDpLu0xYrpg');
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shoul be side nav waiter or chef', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGM5MmMxM2NjNTMzNTBmMzkwNDk5ZGQiLCJlbWFpbCI6ImFkbWluQGxvY2FsaG9zdCIsInJvbGVzIjp7ImFkbWluIjpmYWxzZX0sImlhdCI6MTYyMzc5Njg4NCwiZXhwIjoxNjIzODAwNDg0fQ.0jjMrsFCjpe_J4GaCc_EQNqLwz_MZop3LHeCZGNJNLI');
    expect(component.rolAcces()).toEqual(['Menu', 'Orders', 'Log Out'])

  })
  it('Should be select true', () => {
    component.select()
    expect(component.isSelect).toBeTrue()
  })
  it('Should be select false', () => {
    component.isSelect = true;
    component.select()
    expect(component.isSelect).toBeFalse()
  })
  it('Should navigate to Menu', () => {
    component.redirect('Menu')
    expect(mockRouter.navigate).toHaveBeenCalledWith(['waiter']);
  })
  it('Should navigate to Orders', () => {
    component.redirect('Orders')
    expect(mockRouter.navigate).toHaveBeenCalledWith(['statusOrders']);
  })
  it('Should navigate to Manage', () => {
    component.redirect('Manag')
    expect(mockRouter.navigate).toHaveBeenCalledWith(['manage']);
  })
  it('Should be log out', () => {

    component.redirect('Log Out')
    expect(mockAuth.logOut).toHaveBeenCalled()
  })

});
