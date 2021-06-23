import { Component, OnInit } from '@angular/core';
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
  error: boolean;
  errorMessage: string;

  constructor(private authApiService: AuthApiService, private router: Router, private fb: FormBuilder) {
    this.error = false
    this.form = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])),
    });

  }

  ngOnInit() {
    }

  login() {

    this.error = false;
    this.errorMessage = '';

      const body = this.form.value;

      this.authApiService.loginAuth(body)
        .pipe(
          catchError((error) => {
            if (error.status === 400) {
              this.error = true;
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


