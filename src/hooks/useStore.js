import create from 'zustand';
import {devtools, persist} from 'zustand/middleware';

const shoppingItemsStore = set => ({
  shoppingItems: [],
  addShoppingItem: item => {
    set(state => ({
      shoppingItems: [item, ...state.shoppingItems],
    }));
  },
  removeShoppingItem: itemId => {
    set(state => ({
      shoppingItems: state.shoppingItems.filter(item => item.id === itemId),
    }));
  },
});

const useStore = create(devtools(persist(shoppingItemsStore, {name: 'shoppingItems'})));

export default useStore;
