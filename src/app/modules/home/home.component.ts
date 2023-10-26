import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models';
import { TaskService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasksItems: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasksList().subscribe({
      next: (taskList) => {
        this.tasksItems = taskList;
      },
      error: (error) => {
        // Acá iría un mensaje de aviso para el usuario
        // Como es una práctica en caso de producir un error lo mostraré por consola. Pero de implmentarse debe borrarse
        console.error(error);
      },
    });
  }

  updateTaskList(id: string) {
    this.taskService.updateTasksList(id).subscribe({
      next: (taskList) => {
        this.tasksItems = taskList;
      },
      error: (error) => {
        // Acá iría un mensaje de aviso para el usuario
        // Como es una práctica en caso de producir un error lo mostraré por consola. Pero de implmentarse debe borrarse
        console.error(error);
      },
    });
  }

  deleteTaskList(id: string) {
    this.taskService.deleteTaskList(id).subscribe({
      next: (taskList) => {
        this.tasksItems = taskList;
      },
      error: (error) => {
        // Acá iría un mensaje de aviso para el usuario
        // Como es una práctica en caso de producir un error lo mostraré por consola. Pero de implmentarse debe borrarse
        console.error(error);
      },
    });
  }
}
