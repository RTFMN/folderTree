export function sortTree(tree, method) {
  let sorting = method == 'sortIncr' ? sortIncr : sortDecr;

  if (tree.children) {
    sortChildren(tree, sorting);
  }

  return tree;
}

function sortChildren(obj, sorting) {
  let objectChildren = obj.children;

  objectChildren.sort(sorting);
  objectChildren.forEach(element => {
    sortChildren(element, sorting);
  });
}

function sortIncr(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

function sortDecr(a, b) {
  if (a.title < b.title) {
    return 1;
  }
  if (a.title > b.title) {
    return -1;
  }
  return 0;
}