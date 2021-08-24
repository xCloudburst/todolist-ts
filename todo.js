let button = document.querySelector(".button"),
  list = "",
  newDiv = "",
  newContent = "",
  newButton = "",
  counter = 0,
  i = -1;

todoText.addEventListener("keyup", function (textBox) {
  textBox.preventDefault();
  if (textBox.keyCode === 13) {
    createLineItem();
  }
});

function createLineItem() {
  if (document.getElementById("todoText").value === "") {
  } else {
    newDiv = document.createElement("div");
    newButton = document.createElement("button");
    newContent = document.createTextNode(
      document.getElementById("todoText").value
    );
    newDiv.appendChild(newContent);
    list = document.getElementById(item);
    document.body.insertBefore(newDiv, list);
    document.body.insertBefore(newButton, list);
    document.getElementById("todoText").value = "";
  }
}

function bgChange(color) {
  document.body.style.background = color;
}
