function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const newTask = document.createElement("li");
    newTask.innerHTML = `<i class="far fa-circle"></i> ${taskText}
      <button class="button is-small is-info" onclick="editTask(this.parentElement)">Edit</button>
      <button class="button is-small is-success" onclick="completeTask(this.parentElement)">Complete</button>
      <button class="button is-small is-danger" onclick="deleteTask(this.parentElement)">Delete</button>`;
    document.getElementById("pending-tasks").appendChild(newTask);
    taskInput.value = "";
  }

  function editTask(task) {
    const newText = prompt("Edit task:", task.textContent);
    if (newText !== null) {
      task.innerHTML = `<i class="far fa-circle"></i> ${newText}
        <button class="button is-small is-info" onclick="editTask(this.parentElement)">Edit</button>
        <button class="button is-small is-success" onclick="completeTask(this.parentElement)">Complete</button>
        <button class="button is-small is-danger" onclick="deleteTask(this.parentElement)">Delete</button>`;
    }
  }

  function completeTask(task) {
    const completedTasks = document.getElementById("completed-tasks");
    task.classList.add("completed");
    task.innerHTML = `<i class="far fa-check-circle"></i> ${task.textContent.substr(2)}`;
    completedTasks.appendChild(task);
  }

  function deleteTask(task) {
    task.remove();
  }