import { Component } from '@angular/core';
import { TodoServiceService } from './todo-service.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private todoService: TodoServiceService) {
  }

  // tslint:disable-next-line: typedef
  public addTodos(data) {
    this.todoService.create(data).subscribe(res => {
      console.log(res);
    });
  }
}
