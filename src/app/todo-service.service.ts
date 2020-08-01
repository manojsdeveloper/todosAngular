import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private readonly baseURL = 'https://5f2417623b9d350016203ed8.mockapi.io';

  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseURL}/todos`);
  }

  create(title: string): Observable<Todo[]> {
    const datas = {
      title: `${title}`,
      completed: false
    };
    return this.http.post<Todo[]>(`${this.baseURL}/todos`, datas);
  }
}
