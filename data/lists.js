let lists =  JSON.parse(localStorage.getItem('savedAllLists')) || [{
  listName: 'first list',
  listNum: 1,
  listContentHTML: ''
}, {
  listName: 'second list',
  listNum: 2,
  listContentHTML: ''
}];

function saveToLocalStorage() {
  localStorage.setItem('savedAllLists', JSON.stringify(lists));
}

function addNewListToMenu() {
  let num = lists.length + 1;
  lists.push({
    listName: `list ${num}`,
    listNum: num,
    listContentHTML: ''
  });
  saveToLocalStorage();
  showListsOnMenu();
  changeList(num);
}

function removeListFromLists(count) {
  if (lists.length < 3) {
    alert('Can not delete all the lists!');
    changeList(lists.length);
    return;
  }
  lists.splice(count - 1, 1);
  saveToLocalStorage();
  reorderLists();
  showListsOnMenu();
  changeList(lists.length);
}

function reorderLists() {
  lists.forEach((list, index) => {
    list.listNum = index + 1;
  });
}