const inputElement = document.querySelector('.js-item-input');

inputElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    saveListContent();
    inputElement.value = '';
  }
});

const saveButtonElement = document.querySelector('.js-save-item-button');

saveButtonElement.addEventListener('click', () => {
  saveListContent();
  inputElement.value = '';
});

const clearButtonElement = document.querySelector('.js-clear-all-items-button');

clearButtonElement.addEventListener('click', () => {
  theListInVeiw.listContentHTML = '';
  showList();
});

const groceryListElement = document.querySelector('.js-ol-grocery-list');

//this is the main code to show the list content
let theListInVeiw = {};
let previousChosenListElement = document.querySelector('.js-title-list-2'); // temperary

changeList();

function changeList(num = 1) {
  editPanelOf();
  lists.forEach((list) => {
    if (list.listNum === num) {
      theListInVeiw = list;
      changeListCss(list.listNum);
    }
  });
  showList();
}

function showList() {
  groceryListElement.innerHTML = theListInVeiw.listContentHTML;

  document.querySelector('.js-list-title')
    .innerHTML = `${theListInVeiw.listName}`;

  saveToLocalStorage();
}

function saveListContent() {
  const itemContent = inputElement.value;
  const oldHTML = theListInVeiw.listContentHTML;
  const newHTML = `<li>${itemContent}</li>${oldHTML}`;
  theListInVeiw.listContentHTML = newHTML;
  showList();
}

// edit list, save new name


let theOldName = theListInVeiw.listName;
editPanelOf();

function editPanelOf() {
  const editPanelHTML = `
  <div>
    <h1 class="list-name js-list-title">${theListInVeiw.listName}</h1>
  </div>
  <button class="js-edit-list-button edit-list-button">Edit</button>
  <button class="new-list-button js-new-list-button new-list-button">New list</button>
  `;
  const editPanelElement = document.querySelector('.js-edit-list-panel');
  editPanelElement.innerHTML = editPanelHTML;

  const editButtonElement = document.querySelector('.js-edit-list-button');
  editButtonElement.addEventListener('click', () => {
    theOldName = theListInVeiw.listName;
    editPanelOn();
  });

  const newListButtonElement = document.querySelector('.js-new-list-button');
  newListButtonElement.addEventListener('click', () => {
    addNewListToMenu();
  });
}

function editPanelOn() {
  const editPanelHTML = `
  <div>
    <input type="text" class="js-new-name-input name-input" placeholder="Enter list Name">
  </div>
  <button class="js-save-new-name save-new-name">Save</button>
  <button class="js-delete-this-list delete-this-list">Delete</button>
  `;
  const editPanelElement = document.querySelector('.js-edit-list-panel');
  editPanelElement.innerHTML = editPanelHTML;

  const nameInputElement = document.querySelector('.js-new-name-input');

  nameInputElement.value = theOldName;

  const saveNameElement = document.querySelector('.js-save-new-name');
  saveNameElement.addEventListener('click', () => {
    theListInVeiw.listName = nameInputElement.value;
    saveToLocalStorage();
    showListsOnMenu();
    changeListCss(theListInVeiw.listNum);
    editPanelOf();
  });

  const deleteButtonElement = document.querySelector('.js-delete-this-list');
  deleteButtonElement.addEventListener('click', () => {
    editPanelOf();
    removeListFromLists(theListInVeiw.listNum);
  });
  // genrate the HTML for js-edit-list-panel
  // get the listinveiw.listname and put it in the input element
}