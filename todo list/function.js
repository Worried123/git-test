import todos from "./todo";
import project from "./project"

function createTodos(title,description,checkList){
let todo = new todos(title,description,checkList)
return todo   
}
function CreateProject(title, dueDate,Todo){
 title = new project(title,dueDate,Todo)
return title
}
    export {createTodos,CreateProject}
