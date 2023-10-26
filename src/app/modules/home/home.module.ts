import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { LoaderComponent } from 'src/app/components';

@NgModule({
  declarations: [HomeComponent, TasksListComponent],
  imports: [CommonModule, HomeRoutingModule, LoaderComponent],
})
export class HomeModule {}
