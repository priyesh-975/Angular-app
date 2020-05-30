import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-module',
  templateUrl: './error-module.component.html',
  styleUrls: ['./error-module.component.css']
})
export class ErrorModuleComponent implements OnInit {


  constructor() { }
  errorMessege="You are not in the right place****Error***"

  ngOnInit(): void {
  }

}
