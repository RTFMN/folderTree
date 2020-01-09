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
  setSortMethodIncr, setSortMethodDecr
} from './SortTree';

function renderTree() {
  getTree()
    .then(tree => drawTree(tree))
}

document.getElementById('searchForm').addEventListener('keyup', () => {
  renderTree();
})

document.getElementById('sortIncr').addEventListener('click', () => {
  setSortMethodIncr();
  renderTree();
})

document.getElementById('sortDecr').addEventListener('click', () => {
  setSortMethodDecr();
  renderTree();
})

renderTree();