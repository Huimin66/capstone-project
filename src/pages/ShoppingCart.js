import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BiMinus, BiPlus} from 'react-icons/bi';
import styled from 'styled-components';

import useStore from '../hooks/useStore.js';

export default function ShoppingCart() {
  const {shoppingItems, removeShoppingItem, minusItemQuantity, plusItemQuantity} = useStore(state => ({
    shoppingItems: state.shoppingItems,
    removeShoppingItem: state.removeShoppingItem,
    minusItemQuantity: state.minusItemQuantity,
    plusItemQuantity: state.plusItemQuantity,
  }));

  console.log(shoppingItems);

  return (
    <Main>
      <h1>Shopping Cart</h1>
      {shoppingItems.length === 0 ? (
        <div>Your shopping cart is empty!</div>
      ) : (
        <>
          <CartContainer>
            {shoppingItems.map(item => {
              return (
                <ItemContainer key={item.id}>
                  <IMG src={item.image} />
                  <RightContainer>
                    <NamePriceContainer>
                      <span>{item.name}</span>
                      <span>{item.price}€</span>
                    </NamePriceContainer>
                    <OperateContainer>
                      <Operater onClick={() => minusItemQuantity(item.id)}>
                        <BiMinus />
                      </Operater>
                      <span>{item.quantity}</span>
                      <Operater onClick={() => plusItemQuantity(item.id)}>
                        <BiPlus />
                      </Operater>
                      <FontContainer>
                        <FontAwesomeIcon onClick={() => removeShoppingItem(item.id)} icon={faTrashCan} />
                      </FontContainer>
                    </OperateContainer>
                  </RightContainer>
                </ItemContainer>
              );
            })}
          </CartContainer>
          <SumContainer>total</SumContainer>
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  padding: 0.5rem;
  height: 100vh;
  display: block;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
`;
const ItemContainer = styled.div`
  height: 5rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 0.5rem;
  background-color: white;
`;

const IMG = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 5px;
`;

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NamePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OperateContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 5fr;
  justify-items: center;
  align-items: center;
`;

const Operater = styled.button`
  padding: 0.2rem;
`;

const FontContainer = styled.div`
  font-size: 1.2rem;
  justify-self: end;
`;

const SumContainer = styled.div`
  width: 100%;
  height: 3rem;
  position: sticky;
  bottom: 0;
  left: 0;
`;
