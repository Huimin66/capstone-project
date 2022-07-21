import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import styled, {css} from 'styled-components';

import Navigation from '../components/Navigation/Navigation.js';

export default function Home() {
  const navigate = useNavigate();

  function handleLogin() {
    /* login will be implemented in next user story, update this when work on login page */
    /* navigate('/login'); */
  }

  return (
    <>
      <HomeContainer>
        <H1>Welcome to Joyfeel Wok!</H1>
        <Icon>
          <AiOutlineQuestionCircle />
        </Icon>
        <Span>Login to receive messages for new dishes and coupons, reservation, view history orders, etc...</Span>

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
  height: 93vh;
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
  display: none;
  font-size: 0.9rem;
  margin: 4rem;
  padding: 1rem;
  background-color: white;
  color: black;
  border-radius: 8px;
  position: absolute;
  bottom: 7.5rem;
`;

const Icon = styled.div`
  color: var(--secondary-color);
  position: absolute;
  bottom: 9.5rem;
  left: 80%;

  &:hover ${Span} {
    display: block;
  }
`;
