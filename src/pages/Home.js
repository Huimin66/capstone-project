import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import styled, {css} from 'styled-components';

import Navigation from '../components/Navigation/Navigation.js';

export default function Home() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login');
  }

  return (
    <>
      <HomeContainer>
        <H1>Welcome to Joyfeel Wok!</H1>
        <Icon>
          <AiOutlineQuestionCircle />
          <Span>Login to receive messages for new dishes and coupons, reservation, view history orders, etc...</Span>
        </Icon>

        <LoginButton onClick={handleLogin}>Login</LoginButton>
        <GoMenu
          onClick={() => {
            navigate('/menus');
          }}
        >
          Go to menus
        </GoMenu>
      </HomeContainer>
      <Navigation />
    </>
  );
}

const H1 = styled.h1`
  font-size: 1.7rem;
  margin: 2rem auto;
  padding: 0.5rem;
  border-radius: 5px;
  color: white;
  font-weight: 700;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url('https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-size: 1.6rem;
  font-family: Helvetica, serif;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = css`
  width: 60%;
  position: absolute;
  bottom: 2rem;
  right: 50%;
  transform: translate(50%, 0);
  padding: 0.3rem 1rem;
  background-color: var(--primary-light-color);
  border-radius: 6px;
  color: #036;
  border: none;
  display: block;
  font-weight: 700;
`;

const LoginButton = styled.button`
  ${Button}
  bottom: 8rem;
  color: var(--secondary-color);
`;

const GoMenu = styled.button`
  ${Button}
  bottom: 5rem;
  background-color: var(--secondary-color);
  color: var(--primary-light-color); ;
`;

const Span = styled.span`
  position: absolute;
  width: 60%;
  top: -3rem;
  left: -23rem;
  visibility: hidden;
  font-size: 0.9rem;
  padding: 1rem;
  background-color: white;
  color: black;
  border-radius: 8px;
`;

const Icon = styled.div`
  color: var(--secondary-color);
  position: relative;
  bottom: -25rem;
  left: 80%;

  &:hover ${Span} {
    visibility: visible;
  }
`;
