const inp = document.querySelector("input");
const btn = document.querySelector("#Add");
const todobox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
    const value = inp.value;

    if (value.trim() === "") return;

    // Todo Container
    const todo = document.createElement("div");
    todo.classList.add("todo");

    // Heading
    const heading = document.createElement("h3");

    // Task Text
    const taskText = document.createElement("span");
    taskText.innerText = value;

    // Check Icon
    const check = document.createElement("span");
    check.classList.add("check");

    heading.append(taskText, check);

    // Button Box
    const btnBox = document.createElement("div");
    btnBox.classList.add("actions");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.classList.add("btn", "edit");
    editBtn.textContent = "EDIT";

    editBtn.addEventListener("click", () => {
        const newValue = prompt("Edit your task:", taskText.innerText);

        if (newValue === null || newValue.trim() === "") return;

        taskText.innerText = newValue;
    });

    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.classList.add("btn", "del");
    delBtn.textContent = "DELETE";

    delBtn.addEventListener("click", () => {
        todo.remove();
    });

    // Add buttons
    btnBox.append(editBtn, delBtn);

    // Add heading and buttons
    todo.append(heading, btnBox);

    // Show todo
    todobox.appendChild(todo);

    // Clear input
    inp.value = "";
});