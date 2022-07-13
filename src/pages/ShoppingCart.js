import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BiMinus, BiPlus} from 'react-icons/bi';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import useStore from '../hooks/useStore.js';
import {displayToast} from '../utils/utils.js';

export default function ShoppingCart() {
  const {shoppingItems, removeShoppingItem, decreaseItemQuantity, increaseItemQuantity} = useStore(state => ({
    shoppingItems: state.shoppingItems,
    removeShoppingItem: state.removeShoppingItem,
    decreaseItemQuantity: state.decreaseItemQuantity,
    increaseItemQuantity: state.increaseItemQuantity,
  }));

  let toastId = null;

  function subtotal() {
    return shoppingItems
      .map(item => item.price * item.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  function handleDecreaseQuality(id) {
    const findItem = shoppingItems.find(item => item.id === id);
    if (findItem) {
      findItem.quantity <= 1 ? displayToast(toastId, "Quantity can't be less than 1!") : decreaseItemQuantity(id);
    }
  }

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
                  <IMG src={item.image} alt={item.name} />
                  <RightContainer>
                    <NamePriceContainer>
                      <span>{item.name}</span>
                      <span>{item.price}€</span>
                    </NamePriceContainer>
                    <OperateContainer>
                      <Operater onClick={() => handleDecreaseQuality(item.id)}>
                        <BiMinus />
                      </Operater>
                      <span>{item.quantity}</span>
                      <Operater onClick={() => increaseItemQuantity(item.id)}>
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
          <SumContainer>
            Subtotal:
            {subtotal().toFixed(2)} €
          </SumContainer>
          <ToastContainer />
        </>
      )}
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  margin: 1rem;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;
const ItemContainer = styled.div`
  height: 5rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 0.5rem;
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
  height: 4rem;
  padding: 0 1rem;
  position: fixed;
  bottom: 0;
  font-size: 1.2rem;
  font-weight: 700;
`;
