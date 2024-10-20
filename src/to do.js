document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task_form");
    const taskInput = document.getElementById("task_input");
    const taskList = document.getElementById("task_list");

    // Function to create a new task item
    function createTask(taskContent) {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTaskCompletion);
        const label = document.createElement("label");
        label.textContent = taskContent;
        li.appendChild(checkbox);
        li.appendChild(label);
        taskList.appendChild(li);
    }

    // Function to handle adding a new task
    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskContent = taskInput.value.trim();
        if (taskContent !== "") {
            createTask(taskContent);
            taskInput.value = "";
        }
    });

    // Function to handle toggling task completion
    function toggleTaskCompletion(event) {
        const checkbox = event.target;
        const listItem = checkbox.parentNode;
        if (checkbox.checked) {
            listItem.classList.add("checked");
        } else {
            listItem.classList.remove("checked");
        }
    }

    // Initial setup to handle existing tasks
    const existingTasks = document.querySelectorAll("#task_list li input[type='checkbox']");
    existingTasks.forEach(function (checkbox) {
        checkbox.addEventListener("change", toggleTaskCompletion);
        if (checkbox.checked) {
            checkbox.parentNode.classList.add("checked");
        }
    });
});
function toggleMute() {
    var audio = document.getElementById("bgAudio"); // Get the audio element
    var icon = document.getElementById("musicIcon"); // Get the icon element
    
    if (audio.muted) {
      audio.muted = false; // Unmute the audio
      icon.classList.remove('muted'); // Remove line-through decoration
    } else {
      audio.muted = true; // Mute the audio
      icon.classList.add('muted'); // Add line-through decoration
    }
    }
