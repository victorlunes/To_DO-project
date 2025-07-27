import { Component } from '@angular/core';
import { TaskList } from 'src/app/core/models/Task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private serviceTask: TaskService) { }

  tasks: TaskList[] = [];
  taskGeneral: TaskList[] = [];

  ngOnInit(): void {
    this.serviceTask.GetTask().subscribe((response) => {
      this.tasks = response.data;
      this.taskGeneral = response.data;
    });
  }
}
