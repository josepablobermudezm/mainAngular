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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [AppComponent, DashboardComponent, ContactsComponent, TodoListComponent, SquareComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule.forRoot(), FormsModule, FontAwesomeModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
