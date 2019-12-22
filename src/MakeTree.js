export function makeTree(array) {
  array.forEach(element => {
    element.children = [];
  });

  array.forEach(element => {
    if (element.parentId) {
      let parentElement = array.find(parent => parent.id === element.parentId);
      parentElement.children.push(element);
    }

  })

  return array[array.length - 1];
}