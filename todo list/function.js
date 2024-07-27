import todos from "./todo";
import project from "./project";
import ProjectList from "./projectList";

function createTodos(title, description, checkList) {
  let todo = new todos(title, description, checkList);
  return todo;
}
function CreateProject(title, dueDate, Todo) {
  title = new project(title, dueDate, Todo);
  return title;
}
function addToProjectList(projectName) {
  ProjectList.push(projectName);
  return ProjectList;
}
function removeFromProjectList(ProjectName) {
  ProjectList = ProjectList.filter((e) => {
    return e !== ProjectName;
  });
}
export { createTodos, CreateProject, addToProjectList, removeFromProjectList };
/* function removeFromProjectLust(ProjectName){
projectList.pop(projectName)
}*/
