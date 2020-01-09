import {
  search
} from './Search';
import {
  makeTree
} from './MakeTree';
import {
  sortTree
} from './SortTree';

const treeUrl = 'https://raw.githubusercontent.com/wrike/frontend-test/master/data.json';
var treeData;

function getArray() {
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

export function getTree() {
  return getArray()
    .then(array => search(array))
    .then(array => makeTree(array))
    .then(tree => sortTree(tree))
}