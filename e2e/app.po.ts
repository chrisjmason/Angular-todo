import { browser, by, element } from 'protractor';

export class MyAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getToDoInput() {
    return element(by.css('todo-input'));
  }

  getToDoList() {
    return element(by.css('todo-list'));
  }
}
