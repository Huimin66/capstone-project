import {toast} from 'react-toastify';

/* Get categories form the given menus */
export function getAlternativeCategorie(menus) {
  const categories = ['All'];
  menus.forEach(menu => {
    if (!categories.includes(menu.category)) {
      categories.push(menu.category);
    }
  });
  return categories;
}

/* I want the menus showed in this order:  'All', 'Starters', 'Mains', 'Pastries', 'Drinks'*/
/* Without the following function the menus will be showed like: 'All', 'Mains', 'Starters', 'Drinks', 'Pastries'*/

export function getCategoriesAndSort(menus, sortBy) {
  const categories = ['All'];
  menus.forEach(menu => {
    if (!categories.includes(menu.category)) {
      categories.push(menu.category);
    }
  });

  let sortByObj = {};
  sortBy.forEach((menuPoint, index) => {
    sortByObj = {...sortByObj, [menuPoint]: index};
  });

  const sortedCategories = categories.sort((a, b) => sortByObj[a] - sortByObj[b]);
  return sortedCategories;
}

/* filter toastify, if not filtered, there can be a lot of toastify messages showed at the same time */
export function displayToast(toastId, message) {
  if (!toast.isActive(toastId)) {
    toastId = toast(message, {
      closeOnClick: true,
      toastId: 'my_toast',
      autoClose: 2000,
      closeButton: true,
      position: toast.POSITION.TOP_CENTER,
    });
  }
}
