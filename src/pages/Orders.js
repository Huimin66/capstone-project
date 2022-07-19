import styled from 'styled-components';

import Header from '../components/Header/Header.js';
import Navigation from '../components/Navigation/Navigation';
import useStoreOrder from '../hooks/useStore_order';

export default function Orders() {
  const {orders} = useStoreOrder(state => ({
    orders: state.orders,
  }));

  return (
    <>
      <Header />
      <OrdersContainer>
        {orders.length === 0 ? (
          <SpeechBubble>You have not ordered anything yet.</SpeechBubble>
        ) : (
          <>
            {orders.map(order => {
              return (
                <Order key={order.orderId}>
                  <OrderDes>
                    <span>Order ID: {order.orderId}</span>
                    <span>Order Price: {order.price}€</span>
                  </OrderDes>

                  {order.orderItems.map(item => {
                    return (
                      <Items key={item.name}>
                        <IMG src={item.image} alt={item.name} />
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <span>{item.quantity}</span>
                        <span>{item.price}€</span>
                      </Items>
                    );
                  })}
                </Order>
              );
            })}
          </>
        )}
      </OrdersContainer>

      <Navigation />
    </>
  );
}

const OrderDes = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--sencondary-color);
  border-radius: 5px;
`;

const OrdersContainer = styled.div`
  margin: 4.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 700;
  padding-bottom: 3rem;
`;

const Order = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #efefef;
  border-radius: 5px;
  box-shadow: rgba(247, 124, 0, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px,
    rgba(247, 124, 0, 0.35) 0 -2px 6px 0 inset;
`;

const IMG = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Items = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 1rem;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 5px;
  font-weight: 500;
`;

const SpeechBubble = styled.div`
  margin: 2rem auto;
  width: 70%;
  position: relative;
  border-radius: 6px;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: white;
  color: var(--third-color);
  z-index: -1;
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
`;
