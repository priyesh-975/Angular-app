import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 // isUserLogin:boolean;

  constructor(public authenticationservice:HardcodedauthenticationService) { }

  ngOnInit(): void {
  // this.isUserLogin = this.authenticationservice.isLogin();

  }

}
