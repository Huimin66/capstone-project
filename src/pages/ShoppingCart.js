import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BiMinus, BiPlus} from 'react-icons/bi';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import BackToPreviousPages from '../components/BackToPreviousPage/BackToPreviousPage.js';
import Navigation from '../components/Navigation/Navigation.js';
import ScrollTop from '../components/ScrollTop/ScrollTop.js';
import useStore from '../hooks/useStore.js';

export default function ShoppingCart() {
  const {shoppingItems, removeShoppingItem, decreaseItemQuantity, increaseItemQuantity} = useStore(state => ({
    shoppingItems: state.shoppingItems,
    removeShoppingItem: state.removeShoppingItem,
    decreaseItemQuantity: state.decreaseItemQuantity,
    increaseItemQuantity: state.increaseItemQuantity,
  }));

  function subtotal() {
    return shoppingItems
      .map(item => item.price * item.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  function handleDecreaseQuality(id) {
    const findItem = shoppingItems.find(item => item.id === id);
    if (findItem) {
      findItem.quantity <= 1
        ? toast("Quantity can't be less than 1!", {
            closeOnClick: true,
            toastId: 'my_toast',
            autoClose: 2000,
            closeButton: true,
            position: toast.POSITION.TOP_CENTER,
          })
        : decreaseItemQuantity(id);
    }
  }

  return (
    <Main>
      <BackAndTitle>
        <BackToPreviousPages />
        <h1>Shopping Cart</h1>
      </BackAndTitle>

      {shoppingItems.length === 0 ? (
        <Message>Your shopping cart is empty!</Message>
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
        </>
      )}

      <ToastContainer />
      <Navigation />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  padding-bottom: 4rem;
  color: #036;
`;

const BackAndTitle = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem;
`;
const ItemContainer = styled.div`
  height: 6rem;
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
  height: 3rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: #f77c00;
  text-align: center;
  line-height: 3rem;
  margin: 0 1rem;
`;

const Message = styled.div`
  width: 100%;
  font-size: 1.2rem;
  padding: 2rem;
  margin: 0 auto;
`;
