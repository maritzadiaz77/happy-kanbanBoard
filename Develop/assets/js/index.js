function handleAddTask(event) {
  event.preventDefault();
  console.log("add task")
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
$("#taskForm").on("submit",handleAddTask)


console.log("JS")


$("#saveTask").on("click",function(){
    console.log("event list")
})