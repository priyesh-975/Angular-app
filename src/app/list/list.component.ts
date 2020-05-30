import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../service/data/todo-service.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

export class Todo{
 constructor(
public id:number,
 public name:string,
 public targetDate:Date,
 public completed:boolean
  ){}
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private todoService:TodoServiceService,
    private router:Router) { }
Todos=[];
public message:string;
 
  ngOnInit() {
    this.printtodolist()

  }
  printtodolist(){
    this.todoService.getTodoList('username').subscribe(
      response =>{
        console.log(response);
        this.Todos=response;
      },
      error=>{
        console.log(error.error.message);
      }
      
     );

  }
  deletetodo(id){
    this.todoService.deletetodomethod('user',id).subscribe(
      response =>{
        console.log(response);
        this.message=`Delete of id ${id} is successfull`;
        console.log(this.message);
        this.printtodolist();

      }
    );
  }
  updatetodo(id){

    this.router.navigate(['todo',id]);
    console.log(`id ${id} is updated`);
    
  }
  addtodo(){
    this.router.navigate(['todo',-1]); 
  }


}
