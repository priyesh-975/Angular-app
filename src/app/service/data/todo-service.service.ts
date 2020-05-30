import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list/list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http:HttpClient) { }


getTodoList(username):Observable<Todo[]>
{
  return this.http.get<Todo[]>(`http://localhost:8080/user/${username}/todos`);
}

deletetodomethod(username,id){
  return this.http.delete(`http://localhost:8080/user/${username}/todos/${id}`);
}
retrivetodomethod(username,id){
  return this.http.get<Todo>(`http://localhost:8080/user/${username}/todos/${id}`);
}

updatetodomethod(username,id,Todo){
  return this.http.put(`http://localhost:8080/user/${username}/todos/${id}`,Todo);
}
createdtodomethod(username,Todo){
  return this.http.post(`http://localhost:8080/user/${username}/todos`,Todo);
}

}
