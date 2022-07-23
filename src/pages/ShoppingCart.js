import 'react-toastify/dist/ReactToastify.css';

import {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from 'react-stripe-checkout';
import {ToastContainer, toast} from 'react-toastify';
import styled from 'styled-components';

import BackToPreviousPages from '../components/BackToPreviousPage/BackToPreviousPage.js';
import Header from '../components/Header/Header.js';
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
      const response = await fetch('/api/payment', {
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
  }

  return (
    <>
      <Header />
      <Main>
        <BackAndTitle>
          <BackToPreviousPages />
          <h1>SHOPPING CART</h1>
        </BackAndTitle>

        {shoppingItems.length === 0 ? (
          <SpeechBubble>Your shopping cart is empty!</SpeechBubble>
        ) : (
          <>
            <ShoppingItems shoppingItems={shoppingItems} />
            <Sum>
              <span>Subtotal:</span>
              <span>{subtotal().toFixed(2)} €</span>
            </Sum>
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
        <ToastContainer toastStyle={{color: 'var(--secondary-color)'}} />
        <Navigation />
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 100%;
  padding: 3rem 0;
  color: var(--third-color);
`;

const BackAndTitle = styled.div`
  margin: 1.5rem 1rem 0 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.7rem;
`;

const Sum = styled.div`
  height: 3rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: white;
  text-align: center;
  line-height: 3rem;
  margin: 0 1rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const SpeechBubble = styled.div`
  margin: 2rem auto;
  width: 75%;
  position: relative;
  border-radius: 6px;
  padding: 0.8rem 1rem 1rem;
  font-size: 1.2rem;
  background-color: white;
  color: var(--third-color);
  &::after {
    color: white;
    content: '';
    position: absolute;
    top: 100%;
    left: 20px;
    border-top: 20px solid white;
    border-top-color: inherit;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  font-family: Arial, Helvetica, sans-serif;
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
