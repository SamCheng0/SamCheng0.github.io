
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        var taskList = document.getElementById("taskList");
        var newTask = document.createElement("li");
        newTask.innerHTML = `<input type="checkbox" onclick="toggleTaskCompletion(this)">
                             <span onclick="toggleTask(this)">${taskValue}</span> 
                             <input type="date" onchange="updateDueDate(this)">
                             <input type="color" onchange="changeTaskColor(this)"> 
                             <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}


// Function to toggle task completion
function toggleTask(task) {
    task.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(task) {
    task.parentNode.remove();
}

// Function to update the due date of a task
function updateDueDate(input) {
    var taskText = input.previousElementSibling.previousElementSibling;
    taskText.innerHTML += `<br><small>Due Date: ${input.value}</small>`;
}

// Function to toggle task completion with associated due date
function toggleTaskCompletion(checkbox) {
    var taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
        playCompletionSound();
    } else {
        taskText.classList.remove("completed");
        var dueDate = taskText.querySelector("small");
        if (dueDate) {
            dueDate.remove();
        }
    }
}
// give sound feedback
function playCompletionSound() {
    var audio = new Audio('audio/mission_complete.mp3');
    audio.play();
}
function changeTaskColor(input) {
    var taskText = input.nextElementSibling;
    var color = input.value;
    taskText.style.backgroundColor = color;
}
