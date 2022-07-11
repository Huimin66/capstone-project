import {nanoid} from 'nanoid';
import styled from 'styled-components';

import useStore from '../../hooks/useStore.js';

export default function AddToCart({currentMenu}) {
  const {addShoppingItem} = useStore(state => ({
    addShoppingItem: state.addShoppingItem,
  }));

  function handleAddToCart(currentMenu) {
    const newMenu = {
      id: nanoid(),
      name: currentMenu.name,
      image: currentMenu.image,
      price: currentMenu.price,
    };
    addShoppingItem(newMenu);
    alert('Added to cart');
  }

  return (
    <AddToCartContainer>
      <Span>{currentMenu.price}€</Span>
      <Button onClick={() => handleAddToCart(currentMenu)}>ADD TO CART</Button> {/* +1 */}
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
`;
const Span = styled.span`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  background-color: #ccc;
  text-align: center;
  line-height: 3rem;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  background-color: #f77c00;
  border: none;
  padding: 0.5rem 1rem;
`;

