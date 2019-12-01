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

  if (root) {
    let rootLi = document.createElement('li');
    rootLi.innerHTML = `<span>${root.title}</span><ul id=${root.id}></ul>`;
    document.getElementById('tree').append(rootLi);
  } else {
    let error = document.createElement('li');
    error.innerHTML = `Ничего не найдено`;
    document.getElementById('tree').append(error);
  }
}

const createFolder = folder => {
  let ul = document.getElementById(folder.parentId);

  let li = document.createElement('li');
  li.innerHTML = `<span>${folder.title}</span><ul id=${folder.id}></ul>`
  ul.append(li);
}

const searching = (data) => {
  let searchField = document.getElementById('searchField');
  
  renderTree(data);
  
  searchField.addEventListener('keyup', () => {
    let tree = [];
    let searchRequest = searchField.value.toLowerCase();
    console.log(searchRequest, typeof (searchRequest));
    let id = [];
    
    const hasParent = (folder) => {
      if (folder.parentId) {
        if (!id.includes(folder.parentId)) {
          id.push(folder.parentId);
          let parent = data.find(elem => elem.id === folder.parentId);
          hasParent(parent);
        }
      }
    }

    data.forEach(element => {
      if (element.title.toLowerCase().includes(searchRequest)) {
        if (!id.includes(element.id)) {
          id.push(element.id);
          console.log(`Элемент ${element.title} имеет в имени ${searchRequest}`);
        }
        hasParent(element);
      }
    });

    id.forEach(element => {
      tree.push(data.find(elem => elem.id === element));
    });
    
    renderTree(tree);
  })
}

const renderTree = json => {
  document.getElementById('tree').innerHTML = '';
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
    .then(data => searching(data))
}

window.onload = getFolderTree();