import styled, {css} from 'styled-components';

import Header from '../components/Header/Header.js';
import Navigation from '../components/Navigation/Navigation';
import useStoreLogin from '../hooks/useStore_login';
import useStoreOrder from '../hooks/useStore_order';

export default function Orders() {
  const {orders} = useStoreOrder(state => ({
    orders: state.orders,
  }));

  const {login, setToken} = useStoreLogin(state => ({
    login: state.login,
    setToken: state.setToken,
  }));

  function logout() {
    setToken(undefined);
  }

  return (
    <>
      <Header />
      {login.token ? (
        <UserComponent>
          <Greet>
            <span>Hello:</span>
            <span>{login.credentials.username}</span>
          </Greet>
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </UserComponent>
      ) : (
        <>
          <SpeechBubbleTipps>
            You have not logged in. After login, you can receive messages of coupons and new dishes, reserve tables,
            view history orders, etc...
          </SpeechBubbleTipps>
        </>
      )}
      <OrdersContainer>
        {orders.length === 0 && login.token ? (
          <SpeechBubbleNologin>You have not ordered anything yet.</SpeechBubbleNologin>
        ) : (
          <>
            {login.token &&
              orders.map(order => {
                return (
                  <Order key={order.orderId}>
                    <OrderDes>
                      <span>Order ID: {order.orderId}</span>
                      <span>Order Price: {order.price.toFixed(2)}€</span>
                    </OrderDes>

                    {order.orderItems.map(item => {
                      return (
                        <Items key={item.name}>
                          <IMG src={item.image} alt={item.name} />
                          <span>{item.name}</span>
                          <span>{item.quantity}</span>
                          <span>{item.price.toFixed(2)}€</span>
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
  margin: 2rem;
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
  background-color: #f7f7f7;
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
  grid-template-columns: 1fr 3fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 5px;
  font-weight: 500;
`;

const SpeechBubble = css`
  margin: 1rem auto;
  width: 80%;
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

  font-family: Arial, Helvetica, sans-serif;
`;

const UserComponent = styled.div`
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4.8rem 1.5rem 1rem 1.5rem;
  padding: 1rem;
  color: var(--third-color);
  font-size: 1.2rem;
  font-family: Optima, Gill Sans, Helvetica, Arial, sans-serif;
  font-weight: 700;
`;

const LogoutButton = styled.button`
  padding: 0.3rem;
  border-radius: 5px;
  color: var(--third-color);
  background: none;
  border: 1px solid grey;
`;

const Greet = styled.span`
  display: flex;
  gap: 0.5rem;
`;

const SpeechBubbleTipps = styled.div`
  ${SpeechBubble}
  margin: 6rem auto;
`;

const SpeechBubbleNologin = styled.div`
  ${SpeechBubble}
  font-family: Arial, Helvetica,sans-serif;
  font-weight: 500;
`;
