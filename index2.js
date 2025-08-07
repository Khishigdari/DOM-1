let listData = [];
const ul = document.querySelector("ul");
const body = document.querySelector("body");
const input = document.createElement("input");
const button = document.createElement("button");

button.classList.add("btn");
input.classList.add("input");

ul.classList.add("ulClass");

button.innerText = "click here";

const render = () => {
  ul.innerHTML = "";
  listData.map((element, index) => {
    const li = document.createElement("li");

    // const icon = document.createElement("i"); // ======
    // icon.classList.add("editIcon"); // ======

    const iconButton = document.createElement("button"); // ======
    iconButton.classList.add("iconButton"); // ======
    const span = document.createElement("span"); // ======
    span.innerText = "edit"; // ======
    span.classList.add("material-symbols-outlined"); // ======

    const deleteButton = document.createElement("button");
    // const div = document.createElement("div");
    // div.classList.add("deleteContainer");
    deleteButton.innerText = "x";
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener("click", () => {
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData; // <=====
      render();
    });

    li.innerText = element;
    // ul.appendChild(div);
    iconButton.appendChild(span); // ======
    li.appendChild(iconButton); // ======
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
};

function printInputValue(value) {
  if (input.value == "") {
    // alert("input empty");
    // const name = prompt("hello", );
    // console.log(name)
    return null;
  }
  listData.push(value);
  input.value = "";
  // const li = document.createElement("li");
  // li.innerText = value;
  // ul.appendChild(li);
  // li.addEventListener("click", () => {
  //   li.remove();
  // });
}

button.addEventListener("click", () => {
  // if (input.value.length === 0) {
  //   deleteButton.disabled = true;
  // } // ======
  printInputValue(input.value);
  render();
  // input.value = ""; // ======
});

// div.appendChild(ul);
// div.appendChild(deleteButton);
body.appendChild(input);
body.appendChild(button);
// body.appendChild(div);
