import project from "./project";
import todos from "./todo";
import projectList from "./projectList";
import {
  CreateProject,
  addToProjectList,
  removeFromProjectList,
} from "./function";
import { createTodos } from "./function";
let todo = createTodos("meaa", "and", "done");
let todo1 = createTodos("me", "and", "you");
let project1 = CreateProject("s", "s", todo);
let project2 = CreateProject("d", "d", todo1);
addToProjectList(project1);
addToProjectList(project2);
console.log(projectList);

console.log(projectList);
removeFromProjectList(project1);
