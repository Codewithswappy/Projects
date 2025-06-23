const btn = document.querySelector("#button");
const todoList = document.querySelector("#todo_list");

function addTodo() {
    const li = document.createElement("li");
    const inputValue = document.querySelector(".input").value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    if (inputValue === "") {
        alert("Please enter a task");
        console.log(inputValue);
    } else {
        todoList.appendChild(li);
    }
    document.querySelector(".input").value = "";
}

btn.addEventListener("click", addTodo)