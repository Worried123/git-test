import todos from "./todo";
import project from "./project";
import { projectList } from "./project"
function createTodos(title, description, checkList) {
  let todo = new todos(title, description, checkList);
  return todo;
}
function CreateProject(title, dueDate, Todo) {
  title = new project(title, dueDate, Todo);
  return title;
}
function addToProjectList(projectName) {
  projectList.list.push(projectName);
  return projectList;
}
function removeFromProjectList(ProjectName) {
projectList.list = projectList.list.filter(e =>{
  return e.title !== ProjectName
})
}
export { createTodos, CreateProject, addToProjectList, removeFromProjectList };
/* function removeFromProjectLust(ProjectName){
projectList.pop(projectName)
}*/
