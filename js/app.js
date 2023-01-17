let todoList = document.querySelector("#toDo__list");

let inputText = document.querySelector("input");
let btnAdd = document.querySelector("#btnAdd");

console.log(todoList);
console.log(inputText);
console.log(btnAdd);

var arrText = [];

function showToDo() {
  todoList.innerHTML = "";

  arrText.forEach((element, index) => {
    let todoElement = document.createElement("li");
    let textElement = document.createTextNode(element);

    todoElement.appendChild(textElement);
    todoList.appendChild(todoElement);

    let btnDelete = document.createElement("button");
    let btnDeleteText = document.createTextNode("Delete");
    btnDelete.setAttribute("id", "btnDel");
    btnDelete.setAttribute("onclick", "delItem(" + index + ")");
    let btnDel = btnDelete.appendChild(btnDeleteText);

    todoElement.appendChild(btnDelete);
  });
}

btnAdd.addEventListener("click", addItem);

inputText.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    addItem();
    console.log("clicou");
  }
});

function addItem() {
  let itemText = inputText.value;
  arrText.push(itemText);
  showToDo();
  inputText.value = "";
}

function delItem(i) {
  arrText.splice(i, 1);
  showToDo();
  console.log(arrText);
}
