import {useState} from 'react';
import styled from 'styled-components';

import menusdata from '../../data.js';

export default function ShowMenus() {
  /* eslint-disable-next-line */
  const [menus, setmenus] = useState(menusdata);

  return (
    <MenusContainer>
      {menus.map(menu => {
        return (
          <Menu key={menu.id}>
            <MenuImg src={menu.image} alt={menu.name} />
            <MenuNamePriceContainer>
              <Menuname>{menu.name}</Menuname>
              <Menuprice>{menu.price + '€'}</Menuprice>
            </MenuNamePriceContainer>
          </Menu>
        );
      })}
    </MenusContainer>
  );
}

const MenusContainer = styled.ul`
  width: 80%;
  margin: 1rem 1rem 1rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  font-size: 0.8rem;
`;

const Menu = styled.li`
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  background-color: #dfdfe7;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 80% 20%;
  gap: 0.5rem;
`;

const MenuImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;

const MenuNamePriceContainer = styled.div`
  width: 100%;
  color: #036;
  margin: auto;
  display: grid;
  grid-template-columns: 5fr 1fr;
`;

const Menuname = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Menuprice = styled.span`
  font-weight: 700;
`;
