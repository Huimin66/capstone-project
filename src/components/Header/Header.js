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
  margin: auto;
  font-size: 2rem;
  font-family: Arial Black, sans-serif;
  color: var(--secondary-color);
  filter: drop-shadow(3px 3px 2px #ccc);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
  background-color: #d2ddd9;
  text-shadow: 0.1em 0.1em #c0c0c0;
`;
