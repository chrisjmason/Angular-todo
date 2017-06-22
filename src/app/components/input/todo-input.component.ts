import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})

export class InputComponent {
  todoTask: string;

  @Output()
  newTodoEvent: EventEmitter<string> = new EventEmitter<string>();

  addTodo() {
    this.newTodoEvent.emit(this.todoTask);
    this.todoTask = '';
  }
}
