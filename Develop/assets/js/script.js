// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
// let tasksItem = JSON.parse(taskListArray);
// const taskEl = document.querySelector("#task-item");
let taskListArray = [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {}

// Todo: create a function to create a task card
function createTaskCard(task) {}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();
  const task = {
    id: generateTaskId(),
    title: $("#task").val(),
    description: $("#taskDescription").val(),
    dueDate: $("#datepicker").val(),
  };
  taskList.push(task);
  console.log(taskList, "Task List");
  localStorage.setItem("tasks", JSON.stringify(taskList));
  renderTaskList();
  $("#task").val(""), $("#taskDescription").val(""), $("#datepicker").val("");
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  //add event listener to saveBtn
  //the document is searching for the id of saveBtn

  //it is listening for the click
  $("#taskForm").on("submit", function (event) {
    event.preventDefault();
    console.log(taskList)
    console.log("Addtask");
  });

  // Date Picker
  // $(function () {
  $("#datepicker").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  // });
});



console.log ("JS loaded");