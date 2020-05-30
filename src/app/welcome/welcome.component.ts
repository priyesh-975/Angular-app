import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendserviceService } from '../service/data/backendservice.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

   welcomeMessage="Welcome to the welcome page";

   name="";
   public value:string;
   public errormessage:string;
  constructor(
    private route:ActivatedRoute,
    private backendservice:BackendserviceService) { 
      
    }


  ngOnInit() {
    this.name=this.route.snapshot.params['name'];


  }

  

  fetchBackenddata(){
   this.backendservice.excuteHellowBean()
   .subscribe((data)=>this.responseHandler(data),
   error=>this.errorHandler(error));

  }
  fetchBackenddatawithparameter()
  {
    this.backendservice.excuteHellowBeanwithparameter(this.name)
   .subscribe((data)=>this.responseHandler(data),
   error=>this.errorHandler(error));
  }

  responseHandler(response)
  {
    this.
    value=response.message;   
  }
  errorHandler(error)
  {
    
    this.errormessage=error.error.message;
    
  }



}
