import {nanoid} from 'nanoid';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import useCart from '../../hooks/useCartStore.js';

export default function AddToCart({currentMenu}) {
  const {shoppingItems, addShoppingItem} = useCart(state => ({
    shoppingItems: state.shoppingItems,
    addShoppingItem: state.addShoppingItem,
  }));

  function handleAddToCart(currentMenu) {
    const findItem = shoppingItems.find(item => item.name === currentMenu.name);
    if (!findItem) {
      const newShoppingItem = {
        id: nanoid(),
        name: currentMenu.name,
        image: currentMenu.image,
        price: currentMenu.price,
        quantity: 1,
      };
      addShoppingItem(newShoppingItem);
    }
    toast('Added to cart!', {
      closeOnClick: true,
      toastId: 'my_toast',
      autoClose: 2000,
      closeButton: true,
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <AddToCartContainer>
      <Span>{currentMenu.price}€</Span>
      <Button onClick={() => handleAddToCart(currentMenu)}>ADD TO CART</Button>
      <ToastContainer toastStyle={{color: 'var(--secondary-color)'}} />
    </AddToCartContainer>
  );
}

const AddToCartContainer = styled.div`
  width: 100%;
  height: 3rem;
  font-weight: 700;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;
const Span = styled.span`
  font-size: 1.4rem;
  background-color: var(--primary-light-color);
  text-align: center;
  line-height: 3rem;
  border-radius: 5px;
`;

const Button = styled.button`
  color: white;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 5px;
`;
