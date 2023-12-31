const listMenuElement = document.querySelector('.js-list-menu');

showListsOnMenu();

function showListsOnMenu() {
  let listMenuHTML = ``;
  lists.forEach((list) => {
    const number = list.listNum;
    const name = list.listName;
    listMenuHTML += `
    <div class="each-list-title js-title-list-${number}">
    <a>${name}</a>
    <button class="delete-list-button js-delete-list-button" data-list-number="${number}">X</button>
    </div>`;
  });
  listMenuElement.innerHTML = listMenuHTML;

  document.querySelectorAll('.js-list-menu div')
  .forEach((singleList, index) =>{
    singleList.addEventListener('click', () => {
      changeList(index + 1);
    });
  });

  //code for the delete button 
  document.querySelectorAll('.js-delete-list-button')
  .forEach((deleteButton) => {
    const number = deleteButton.dataset.listNumber;
    deleteButton.addEventListener('click',() => {
      removeListFromLists(number);
    });
  });
}

// code for the add list button
const addListButtonElement = document.querySelector('.js-add-list-button');
addListButtonElement.addEventListener('click',() => {
  addNewListToMenu();
});

function changeListCss(chosenList) {
  const newlyChosenElement = document.querySelector(`.js-title-list-${chosenList}`);
  newlyChosenElement.classList.add('chosen-list-title');
  if (previousChosenListElement !== newlyChosenElement) {
    previousChosenListElement.classList.remove('chosen-list-title');
  }
  previousChosenListElement = newlyChosenElement;
}

let sidebarStatus = true;

const hamburgerElement = document.querySelector('.js-hamburger-menu-button');
hamburgerElement.addEventListener('click', () => {
  if (sidebarStatus) {
    sidebarOff();
  }
  else {
    sidebarOn();
  }
});

function sidebarOff() {
  sidebarStatus = false;
  document.querySelector('.js-sidebar')
    .classList.add('side-bar-off');
  document.querySelector('.js-main-space')
    .classList.add('main-space-without-sidebar');
  document.querySelector('.js-header')
    .classList.add('header-without-sidebar');
}

function sidebarOn() {
  sidebarStatus = true;
  document.querySelector('.js-sidebar')
    .classList.remove('side-bar-off');
  document.querySelector('.js-main-space')
    .classList.remove('main-space-without-sidebar');
  document.querySelector('.js-header')
    .classList.remove('header-without-sidebar'); 
}