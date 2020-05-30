import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../service/data/todo-service.service';
import { Todo } from '../list/list.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
public id:number;
 todo:Todo;


  constructor(private todoservice:TodoServiceService,
              private route:ActivatedRoute,
              private roter:Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todo=new Todo(this.id,"",new Date(),false);
    if(this.todo.id!=-1){
    this.todoservice.retrivetodomethod('user',this.id).subscribe(
     data=>{
            this.todo=data;
            console.log(data);
           }
    );
          }
  
  }
  
  savetodo(){
    this.id=this.route.snapshot.params['id'];
    if(this.id===-1){
      this.todoservice.createdtodomethod('user',this.todo).subscribe(
        data=>{
          console.log(data);
          this.roter.navigate(['list']);
        }
      );
    }
    else
    {
    this.todoservice.updatetodomethod('user',this.id,this.todo).subscribe(
      data=>{
        console.log(data);
        this.roter.navigate(['list']);
      }
    );
  }
}

}
