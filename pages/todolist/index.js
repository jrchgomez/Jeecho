function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(taskText));
    ul.appendChild(li);
    taskInput.value = "";
    }
   }