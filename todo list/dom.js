import { compareAsc, format } from "date-fns";
import {
  CreateProject,
  addToProjectList,
  removeFromProjectList,
  createTodos,
} from "./function";

import project, { projectList } from "./project";
import todos from "./todo";
projectList;
let projectListMenu = document.querySelector(".projectList");
let addButton = document.querySelector(".add");
let todo_main = document.querySelector(".todo");
function CreatePopUP() {
  addButton.addEventListener("click", (e) => {
    let todopage = document.createElement("div");
    todopage.setAttribute("class", "todoPage");
    todo_main.append(todopage);
    let todoTitle = document.createElement("input");
    let checkList = document.createElement("input");
    let todDescription = document.createElement("input");
    let projectName = document.createElement("input");
    let dueDate = document.createElement("input");
    let submitButton = document.createElement("button");
    todoTitle.setAttribute("class", "todoTitle");
    todDescription.className = "todoDescription";
    projectName.className = "projectName";
    dueDate.className = "dueDate";
    submitButton.textContent = 'submit'
    checkList.className = "checkList";
    checkList.value = "undone";
    submitButton.classList.add("submitButton");
    dueDate.setAttribute("type", "datetime-local");
    checkList.setAttribute("type", "button");
    
    todopage.append(
      projectName,
      todoTitle,
      todDescription,
      dueDate,
      submitButton
    );
    submit();

    function submit() {
      submitButton.addEventListener("click", (e) => {
        todo_main.textContent = "";
        addToProjectList(
          CreateProject(
            projectName.value,
            dueDate.value,
            createTodos(todoTitle.value, todDescription.value, checkList.value)
          )
        );
        console.log(projectList);

        let inputTitleTodo = document.createElement("input");
        let inputTodoDescription = document.createElement("input");
        let inputprojectName = document.createElement("input");
        let inputTodoCheckList = document.createElement("button");
        let inputTodoDueDate = document.createElement("input");
        let inputRemoveButton = document.createElement("button");
        let projectBox = document.createElement("div");
        inputTitleTodo.classList.add("todoMainTitle");
        projectBox.classList.add("projectBox");
        inputTodoDescription.classList.add("todoMainDescription");
        inputTodoDueDate.classList.add("ProjectListDueDate");
        inputTodoCheckList.classList.add("todoListCheckList");
        inputprojectName.classList.add("ProjectListProjectName");
        let removeNum = -1;
        ++removeNum;
        inputRemoveButton.classList.add("removeButton");
        inputTodoCheckList.setAttribute("type", "button");
        inputTodoDueDate.setAttribute("type", "datetime-local");
        inputTitleTodo.value = todoTitle.value;
        inputTodoCheckList.textContent = checkList.value;
        inputprojectName.value = projectName.value;
        inputTodoDueDate.value = dueDate.value;
        inputTodoDescription.value = todDescription.value;
        let firstIndex = projectIndex()
        console.log(firstIndex);
        function editText() {
          inputTitleTodo.addEventListener("keyup", (e) => {
           console.log(projectIndex());

            projectList.list[projectIndex()].todo.title = inputTitleTodo.value;
            console.log(projectList.list);
          });
          inputTodoDescription.addEventListener("keyup", (e) => {
          
            projectList.list[projectIndex()].todo.description =
              inputTodoDescription.value;
            console.log(projectList.list);
          });

          inputTodoCheckList.addEventListener("click", (e) => {
            
            inputTodoCheckList.textContent = "done";
            
            projectList.list[projectIndex()].todo.checkList =
              inputTodoCheckList.textContent;
        
            });
        }

        todo_main.append(
          inputTitleTodo,          
          inputTodoDescription,
          inputTodoCheckList,
          inputRemoveButton
        );
        function changeProject() {
          inputprojectName.addEventListener("click", (e) => {
            
            inputprojectName.addEventListener("keyup", (e) => {
              projectList.list[index].title = inputprojectName.value;
            });
            todo_main.textContent = "";
            todo_main.append(
              inputTitleTodo,
              inputTodoDescription,
              inputTodoCheckList,
              inputRemoveButton
            );
            removeProjectFromDom(projectIndex())
            console.log(projectIndex());
            console.log(projectList.list);
          
            inputTitleTodo.value = projectList.list[projectIndex()].todo.title;

            inputTodoDescription.value =
              projectList.list[projectIndex()].todo.description;
            inputTodoCheckList.textContent =
              projectList.list[projectIndex()].todo.checkList;
          });
        }
        function projectIndex(projectName) {
        let   index = projectList.list.findIndex(e =>{
       return e.title === inputprojectName.value
        })
        return index
        }
        function deleteProject(index) {
if (index === projectIndex()) {
projectList.list.splice(index)  
}else if(index === firstIndex){
projectList.list.splice(index)
}
        }
      function removeProjectFromDom(index){
inputRemoveButton.addEventListener('click', event =>{
if (projectIndex === firstIndex) {
  deleteProject(firstIndex)
  projectBox.remove()
  todo_main.textContent = ''
}else if (index === projectIndex()){
deleteProject(index)
projectBox.remove()
todo_main.textContent = ''
}
  
})}

       removeProjectFromDom()
        projectBox.append(inputprojectName, inputTodoDueDate);
        projectListMenu.append(projectBox);
        inputprojectName.click();
        editText();
        changeProject();
        deleteProject();
        todopage.remove();
      });
    }
  });
}

export { CreatePopUP };
// function projectIndex() {
//   function projectIndex() {
//     // do whatever you need to do here. No event handlers
//   }

//   function deleteProject() {
//     // just deletes projects, nothing else. No event handlers
//     // I'd also avoid changing the DOM here like by setting `element.textContent`
//   }

//   inputRemoveButton.addEventHandler("click", () => {
//     deleteProject()
//     // now you can do other DOM related functions here like
//     todo_main.textContent = ""
//   })
//   inputprojectName.addEventHandler("click", someOtherFunctionMaybe)
//   now deleteProject can call projectIndex() and it works fine and won't add a new event handler every single time you call it
//   this is called separation of concerns. The part of your code that goes out and reaches into the DOM and changes things for the user should be separate from the logic that makes things actually work.
// Otherwise you run into this issue where you want to run logic but end up adding and removing random things from the DOM without intending to
//   a projectIndex should just give you the index of a project. Why would it also add an event handler to the DOM? It doesn't make sense if you just step back for 5 seconds and look at what it does.
// Don't be afraid of creating new functions to do new stuff instead of putting more functionality into existing functions
