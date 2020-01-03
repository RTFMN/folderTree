export function drawTree(tree) {
  let root = document.getElementById('tree');
  root.innerHTML = '';

  createNode(tree);

  function createNode(tree) {
    if (tree.parentId) {
      root = document.getElementById(tree.parentId);
    }

    let node = document.createElement('li');
    node.innerHTML = `<span>${tree.title}</span><ul id=${tree.id}></ul>`
    root.append(node);

    if (tree.children) {
      let children = tree.children;
      children.forEach(el => createNode(el));
    }
  }
}