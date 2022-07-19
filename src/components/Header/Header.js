import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <span>JOYFEEL WOK</span>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  position: fixed;
  height: 3.5rem;
  top: 0;
  left: 0;
  font-size: 2rem;
  font-family: Arial Black;
  color: var(--secondary-color);
  filter: drop-shadow(3px 3px 2px #000000);
  font-weight: 700;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
`;
