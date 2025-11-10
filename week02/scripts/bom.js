const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#chapterlist");
const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.textContent = input.value;
deleteButton.textContent = "❌";
li.append(deleteButton);
list.append(li);

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        const li = document.createElelment("li");
        li.textContent = input.value;
        list.append(li);
    }
});

deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    input.value = "";
    input.focus();
});