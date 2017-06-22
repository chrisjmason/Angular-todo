export class Todo {
  task: string;
  id: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
