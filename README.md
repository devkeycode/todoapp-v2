# todoapp-v2

Todo App -Basic Structure & advanced completed task list added

Requirements: Create a new TODO App which will have an input field to add tasks.
We will have 2 different lists - “To be Done” and “Completed” List
When user enter task in the input field, it should be added to “To Be Done” list
When a user clicks on the “Mark as Done” button on a task present in the “To Be Done” list,
it should get added to the “Completed” list and removed from the “To Be Done” list.
TODO App is an app where user can input any task that the user want to get done AND list of todo tasks will be displayed on the screen.
spliting it into 2 sections- task-input-section and tasks-display-section

TODO App is an app where user can input any task that the user want to get done AND list of todo tasks will be displayed on the screen.
Spliting it into 2 sections- task-input-section and tasks-display-section
task-input-section for getting task as an input
task-display section for displaying task list

Learning out of this project **\*\*\***
//experience DOM document object model
//experience css counter() and counter-increment and counter-reset
//experience how to apply postion fixed and how to change position of element
//experience appendChild(),element.parentNode,createElement(),querySelector(),getElementById(),cloneNode(),element.addEventListener method and properties of DOM

//i used to move todotask to todotaskcompleted ,but after i remove that from dom, that todo in todotaskcompleted is also got removed.means it is same nodeelement i am referencing to
//so to avoid this i used to make a clone
//how to use element.cloneNode(booleanvlaue denotes whether to clone child ele or not)

//how to get childNodes and parentNode reference from an element

//i get to know that cloneNode doesnot copy attached event liteners since i have doubt that when i use button of task-todo where i attached a click litener to remove that element ..will whne i click on cloned node button ,will that delete function also work or not..so in this case it will not work.

//cloneNode() does not copy event listeners. In fact, there's no way of getting hold of event listeners via the DOM once they've been attached, so your options are: Add all the event listeners manually to your cloned node

//working**\*\*\*\***

Select reference of task-input so that when user enters text in it , can capture that text
Select reference of add-task-btn, so when user cliks on it, we can capture that event and add task to the tasklist
Select refernce of task-list orderedlist , so new task can be added in this list
//A new task have 2 components- one is task and one is button-Mark as done and once user click on Mark as done, remove that task from dom
//keep the functionality of old todo structure -v1 todo app and just before removing the task from just append that task to the task-list--completed
