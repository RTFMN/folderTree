function fetchTree(url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => data.sort((a, b) => {
      return b.id - a.id;
    }))
    .then(array => buildTree(array))
}

/**
 * Возвращает array со вложенной структурой дерева.
 *
 * @param {array} array Плоский массив узлов дерева.
 * @return {array} array, Массив со вложенностью узлов дерева.
 */
function buildTree(array) {
  array.forEach(element => {
    element.children = [];

    if (element.parentId) {
      let parentElement = array.find(parent => parent.id === element.parentId);
      
      // parentElement['children'].push(element); !!!NOT WORKING!!!
    }

  })
  return array;
}

export default fetchTree;