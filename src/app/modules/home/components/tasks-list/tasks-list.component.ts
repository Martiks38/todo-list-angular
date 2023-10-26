import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input() tasksList: Task[] = [];
  @Output() updateTaskEvent = new EventEmitter<string>();
  @Output() deleteTaskEvent = new EventEmitter<string>();

  updateTask(event: Event, id: string) {
    event.stopPropagation();

    this.updateTaskEvent.emit(id);
  }

  deleteTask(event: Event, id: string) {
    event.stopPropagation();

    this.deleteTaskEvent.emit(id);
  }
}
