import styled from 'styled-components';

import useStore from '../hooks/useStore.js';

export default function ShoppingCart() {
  const {shoppingItems, removeShoppingItem} = useStore(state => ({
    shoppingItems: state.shoppingItems,
    removeShoppingItem: state.removeShoppingItem,
  }));

  return (
    <ShoppingCart>
      {shoppingItems &&
        shoppingItems.map(item => {
          return (
            <div key={item.id}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          );
        })}
    </ShoppingCart>
  );
}
