function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(listItem);

    input.value = "";
}