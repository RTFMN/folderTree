import css from './index.css';

import fetchTree from './FetchTree';

const treeUrl = 'https://raw.githubusercontent.com/wrike/frontend-test/master/data.json';

const tree = fetchTree(treeUrl);

console.log(tree);