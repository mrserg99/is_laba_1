const removeByClass = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
const removeChildrenByClass = (sel) => document.querySelector(sel).innerHTML = ''