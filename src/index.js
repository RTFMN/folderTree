import css from './index.css';
import {folding} from './Folding';

import {getTree} from './GetTree';
import {search} from './Search';
import {makeTree} from './MakeTree';
import {sortTree} from './SortTree';
import {drawTree} from './DrawTree';

function renderTree() {
  getTree()
    .then(array => search(array))
    .then(array => makeTree(array))
    .then(tree => sortTree(tree))
    .then(tree => drawTree(tree))
}
  
document.getElementById('searchForm').addEventListener('keyup', () => {
  renderTree();
})

// someSortButton.addEventListener('click', () => {
//   renderTree()
// });

renderTree();