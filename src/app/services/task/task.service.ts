import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TASKS } from 'src/app/data';
import { Task } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = TASKS;

  getTasksList(): Observable<Task[]> {
    return new Observable<Task[]>((observer) => {
      setTimeout(() => {
        observer.next(this.tasks);
        observer.complete();
      }, 1000);
    });
  }

  updateTasksList(id: string): Observable<Task[]> {
    const newTasksList = structuredClone(this.tasks);

    const indTask = newTasksList.findIndex((task) => task.id === id);
    const infoTask = newTasksList[indTask];
    const isCompleted = !newTasksList[indTask].isCompleted;

    newTasksList[indTask] = {
      ...infoTask,
      isCompleted,
    };

    // Almacena la lista de tareas actualizada
    this.tasks = newTasksList;

    return new Observable<Task[]>((observer) => {
      setTimeout(() => {
        observer.next(newTasksList);
        observer.complete();
      }, 100);
    });
  }

  deleteTaskList(id: string): Observable<Task[]> {
    const newTaskList = structuredClone(this.tasks).filter(
      (task) => task.id !== id
    );

    // Almacena la lista de tareas actualizada
    this.tasks = newTaskList;

    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(newTaskList);
        observer.complete();
      }, 100);
    });
  }
}
