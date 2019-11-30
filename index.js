const sortJsonById = (json) => {
  json.sort((a, b) => {
    return (a.id - b.id);
  })
}

const findRoot = json => {
  let root = json.find((elem) => {
    return elem.id === -1;
  })
  return root;
}

const createRoot = json => {
  let root = findRoot(json);

  let ul = document.createElement('ul');
  ul.id = 'tree';
  ul.className = 'tree';
  document.body.append(ul);

  let rootLi = document.createElement('li');
  rootLi.innerHTML = `${root.title}<ul id=${root.id}></ul>`;
  document.getElementById('tree').append(rootLi);
}

const createFolder = folder => {
  let ul = document.getElementById(folder.parentId);

  let li = document.createElement('li');
  li.innerHTML = `${folder.title}<ul id=${folder.id}></ul>`
  ul.append(li);
}

const renderTree = json => {
  sortJsonById(json);
  createRoot(json);

  for (let i = 0; i < json.length; i++) {
    if (json[i] && json[i].parentId) {
      createFolder(json[i]);
    }
  }
}

const getFolderTree = () => {
  return fetch('https://raw.githubusercontent.com/wrike/frontend-test/master/data.json')
    .then(res => res.json())
    .then(data => renderTree(data))
}

window.onload = getFolderTree();