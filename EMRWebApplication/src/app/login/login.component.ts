import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertsService } from 'angular-alert-module';
import { Login } from './Login';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public events: any[] = [];
  public submitted: boolean;
  public inValidUser: boolean;
  public errorMessage: string;
  responseData:any;
  loggedId:any;
  xyz: Login[];
  // xyzs: Login = new Login();

  constructor(@Inject(DOCUMENT) private document: any, private router: Router,
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private alerts: AlertsService) {
  }

  validateLogin() {
    this.submitted = true;
    this.inValidUser = false;
    this.loginValidate(this.myForm.value.username, this.myForm.value.password);
    // this.authService.loginDetails(this.myForm.value.username, this.myForm.value.password).subscribe(
    //   (result) => {
    //     console.log("result", result);
    //     if (result['username'] != undefined) {
    //       this.router.navigate(['/Home'])
    //     }
    //     else {
    //       this.inValidUser = true;
    //       this.errorMessage = "Invalies Username/Password";
    //     }
    //   },
    //   (error) => {
    //     debugger;
    //     console.error(error);
    //     this.inValidUser = true;
    //     this.inValidUser = true;
    //     this.errorMessage = "Internal server error";
    //   }
    // );
    
    
  }
  loginValidate(username, password) {
   
    this.authService.loginDetails(username, password).subscribe(
      (result) => {
        // this.loggedId={token:"", userId:""};
        debugger;
        this.responseData = result;
        // this.loggedId.token = this.responseData.id;
        localStorage.setItem("logged", this.responseData.id);
        var receiver = document.getElementById('receiver') as HTMLIFrameElement;
          // Prevent any default browser behaviour.
          //preventDefault();
  
          // Send a message with the text 'Hello Treehouse!' to the new window.
          // receiver.postMessage(this.responseData.id, 'http://localhost:9000');
        //console.log("result", this.responseData.id);
        if (result['username'] != ((undefined) || (""))) {
          // this.router.navigate(['/Home'])
          this.document.location.href = 'http://qaservernew.hillromvest.com/#/admin/patients';
          this.alerts.setMessage('log in successfull', 'success');
        }
        else {
          this.inValidUser = true;
          this.errorMessage = "Invalies Username/Password";
        }
      },
      (error) => {
        console.error(error);
        this.inValidUser = true;
        this.inValidUser = true;
        this.errorMessage = "Internal server error";
      }
    );
  }

  ngOnInit() {
     this.clearLogin();
  }

  clearLogin() {
    this.myForm = this.formBuilder.group({
      username: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });
  }
}