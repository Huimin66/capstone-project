import 'react-toastify/dist/ReactToastify.css';

import {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from 'react-stripe-checkout';
import {ToastContainer, toast} from 'react-toastify';
import styled from 'styled-components';

import BackToPreviousPages from '../components/BackToPreviousPage/BackToPreviousPage.js';
import Navigation from '../components/Navigation/Navigation.js';
import ShoppingItems from '../components/ShoppingItems/ShoppingItems.js';
import useStoreCart from '../hooks/useStore_cart';
import useStoreOrder from '../hooks/useStore_order';
import {orderNumber} from '../utils/utils.js';

export default function ShoppingCart() {
  const {shoppingItems, clearShoppingCart} = useStoreCart(state => ({
    shoppingItems: state.shoppingItems,
    clearShoppingCart: state.clearShoppingCart,
  }));

  const [order] = useState({
    id: orderNumber(),
    price: subtotal(),
    orderItems: shoppingItems,
  });

  /* eslint-disable-next-line  */
  const [callWaiter, setCallWaiter] = useState(false);

  const {addOrderItem} = useStoreOrder(state => ({
    addOrderItem: state.addOrderItem,
  }));

  function subtotal() {
    return shoppingItems.length === 0
      ? 0
      : shoppingItems
          .map(item => item.price * item.quantity)
          .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }

  async function makePayment(token) {
    const body = {
      token,
      order,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetch('http://localhost:5005/payment', {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });
      console.log(response);
      const {status} = response;
      if (200 === status) {
        /* add items in order items */
        addOrderItem(shoppingItems, order.id, order.price);
        /* clear items in shopping cart */
        clearShoppingCart();
      }
    } catch (error) {
      return console.log(error);
    }
  }

  function handleCallWaiter() {
    toast('A waiter will come to you as soon as possible!', {
      closeOnClick: true,
      toastId: 'my_toast',
      autoClose: 5000,
      closeButton: true,
      position: toast.POSITION.TOP_CENTER,
    });
    setCallWaiter(true);
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
          <ShoppingItems shoppingItems={shoppingItems} />
          <SumContainer>
            Subtotal:
            {subtotal().toFixed(2)} €
          </SumContainer>
          <Payments>
            {/* Testing in Germany with card nummber: 4000002760000016 */}
            <StripeCheckout
              stripeKey={process.env.REACT_APP_KEY}
              token={makePayment}
              name="pay bill"
              amount={order.price * 100}
            >
              <Checkout>Pay Online</Checkout>
            </StripeCheckout>
            <Checkout onClick={handleCallWaiter}>Call waiter to pay</Checkout>
          </Payments>
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
  color: var(--third-color);
`;

const BackAndTitle = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SumContainer = styled.div`
  height: 3rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: white;
  text-align: center;
  line-height: 3rem;
  margin: 0 1rem;
`;

const Message = styled.div`
  font-size: 1.2rem;
  padding: 2rem;
`;

const Payments = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const Checkout = styled.div`
  background: var(--secondary-color);
  padding: 1rem;
  border-radius: 5px;
  color: black;
  font-weight: 700;
`;
