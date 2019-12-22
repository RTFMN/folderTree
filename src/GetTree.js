const treeUrl = 'https://raw.githubusercontent.com/wrike/frontend-test/master/data.json';
var treeData;

export function getTree() {
  if (treeData) return Promise.resolve(treeData);

  return fetch(treeUrl)
    .then(res => res.json())
    .then(arr => filterTree(arr))
    .then(tree => {
      treeData = tree;

      return treeData;
    })
}

function filterTree(arr) {
  arr.sort(sortingById)
  return arr; 
}

function sortingById(a, b) {
  return b.id - a.id;
}