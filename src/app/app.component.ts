import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoList$: Observable<Todo[]>;

  constructor(private todoService: TodoServiceService) {
    this.todoList$ = this.todoService.getTodo();
  }

  public getTodos(): void {
    this.todoList$ = this.todoService.getTodo();
  }

  // tslint:disable-next-line: typedef
  public addTodos(data) {
    this.todoService.create(data).subscribe(res => {
      console.log(res);
      this.getTodos();
    });
  }
}
