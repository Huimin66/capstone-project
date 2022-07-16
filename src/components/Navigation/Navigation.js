import {FiShoppingCart} from 'react-icons/fi';
import {MdMenuBook} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import ScrollTop from '../ScrollTop/ScrollTop';

export default function Navigation() {
  return (
    <>
      <Nav>
        <StyledUl>
          <li>
            <StyledNavLink to="/">
              <NavContainer>
                <MdMenuBook data-testid="menus-icon" />
                <Span>Menus</Span>
              </NavContainer>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cart">
              <NavContainer>
                <FiShoppingCart data-testid="cart-icon" />
                <Span>Cart</Span>
              </NavContainer>
            </StyledNavLink>
          </li>
        </StyledUl>
        <ScrollTop />
      </Nav>
    </>
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

const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: #f77c00;
  }
`;
