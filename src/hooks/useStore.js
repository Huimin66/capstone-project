import create from 'zustand';
import {persist} from 'zustand/middleware';

const shoppingItemsStore = set => ({
  shoppingItems: [],
  addShoppingItem: item => {
    set(state => ({
      shoppingItems: [item, ...state.shoppingItems],
    }));
  },
  removeShoppingItem: itemId => {
    set(state => ({
      shoppingItems: state.shoppingItems.filter(item => item.id !== itemId),
    }));
  },
  emptyShoppingItem: () => {
    set(() => ({
      shoppingItems: [],
    }));
  },

  plusItemQuantity: itemId => {
    set(state => ({
      shoppingItems: state.shoppingItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item
      ),
    }));
  },
  minusItemQuantity: itemId => {
    set(state => ({
      shoppingItems: state.shoppingItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity} : item
      ),
    }));
  },
});

const useStore = create(persist(shoppingItemsStore, {name: 'shoppingItems'}));

export default useStore;
