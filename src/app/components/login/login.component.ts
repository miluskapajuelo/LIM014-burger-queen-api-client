import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  error: boolean = false;
  errorMessage: string;

  constructor(private authApiService: AuthApiService, private router: Router, private fb: FormBuilder) {

    this.form = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])),
    });

  }

  ngOnInit() {
    console.log('form', this.form.value);

    this.form.get('password').valueChanges
    .subscribe((password) => {

      console.log('password', password);
    })

    this.form.get('email').valueChanges
    .subscribe((email) => {

      console.log('email', email);
    })

    this.form.valueChanges
    .subscribe((form) => {

      console.log('form', form);
    })

    this.form.statusChanges
    .subscribe((state) => {

      console.log('state', state);
    })
  }

  login() {

    this.error = false;
    this.errorMessage = '';

    if (this.form.invalid) {
      console.log('te faltan datos');

      this.error = true;
      if (this.form.get('email').invalid) {

        this.errorMessage = 'email invalid';
      } else if (this.form.get('password').invalid) {

        this.errorMessage = 'password invalid';
      }
    } else {
      const body = this.form.value;

      this.authApiService.loginAuth(body)
        .pipe(
          catchError((error) => {
            console.log('error', error);
            if (error.status === 400) {
              this.error = true;
              console.log('error de credenciales');
              this.errorMessage = 'Incorret Email or Password';
            }
            return throwError(error);
          })
        )
        .subscribe((data: any) => {
          this.error = false;
          window.localStorage.setItem('token', data.token);
          const token: any = jwt_decode(data.token);
          if (token.roles.admi) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['waiter']);
          }
        });
    }

  }

}
