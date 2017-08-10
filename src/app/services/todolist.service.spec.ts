import {TodoService} from './todolist.service';
import {Todo} from "../models/todo";

describe('todolist service', () => {

  let todoService = new TodoService();

  it('test the test', () => {
    expect(true).toBeTruthy();
  });

  describe('get function', () => {
    it('returns empty array when no items present', () => {
      let length = todoService.getTodos().length;
      expect(length).toBe(0);
    });

    it('returns array with one item when an item has been added', () => {
      todoService.addTodo('test');
      let length = todoService.getTodos().length;
      expect(length).toBe(1);
    })

    it('returns array with one item when an item has been added', () => {
      todoService.addTodo('test');

      let expectedTodo = new Todo({
        task: 'test',
        id: 0,
        done: false
      });

      let actualTodo = todoService.getTodos()[0];

      expect(actualTodo).toEqual(expectedTodo);
    })
  });

  describe('add function', () => {
    it('add function adds item correctly', () => {

    })
  })
});
