// 1. Get the elements from the page (DOM selection)
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

// 2. Function to ADD a task
function addTask() {
  const taskText = taskInput.value.trim();

  // Do nothing if the input is empty
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item and its parts (DOM creation)
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  // 3. MARK AS COMPLETED: clicking the text toggles the "completed" class
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
    updateCounter();
  });

  // 4. DELETE: clicking the button removes this task from the page
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateCounter();
  });

  // Put the text and button inside the list item, then add it to the list
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear the input box and focus it again
  taskInput.value = "";
  taskInput.focus();

  updateCounter();
}

// 5. Show how many tasks are pending
function updateCounter() {
  const total = taskList.children.length;
  const done = taskList.querySelectorAll("li.completed").length;
  counter.textContent = total + " tasks, " + done + " completed";
}

// 6. Events: click the Add button, or press Enter in the input box
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
