# todoapp-v1

Todo App -Basic Structure

Requirements: Create Sample Tree structure of given TODO App

TODO App is an app where user can input any task that the user want to get done AND list of todo tasks will be displayed on the screen.
Spliting it into 2 sections- task-input-section and tasks-display-section
task-input-section for getting task as an input
task-display section for displaying task list

Learning out of this project
//experience DOM document object model
//experience css counter() and counter-increment and counter-reset
//experience how to apply postion fixed and how to change position of element
//experience appendChild(),element.parentNode,createElement(),querySelector(),getElementById(),element.addEventListener method and properties of DOM

//working

//learned css counter property
// counter-reset:my-counter 1;
//counter();-->content: counter(my-counter)
// counter-increment: my-counter 5;
//countername counterincrementby

Select reference of task-input so that when user enters text in it , can capture that text
Select reference of add-task-btn, so when user cliks on it, we can capture that event and add task to the tasklist
Select refernce of task-list orderedlist , so new task can be added in this list
//A new task have 2 components- one is task and one is button-Mark as done and once user click on Mark as done, remove that task from dom
