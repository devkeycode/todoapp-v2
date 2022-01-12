const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const completedTaskList = document.getElementById("task-list--completed");
const backdrop = document.getElementById("backdrop");
const messageBox = document.getElementById("message-box");
const messageBoxCloseBtn = document.getElementById("message-box-close-btn");

/**
 * Attach listeners
 */

backdrop.addEventListener("click", showMainApp);
messageBoxCloseBtn.addEventListener("click", showMainApp);
// addTaskBtn.onclick = runAddTaskHandler; //other way
addTaskBtn.addEventListener("click", runAddTaskHandler);
document.addEventListener("keypress", (e) => {
  // comparing if event code is equal to Enter key or not
  if (e.code !== "Enter") return;
  runAddTaskHandler();
});

/**
 * Attach functionality
 */
function runAddTaskHandler() {
  //check whether taskInput really contains some taskText or not
  if (taskInput.value === "") {
    alert(
      "Please assign some task! A task with no target in mind is like an empty flask."
    );
    //make focus back to taskInput
    taskInput.focus();
    return;
  }
  //otherwise taskInput value is verified now so a new task element can be created
  const taskItem = document.createElement("li");
  //populate and display new todo over the tasklist
  populateNewTaskElement(taskItem);
  //reset input text after new todo get displayed in the list
  resetTaskInput();
}

function populateNewTaskElement(taskItem) {
  //create a label element
  const label = document.createElement("label");
  label.innerText = taskInput.value;

  //create a button element
  const button = document.createElement("button");
  button.innerText = "Mark As Done";
  button.addEventListener("click", runTaskDoneHandler);

  //append both as a child to taskItem li element
  taskItem.appendChild(label);
  taskItem.appendChild(button);

  //add a class to new taskItem li element
  taskItem.classList.add("task-todo");

  //append new taskItem li element as a child to taskList ol element
  taskList.appendChild(taskItem);
}

function resetTaskInput() {
  taskInput.value = "";
  taskInput.focus();
  return;
}

function runTaskDoneHandler(e) {
  //get parent node from e.target
  const taskItem = e.target.parentNode;

  // a new function added, so to copy the content from this taskinline todo list to completed todo list
  moveTaskToCompletedTodo(taskItem);

  //remove the element
  taskItem.remove();

  //make focus back to taskInput
  taskInput.focus();
}

function moveTaskToCompletedTodo(taskItem) {
  const clonedTaskItem = taskItem.cloneNode(true);
  clonedTaskItem.classList.add("task-todo--completed");
  // console.log(clonedTaskItem.childNodes); //return the nodelist array [nodelist]
  // console.log(clonedTaskItem.childNodes[1].innerText === "✔");

  //access the button and set its text to tick
  const button = clonedTaskItem.childNodes[1];
  button.innerHTML = "&#x2714"; //html entity for tick

  /* no need to remove eventlistener since clonenode doesnt copy eventliteners
  // button.removeEventListener("click", () => {
  //   return;
  // });

  // button.disabled = true;
  // button.setAttribute(disabled);

  // console.log(clonedTaskItem.childNodes[1]);
  */

  //now append clonedTaskItem to completedTaskList
  completedTaskList.appendChild(clonedTaskItem);
}

function showMainApp() {
  backdrop.remove();
  messageBox.remove();
}
