import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { CreateTaskDto, TaskList } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) {}

  GetTask(): Observable<Response<TaskList[]>> {
    return this.http.get<Response<TaskList[]>>(this.ApiUrl);
  }

  createTask(task: CreateTaskDto): Observable<TaskList> {
    return this.http.post<TaskList>(this.ApiUrl, task);
  }
}
