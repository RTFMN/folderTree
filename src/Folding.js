window.onclick = function (event) {
  if (event.target.tagName != 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
  if (childrenContainer.hidden) childrenContainer.parentNode.className = "folded";
  else childrenContainer.parentNode.className = "";
}