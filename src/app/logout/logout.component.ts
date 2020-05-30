import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticateservice:HardcodedauthenticationService,
    private basicauthentication:BasicAuthenticationService) { }

  ngOnInit(): void {
    //this.authenticateservice.logout();
    this.basicauthentication.logout();
  }

}
