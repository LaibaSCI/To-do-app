function addTask() {
    const input = document.getElementById("todo-input");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Click to mark complete
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  
    // Right-click to delete
    li.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      li.remove();
    });
  
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
  