import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[]; //array de Todos
  inputTodo: string = '';
  completado: boolean = true;
  ID: number = -1;
  edit: boolean = false;

  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
        /*le damos la vuelta a la variable y en el HTML cuando NO es completo
        automáticamente le cambia el estilo de css y ahí se ve tachado*/
      }
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id); //retornamos todo lo que sea diferente al ID que estamos pasando
  }

  editTodo(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        this.inputTodo = v.content;
        this.ID = id;
        this.edit = true;
      }
      return v;
    });
  }

  addTodo() {
    if (!this.edit) {
      //agregamos normalmente
      this.todos.push({
        content: this.inputTodo,
        completed: false,
      });
    } else {
      //editamos
      this.todos.map((v, i) => {
        if (i == this.ID) {
          v.content = this.inputTodo;
          this.ID = -1;
          this.edit = false;
        }
        return v;
      });
    }
    this.inputTodo = '';//limpiamos input
  }

  completar_Incompletar() {
    this.todos.map((v) => {
      if (this.completado) {
        v.completed ? (v.completed = !v.completed) : v.completed;
      } else {
        !v.completed ? (v.completed = !v.completed) : v.completed;
      }
      return v;
    });
    this.completado = !this.completado;
  }

  eliminarCompletos() {
    this.todos = this.todos.filter((v) => !v.completed); //Retornamos todos los que sean completados
  }
}
