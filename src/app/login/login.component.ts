import { OnInit,Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
export const TOKEN="token";
export const AUTHENTICATE_USER="authenticateUser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  

  constructor(private router: Router,
    private authenticatorService: HardcodedauthenticationService, 
    private basicauthenticatorService: BasicAuthenticationService) { }
    

  username = 'in28minutes';
  password = 'dummy';

  error = false;

  ngOnInit(): void {
  }

  onLogin() {
    // console.log(this.username);
    // console.log(this.password)
    // if (this.authenticatorService.authenticate(this.username, this.password))
    //   //Navigate to the welcome page by the help of the router
    //   this.router.navigate(['welcome/name'])
    // else
    //   this.error = true
  }
  basiconLogin() {
    let auth = 'Basic ' + window.btoa(this.username + ':' + this.password)
    this.basicauthenticatorService.excuteAuthenticationService(this.username, this.password).subscribe(
      data => {
        sessionStorage.setItem('authenticateUser', this.username);
        sessionStorage.setItem('token', auth);

        console.log(data)
        this.router.navigate(['welcome/name'])
        this.error = false

      },
      error => {
        console.log(error)
        this.error = true

      }

    );
    //Navigate to the welcome page by the help of the route


  }
  jwtloginauthentication() {
    this.basicauthenticatorService.excuteAuthenticationJWTService(this.username, this.password).subscribe(
      (data:any) =>{
        sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
        sessionStorage.setItem(AUTHENTICATE_USER,this.username);
        this.router.navigate(['welcome/name'])
        this.error = false
      },
      error => {
        console.log(error.error)
        this.error = true

      });

    }
  }
    

   

