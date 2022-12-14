import allTask from './tasks-array-module.js';
import localStorageUpdate from './dynamic-storage-update.js';

const checkCompleted = (nod) => {
  const checker = nod.querySelector('input');

  const indexHolder = Number(nod.dataset.index);
  const descriptionHolder = nod.querySelector('.description');

  if (checker.checked) {
    nod.dataset.completed = true;
    allTask.forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = true;
      }
    });
    descriptionHolder.classList.add('cross-out');
  } else {
    nod.dataset.completed = false;
    allTask.forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = false;
      }
    });
    descriptionHolder.classList.remove('cross-out');
  }
  localStorageUpdate(allTask);
};

export default checkCompleted;
