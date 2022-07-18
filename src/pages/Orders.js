import styled from 'styled-components';

import Navigation from '../components/Navigation/Navigation';
import useStoreOrder from '../hooks/useStore_order';

export default function Orders() {
  const {orders} = useStoreOrder(state => ({
    orders: state.orders,
  }));

  return (
    <>
      <OrdersContainer>
        {orders.length === 0 ? (
          <Message>You have not ordered anything yet.</Message>
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
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 700;
  padding-bottom: 3rem;
`;

const Order = styled.div`
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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

const Message = styled.div`
  font-size: 1.2rem;
  padding: 2rem;
`;
