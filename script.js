let inpName = document.querySelector(".inpName");
let inpLastName = document.querySelector(".inpLastName");
let inpImg = document.querySelector(".inpImg");
let createBtn = document.querySelector(".createBtn");
let list = document.querySelector(".list");
let updName = document.querySelector(".updName");
let updLastName = document.querySelector(".updLastName");
let updImg = document.querySelector(".updImg");
let saveBtn = document.querySelector(".saveBtn");

render();
createBtn.addEventListener("click", () => {
  let obj = {
    name: inpName.value,
    lastName: inpLastName.value,
    image: inpImg.value,
  };
  let data = JSON.parse(localStorage.getItem("person")) || [];
  data.push(obj);
  localStorage.setItem("person", JSON.stringify(data));
  render();
});

function render() {
  let newData = JSON.parse(localStorage.getItem("person")) || [];
  list.innerHTML = "";
  newData.forEach((el, index) => {
    let block = document.createElement("div");
    let texts = document.createElement("div");
    let btns = document.createElement("div");
    let pName = document.createElement("p");
    let pLastName = document.createElement("p");
    let cardImg = document.createElement("img");
    let delBtn = document.createElement("button");
    let editBtn = document.createElement("button");

    block.classList.add('block')
    pName.classList.add('pName')
    pLastName.classList.add('pLastName')
    cardImg.classList.add('cardImg')
    texts.classList.add('texts')
    btns.classList.add('btns')
    delBtn.classList.add('delBtn')
    editBtn.classList.add('editBtn')

    pName.innerText = `name:${el.name }`;
    pLastName.innerText = `name:${el.lastName }`;
    cardImg.src = el.image;
    delBtn.innerText = "delete";
    editBtn.innerText = "edit";

    list.append(block);
    block.append(cardImg);
    block.append(texts);
    block.append(btns);
    texts.append(pName);
    texts.append(pLastName);
    btns.append(delBtn);
    btns.append(editBtn);

    delBtn.addEventListener("click", () => {
      delFunc(index);
    });
    editBtn.addEventListener("click", () => {
      editFunc(index);
    });
  });
}

function delFunc(index) {
  let data = JSON.parse(localStorage.getItem("person")) || [];
  data.splice(index, 1);
  localStorage.setItem("person", JSON.stringify(data));
  render();
}

function editFunc(index) {
  let data = JSON.parse(localStorage.getItem("person")) || [];

  updName.setAttribute("id", index);
  updName.setAttribute("id", index);
  updName.setAttribute("id", index);

  updName.value = data[index].name;
  updLastName.value = data[index].lastName;
  updImg.value = data[index].image;
}

saveBtn.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("person")) || [];

  let nameId = updName.id;
  let lastNameId = updLastName.id;
  let imgId = updImg.id;

  let newObj = {
    name: updName.value,
    lastName: updLastName.value,
    image: updImg.value,
  };

  data.splice(nameId,1,newObj)
  data.splice(lastNameId,1,newObj)
  data.splice(imgId,1,newObj)
  localStorage.setItem("person", JSON.stringify(data));
  render()
});
