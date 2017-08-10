import { MyAppPage } from './app.po';

describe('my-app App', () => {
  let page: MyAppPage;

  beforeEach(() => {
    page = new MyAppPage();
  });

  it('should display todo input', () => {
    page.navigateTo();
    expect(page.getToDoInput()).not.toBeNull();
  });

  it('should display todo list', () => {
    page.navigateTo();
    expect(page.getToDoList()).not.toBeNull();
  })
});
