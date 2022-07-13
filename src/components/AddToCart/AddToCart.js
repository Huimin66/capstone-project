import {nanoid} from 'nanoid';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import useStore from '../../hooks/useStore.js';

export default function AddToCart({currentMenu}) {
  const {shoppingItems, addShoppingItem} = useStore(state => ({
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
      <ToastContainer />
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
