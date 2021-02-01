import { componentFactoryName } from '@angular/compiler';
import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './tictactoe/board/board.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import {LaunchListComponent} from './launch-list/launch-list.component';
import {LaunchDetailsComponent} from './launch-details/launch-details.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: "todo-list",
    component: TodoListComponent
  },
  {
    path: "contact",
    component: ContactsComponent
  }
  ,
  {
    path: "board",
    component: BoardComponent
  },
  {
    path: 'spacex',
    component: LaunchListComponent
  },
  {
    path: ':id',
    component: LaunchDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
