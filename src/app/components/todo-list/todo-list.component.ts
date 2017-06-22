import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoList } from '../../models/todolist';
import { Todo } from '../../models/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  @Input()
  todoList: TodoList;

  @Output()
  deleteTodoEvent: EventEmitter<Todo> = new EventEmitter<Todo>();

  deleteTodo(todo: Todo) {
    this.deleteTodoEvent.emit(todo);
  }
}
