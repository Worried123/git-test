import project from "./project";
import todos from "./todo";
import projectList from "./projectList";
import { addTOProjectList, CreateProject, removeProject } from "./function";
import { createTodos } from "./function";
let projects = new projectList()
let  todo =createTodos('meaa','and','done')
let project1 = CreateProject('a','s',todo)
projects.addProject(project1)
console.log(projects);
projects.removeProject(project1)
console.log(projects);