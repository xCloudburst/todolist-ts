let todoButton = document.getElementById("todoButton");

function addToDo() {
  createLineItem();
  console.log("line item added");
}

function createLineItem() {
  if (document.getElementById("todoText").value === "") {
  } else {
    let listContainer = document.createElement("div"),
      clearButton = document.createElement("button"),
      listItem = document.createElement("p");
    clearButton.className = "clearButton";
    clearButton.textContent = "I/O";
    listItem.className = "incompleteItem";
    document.getElementById("containerMain").appendChild(listContainer);
    listContainer.appendChild(clearButton);
    listContainer.appendChild(listItem);
    listContent = document.createTextNode(
      document.getElementById("todoText").value //gets value from text box
    );
    listItem.appendChild(listContent); //appends value from text box into <p>
    document.getElementById("todoText").value = ""; //clears text box
    clearButton.addEventListener("click", function () {
      listItem.classList.toggle("completeItem");
      listItem.classList.toggle("incompleteItem");
    }); //toggles class of item
  }
}

todoText.addEventListener("keyup", function (textBox) {
  textBox.preventDefault();
  if (textBox.keyCode === 13) {
    addToDo();
  }
});

todoButton.addEventListener("click", function () {
  addToDo();
});
