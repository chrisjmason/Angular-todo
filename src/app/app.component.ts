import { Component } from '@angular/core';
import { TodoService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {

  constructor(private todoService: TodoService){}

  get todolist() {
    return this.todoService.getTodos();
  }

  addTodo($event) {
    this.todoService.addTodo($event);
  }

  deleteTodo($event) {
    this.todoService.deleteTodo($event);
  }
}




