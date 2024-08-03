import todos from "./todo";
class project {
  constructor(title, dueDate, todo, ) {
    this.dueDate = dueDate;
    this.title = title;
    this.todo = todo;
    
  }
  writeProjectName(name) {
    this.title = name;
  }
  clearProjectName(name = "") {
    this.title = name;
  }
  selectDate(date) {
    this.dueDate = date;
  }
  alarmingDate(alarm = "date passed") {
    this.dueDate = alarm;
  }
  addTodoToProject(a) {
    this.todo = new todos(a);
  }
  removeTodoFromProject() {
    this.todo = null;
  }
}

export const projectList = {
  list: []
}
export default project;