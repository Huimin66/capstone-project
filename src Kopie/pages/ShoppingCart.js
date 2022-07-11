import styled from 'styled-components';

import useStore from '../hooks/useStore.js';

export default function ShoppingCart() {
  const {shoppingItems, removeShoppingItem} = useStore(state => ({
    shoppingItems: state.shoppingItems,
    removeShoppingItem: state.removeShoppingItem,
  }));

  console.log(shoppingItems);

  return (
    <Main>
      {shoppingItems &&
        shoppingItems.map(item => {
          return (
            <ItemContainer key={item.id}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </ItemContainer>
          );
        })}
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

const ItemContainer = styled.div``;
