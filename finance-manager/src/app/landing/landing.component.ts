import { FocusMonitor } from '@angular/cdk/a11y';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Household } from './models/household';
import { LoginService } from './services/login.service';
import { RegistrationComponent } from './registration/registration.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginForm } from './models/login';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // household: any = {
  //   UserId: 0,
  //   UserName:'',
  //   Password:'',
  //   Result: false,
  //   Message:''
  // };

  registerObj: any = {
    UserId: 0,
    UserName:'',
    Password:'',
    CreatedDate: new Date()
  };

  isRegister: boolean = false;
  
  household!: Household;
  loginForm!: FormGroup;
  loginFailedAttemptMessage: boolean = false;

  constructor(private router: Router,
              private http: HttpClient,
              private loginService: LoginService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null),
      password: new FormControl(null)
    })
  }

  openRegistrationDialog(): void {
    const registrationFormData = this.dialog.open(RegistrationComponent, {
      data:{
        message: `Are you sure want to add a new asset?`,
        buttonText: {
          ok: 'Yes',
          cancel: 'Cancel'
        }
      }
    });
  }

  public onLogin(accountData: LoginForm): void {
    console.log(accountData.username);
    console.log(accountData.password);
    this.loginService.getHouseholdByUserName(accountData.username).subscribe({
      next: data => {
  
        if (data) {
          console.log('account exists');
        } else {
          this.loginFailedAttemptMessage = true;
        }
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        this.loginFailedAttemptMessage = true;
        this.loginForm.reset()
      }, 
      complete: () => {
        this.router.navigateByUrl('dashboard');
      }
    });

    // debugger;
    // this.http.post("http://localhost:61334/api/Registration/Login", this.loginObj).subscribe((response: any)=>{
    //   debugger;
    //   if(response.result) {
    //     alert(response.message)
    //     this.router.navigateByUrl('dashboard');
    //   } else {
    //     alert(response.message)
    //   }
    // })
    //way 1
    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('admin-dash');
    // }
    //way 2

    // if(this.loginObj.userName == 'user123' && this.loginObj.password =='user@123') {
    //   localStorage.setItem('role','user');
    //   this.router.navigateByUrl('way2user-dashboard');
    // } else if (this.loginObj.userName == 'admin' && this.loginObj.password =='admin@123') {
    //   localStorage.setItem('role','admin');
    //   this.router.navigateByUrl('way2admin-dash');
    // }
  }

}
