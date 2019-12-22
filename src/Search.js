export function search(tree) {
  let searchField = document.getElementById('searchForm');
  if (!searchField.value) return tree;

  let id = [];
  let searchResult = [];
  let searchRequest = searchField.value.toLowerCase();

  tree.forEach(element => {
    if (element.title.toLowerCase().includes(searchRequest)) {
      if (!id.includes(element.id)) {
        id.push(element.id);
      }
      pushParents(element);
    }
  });

  function pushParents(el) {
    if (el.parentId) {
      if (!id.includes(el.parentId)) {
        id.push(el.parentId);
        let parent = tree.find(elem => elem.id === el.parentId);
        pushParents(parent);
      }
    }
  }

  id.forEach(element => {
    searchResult.push(tree.find(elem => elem.id === element));
  });

  function sortingById(a, b) {
    return b.id - a.id;
  }

  return searchResult.sort(sortingById);
}