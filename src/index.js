import css from './index.css';
import {
  folding
} from './Folding';
import {
  getTree
} from './GetTree';
import {
  drawTree
} from './DrawTree';
import {
  sortTree
} from './SortTree';

function renderTree() {
  getTree()
    .then(tree => drawTree(tree))
}

function sort(method) {
  getTree()
    .then(tree => sortTree(tree, method))
    .then(tree => drawTree(tree))
}

document.getElementById('searchForm').addEventListener('keyup', () => {
  renderTree();
})

document.getElementById('sortIncr').addEventListener('click', () => {
  sort('sortIncr');
  console.log(1)
})

document.getElementById('sortDecr').addEventListener('click', () => {
  sort('sortDecr');
  console.log(2)
})

renderTree();