import styled from 'styled-components';

export default function AddToCart({currentmenu}) {
  return (
    <AddToCartContainer>
      <Span>{currentmenu.price}€</Span>
      <Button>ADD TO CART</Button>
    </AddToCartContainer>
  );
}

const AddToCartContainer = styled.div`
  width: 100%;
  height: 3rem;
  position: sticky;
  bottom: 0;
  left: 0;
  font-weight: 700;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Span = styled.span`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  /*  background-color: #fec17e; */
  background-color: #ccc;
  text-align: center;
  line-height: 3rem;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  /*  background-color: #fec17e; */
  background-color: #f77c00;
  border: none;
  padding: 0.5rem 1rem;
`;
