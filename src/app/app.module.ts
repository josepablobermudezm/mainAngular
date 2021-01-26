import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { SquareComponent } from './tictactoe/square/square.component';
import { BoardComponent } from './tictactoe/board/board.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'

@NgModule({
  declarations: [AppComponent, DashboardComponent, ContactsComponent, TodoListComponent, SquareComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule.forRoot(), FormsModule, FontAwesomeModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
