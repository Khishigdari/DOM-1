const listData = [];
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

    const deleteButton = document.createElement("button");
    // const div = document.createElement("div");
    // div.classList.add("deleteContainer");
    deleteButton.innerText = "x";

    deleteButton.addEventListener("click", () => {
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      listData = newListData;
      render();
    });
    li.innerText = element;
    // ul.appendChild(div);
    ul.appendChild(li);
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {});
  });
};

function printInputValue(value) {
  listData.push(value);
}

button.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});

// div.appendChild(ul);
// div.appendChild(deleteButton);
body.appendChild(input);
body.appendChild(button);
// body.appendChild(div);
