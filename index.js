const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

/**
 * Attach listeners
 */
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
    return;
  }
  //otherwise taskInput value is verified now so a new task element can be created
  const taskItem = document.createElement("li");
  populateNewTaskElement(taskItem);
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

  //remove the element
  taskItem.remove();

  //make focus back to taskInput
  taskInput.focus();
}
