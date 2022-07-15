import {FiShoppingCart} from 'react-icons/fi';
import {MdMenuBook} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <Nav>
      <StyledUl>
        <li>
          <NavLink to="/" style={({isActive}) => (isActive ? {color: '#f77c00'} : {color: 'black'})}>
            <NavContainer>
              <MdMenuBook data-testid="menus-icon" />
              <Span>Menus</Span>
            </NavContainer>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" style={({isActive}) => (isActive ? {color: '#f77c00'} : {color: 'black'})}>
            <NavContainer>
              <FiShoppingCart data-testid="cart-icon" />
              <Span>Cart</Span>
            </NavContainer>
          </NavLink>
        </li>
      </StyledUl>
    </Nav>
  );
}

const Nav = styled.nav`
  max-width: 600px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 1.5rem;
`;
const StyledUl = styled.ul`
  border-top: 1px solid #ccc;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f7f7f7;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: 0.6rem;
`;
