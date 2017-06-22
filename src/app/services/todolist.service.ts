import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable()
export class TodoService {
  counter: number = 0;
  todolist: Todo[] = [];

  getTodos(): Todo[] {
    return this.todolist;
  }

  addTodo(newTodoTask: string) {
    this.todolist.push(new Todo({
      task: newTodoTask,
      id: this.counter,
      done: false
    }));
    this.counter++;
  }

  deleteTodo(todoToDelete: Todo) {
    this.todolist = this.todolist.filter(todo => todo.id !== todoToDelete.id);
  }
}
