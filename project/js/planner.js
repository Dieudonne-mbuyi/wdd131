const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskPriority = document.getElementById("taskPriority");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div>
                <strong>${task.name}</strong><br>
                Due: ${task.date}<br>
                Priority: ${task.priority}
            </div>
        `;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("btn");

        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = {
        name: taskInput.value.trim(),
        date: taskDate.value,
        priority: taskPriority.value
    };

    if (newTask.name !== "" && newTask.date !== "" && newTask.priority !== "") {
        tasks.push(newTask);
        saveTasks();
        displayTasks();
        taskForm.reset();
    }
});

displayTasks();